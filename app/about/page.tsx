'use client';

import React from "react";
import ShaderCanvas from "@/components/ShaderCanvas";

const AboutPage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
            {/* shader fills the parent that covers the full viewport / full rect in godot sense */}
            <ShaderCanvas />

            {/* content sits on top */}
            <div style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
                <h1>About Page</h1>
                <p>Welcome to the About Page of my website!</p>
            </div>
        </div>
    );
};

export default AboutPage;