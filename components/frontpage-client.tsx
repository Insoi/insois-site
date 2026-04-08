'use client';

import ProfilePicture from "@/components/pfp";
import Link from "next/link";
import ShaderCanvas from "@/components/ShaderCanvas";
import Image from "next/image";

{/* gets used on the main front page from client stored on server components */}

export default function frontpageClient() {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
            <ShaderCanvas />

            <div style={{
                position: 'relative',
                zIndex: '1',
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                minHeight: '100vh',
                pointerEvents: 'none',
            }}>
                <div style={{
                    width: "100%",
                    maxWidth: '1080px',
                    background: "rgba(20, 20, 20, 0.72)",
                    border: "1px dashed rgba(255,255,255,0.25)",
                    padding: "0rem 2.5rem 0.5rem 2.5rem",
                    backdropFilter: "blur(5px)",
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', margin: '-1rem 0rem 0.5rem -3.5rem' }}>
                        <Image src="/images/icon.png" alt="Insoi logo" width={175} height={175} />
                        <h1 style={{ fontFamily: 'weiss-rundgotisch', fontSize: '6rem', margin: "0 0 -20px 0", color: "#DDDDCC"}}>Insoi</h1>
                    </div>

                    <p style={{ margin: '0rem 15rem 1.3rem 0rem', lineHeight: 1, fontSize: '1.2rem', color: "#888877", fontFamily: "karmilla-regular" }}>
                        <b style={{ color: "#DDDDCC", fontFamily: "karmilla-bold" }}>I am a developer, drummer, and so-called artist.</b>{" "}
                        Sharing my projects, games and whatever else I keep starting but never finishing.
                    </p>

                    <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '1rem' }} />

                    {/* Two columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                        {/* Left: Pages */}
                        <div>
                            <h1 style={{ fontFamily: 'stretch-pro', fontSize: '1.5rem', color: "#DDDDCC", marginBottom: "0.25rem"}}>Pages</h1>
                            <div style={{ display: 'grid', gridTemplateColumns: '0fr 1fr', gap: '0.2rem 0.5rem', marginBottom: '1rem' }}>
                                <Link href="/" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular" }}>About me</Link>
                                <Link href="/art" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular" }}>Art Gallery</Link>
                                <Link href="/other-projects" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular" }}>Projects</Link>
                                <Link href="https://discord.gg/sqDhRrgqve" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular" }}>Discord</Link>
                                <Link href="/games" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular"  }}>Games</Link>
                                <Link href="https://github.com/insoi" style={{ textDecoration: 'underline', color: "#DDDDCC", fontFamily: "karmilla-regular"  }}>Github</Link>
                            </div>

                            {/* Splash box */}
                            <div style={{
                                border: '1px dashed rgba(255,255,255,0.35)',
                                padding: '0.75rem 1rem',
                                fontFamily: 'minecraft',
                                fontSize: '0.75rem',
                                textAlign: 'center',
                                maxWidth: '280px',
                            }}>
                                This is splash text similar to the one in Minecraft
                            </div>
                        </div>

                        {/* Right: Journal */}
                        <div style={{ overflowY: 'auto', maxHeight: '260px' }}>
                            <h2 style={{ marginBottom: '0.25rem', color: "#DDDDCC" }}>Journal ✳</h2>
                            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: "#DDDDCC" }}>11-03-2026</p>
                            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: "#DDDDCC" }}>
                                V'ex eaque sonini invidia w "septima" ad praesuli nisl li semine.
                                Ad se ac velit hac, M duis si succubam d tempus nativa.
                                Eget "imperia" ille ad nunc ea v per in obsequio repellendus
                                nec ea neglexi partibus ullo M'o ad ut habeat.

                                S amet iste nimiam orci si nam nisi ad ab innoccntiae in reponat
                                se feugait eum matretn bonarum.
                                Earum'p y poloni qui pectori typi solenni mi Gentes mi vel
                                pretia elit, proin elit sunt caelestis class impiorum, hic miscere
                                EA ac Semine Comparuit, dis ab fames ea diam caelestis ii.

                                Ac S's blandit nisl, V'm naturalem portorium nisi minimum eum odio
                                ad dimittere dominium ullo minus at Eorum.
                                Ex est nisi wisi directe si sint, E'o augue liber o sem esse aspirat
                                hic vel magna te capitis eros in depopulatores
                                vel SE adversitates possit mi Morbi.

                                Sed regnum urna id sint recenti in fretus eu eu LecTus,
                                est rationes il'a gestarum diam ti obesse metus in ii me quos ti
                                hic est purus te regnabit, ex nisi id me illum lius alique
                                natus Dolor / AB / EA.

                                Zzril O non filio jormavit aut sem in eum aut Nemo.id equestrem,
                                A non luminare e est daniae ea sed probationes. Rem nibh odit.
                                O asylum accumsan quo "sit" quo discernere rem ad potentissime, nec
                                est mus D netus dis atque il te tempore lacus fremilut laesae.
                                Unde sit dis lius odio sed porta id animi leo orci Arduas.nec,
                                ea odio'ea pede vero quo nobis si lius ea w hominem capere.
                                V pede ti'm qui sit nec laborandum, est mus, eius agitur eget ottomanici nam regibus, ac nibh id sunt lius ea ti id
                                quae massa intendo si victoris ii ab ad est ipsa.
                                Tui A'a auctor te odit nec occasionem sed totam quos subsolanea
                                non HAC dis quod.

                                Armorum, ii nec per usus architecto mi ex refugium hac usus,
                                assum vel ea.
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
                        <button style={{ background: 'none', border: 'none', color: '#DDDDCC', cursor: 'pointer', padding: 0 }}>EN</button>
                        {" / "}
                        <button style={{ background: 'none', border: 'none', color: '#DDDDCC', cursor: 'pointer', padding: 0 }}>DK</button>
                    </div>

                </div>
            </div>
        </div>
    );
}