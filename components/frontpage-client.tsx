'use client';

import React, { useState } from "react";
import Link from "next/link";
import ShaderCanvas from "./ShaderCanvas";
import SplashText from "./splash"
import {t, Lang} from "../content/translations";
import LangToggle from "./language-toggle"
import Image from "next/image";

const underlineStyle = {
    textDecorationLine: 'underline',
    textDecorationColor: "#888877",
    textDecorationThickness: "3px",
    textUnderlineOffset: "2px",
    width: 'fit-content',
};

{/* gets used on the main front page from client stored on server components */}

export default function frontpageClient() {
    const [lang, setLang] = useState<Lang>("en");
    const tx = t[lang];

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
                    maxWidth: '1150px',
                    background: "rgba(43, 43, 43, 0.33)",
                    border: "2px solid #444433",
                    borderBottomWidth: "0",
                    padding: "0rem 2.5rem 1rem 2.5rem",
                    pointerEvents: 'all',
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', margin: '-1rem 0rem 0.75rem -3.5rem' }}>
                        <Image src="/images/icon.png" alt="Insoi logo" width={175} height={175} />
                        <h1 style={{ fontFamily: 'weiss-rundgotisch', fontSize: '6rem', margin: "0 0 -20px 0", color: "#DDDDCC"}}>Insoi</h1>
                    </div>

                    <p style={{ margin: '0rem 22rem 1.2rem 0rem', lineHeight: 1.1, fontSize: '1.2rem', color: "#888877", fontFamily: "karmilla-regular" }}>
                        <span style={{ color: "#DDDDCC", fontFamily: "karmilla-bold" }}>{tx.subtitle}</span>{" "}
                        {tx.subtitleRest}
                    </p>

                    <hr style={{ borderColor: 'rgba(255,255,255,0.2)', marginBottom: '0.8rem' }} />

                    {/* Two columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.42fr', gap: '2rem' }}>

                        {/* Left: Pages */}
                        <div>
                            <h1 style={{ fontFamily: 'stretch-pro', color: "#DDDDCC", fontSize: "1.5rem" }}>{tx.pages}</h1>
                            <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: "0rem 1.2rem", lineHeight: 1.2, marginBottom: '1rem', fontSize: "1.15rem", fontFamily: "karmilla-regular", color: "#DDDDCC" }}>
                                {tx.pageLinks.map(({ label, href }) => (
                                    <Link key={href} href={href} style={underlineStyle}>{label}</Link>
                                ))}
                            </div>

                            {/* Splash box */}
                            <SplashText lang={lang} />
                        </div>

                        {/* Right: Journal */}
                        <div style={{ overflowY: 'auto', maxHeight: '260px' }}>
                            <h2 style={{ color: "#DDDDCC", fontSize: "1.5rem" }}>{tx.journal} ✎ᝰ.ᐟ⋆⑅˚₊</h2>
                            <p style={{ ...underlineStyle, fontFamily: "karmilla-bold", fontSize: "1.15rem", marginBottom: '0.5rem', color: "#DDDDCC" }}>11-03-2026</p>
                            <p style={{ fontFamily: "karmilla-regular", fontSize: '1.15rem', lineHeight: 1.15, color: "#DDDDCC" }}>
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
                    <div style={{ marginTop: '2rem', fontSize: '0.8rem', fontFamily: "stretch-pro" }}>
                        <LangToggle lang={lang} setLang={setLang} />
                    </div>

                </div>
            </div>
        </div>
    );
}