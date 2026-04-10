'use client';
import { useEffect, useRef } from 'react';

// Source: https://fragcoord.xyz/s/vkh37ni4

const FRAG = `
precision highp float;
uniform vec2 u_resolution;
uniform vec2 u_camera; // yaw, pitch from drag

mat2 rotate2D(float r){ return mat2(cos(r), sin(r), -sin(r), cos(r)); }

mat3 rotateY(float a) {
  return mat3(cos(a),0,sin(a), 0,1,0, -sin(a),0,cos(a));
}
mat3 rotateX(float a) {
  return mat3(1,0,0, 0,cos(a),-sin(a), 0,sin(a),cos(a));
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec4 yellowWarm(float t) {
  vec3 dark  = vec3(0.08, 0.07, 0.04);  // deep dark olive-black
  vec3 mid   = vec3(0.50, 0.48, 0.35);  // muted yellow-brown
  vec3 light = vec3(0.87, 0.87, 0.80);  // #DDDDCC icy yellow-grey used throughout the whole color pallete
  vec3 col = t < 0.5
    ? mix(dark, mid,   t * 2.0)
    : mix(mid,  light, (t - 0.5) * 2.0);
  return vec4(col, 1.0);
}

void main() {
  fragColor = vec4(0.0);
  vec3 dir = normalize(gl_FragCoord.rgb * 2.0 - vec3(u_resolution, 1.0).xyy);
  dir = rotateY(u_camera.x) * rotateX(u_camera.y) * dir;

  vec3 q, p;
  float z = 0.0;
  for (float d = 0.0, i = 0.0, j = 0.0; i++ < 50.0; ) {
    p = z * dir - vec3(1.0, 2.0, 1.0);
    for (q = p, d = p.y, j = 21.0; j > 0.01; j /= 4.0)
      q.xz *= rotate2D(1.0 + i / 600.0),
      d = max(d, min(min(q = j * 0.8 - abs(mod(q, j + j) - j), q.y).x, q.z));
    z += d;
    i++;
    float brightness = 1.0 / (40.0 * exp(d * i * 3.0));
    float t = clamp(0.15 + 0.5 * cos(i * 0.18 + 0.0) + 0.35, 0.0, 1.0);
    fragColor += yellowWarm(t) * brightness;
  }
  fragColor.rgb = pow(fragColor.rgb, vec3(0.85));
  fragColor.rgb *= 0.9;
  fragColor.a = 1.0;

  float noise = hash(gl_FragCoord.xy) * 0.10 - 0.03;
  fragColor.rgb += noise;
}
`;

const AUTO_ROTATE_SPEED = 0.00004;
const DRAG_SPEED = 0.005;

export default function ShaderCanvas() {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const rafRef = useRef(null);
  const cameraRef = useRef({ yaw: 100 * Math.PI / 180, pitch: 0 }); // changing the starting position of the camera
  const dragRef = useRef({ active: false, lastX: 0, lastY: 0 });
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return;
    glRef.current = gl;

    const isGL2 = !!canvas.getContext('webgl2');

    const fragSrc = isGL2
        ? `#version 300 es\nprecision highp float;\nout vec4 fragColor;\n${FRAG}`
        : `precision highp float;\n#define fragColor gl_FragColor\n${FRAG}`;

    const vertSrc = isGL2
        ? `#version 300 es\nin vec2 a_position;\nvoid main(){gl_Position=vec4(a_position,0,1);}`
        : `attribute vec2 a_position;\nvoid main(){gl_Position=vec4(a_position,0,1);}`;

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error(gl.getShaderInfoLog(s));
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    programRef.current = prog;

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    function resize() {
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    function render(timestamp) {
      // Auto-rotate yaw when not dragging
      if (!dragRef.current.active) {
        if (lastTimeRef.current !== null) {
          const delta = timestamp - lastTimeRef.current;
          cameraRef.current.yaw += AUTO_ROTATE_SPEED * delta;
        }
      }
      lastTimeRef.current = timestamp;

      gl.useProgram(prog);
      gl.uniform2f(gl.getUniformLocation(prog, 'u_resolution'), canvas.width, canvas.height);
      gl.uniform2f(gl.getUniformLocation(prog, 'u_camera'), cameraRef.current.yaw, cameraRef.current.pitch);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    function onDown(e) {
      dragRef.current.active = true;
      dragRef.current.lastX = e.clientX ?? e.touches?.[0].clientX;
      dragRef.current.lastY = e.clientY ?? e.touches?.[0].clientY;
      canvas.style.cursor = 'grabbing';
    }
    function onMove(e) {
      if (!dragRef.current.active) return;
      const x = e.clientX ?? e.touches?.[0].clientX;
      const y = e.clientY ?? e.touches?.[0].clientY;
      const dx = x - dragRef.current.lastX;
      const dy = y - dragRef.current.lastY;
      dragRef.current.lastX = x;
      dragRef.current.lastY = y;
      cameraRef.current.yaw += dx * DRAG_SPEED;
      cameraRef.current.pitch = Math.max(0, Math.min(0.524, cameraRef.current.pitch + dy * DRAG_SPEED));
    }
    function onUp() {
      dragRef.current.active = false;
      lastTimeRef.current = null;
      canvas.style.cursor = 'grab';
    }

    canvas.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    canvas.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              cursor: 'grab',
              touchAction: 'none',
            }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          pointerEvents: 'none',
        }} />
      </div>
  );
}
