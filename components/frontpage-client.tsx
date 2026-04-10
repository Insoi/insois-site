'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ShaderCanvas from "./ShaderCanvas";
import SplashText from "./splash";
import JournalPage from "./journal-page";
import { JournalPost } from "@/content/journal-index";

import {t, Lang} from "@/content/translations";
import LangToggle from "./language-toggle";

type Props = {
    enPosts: JournalPost[];
    dkPosts: JournalPost[];
}

{/* gets used on the main front page from client stored on server components */}

export default function FrontpageClient({ enPosts, dkPosts }: Props) {
    const [lang, setLang] = useState<Lang>("en");
    const tx = t[lang];
    const posts = lang === "en" ? enPosts : dkPosts;

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
                    padding: "0rem 2.5rem 0rem 2.5rem",
                    pointerEvents: 'all',
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', margin: '-1rem 0rem 0.75rem -3.5rem' }}>
                        <Image src="/images/icon.png" alt="Insoi logo" width={175} height={175} />
                        <div style={{ fontFamily: 'weiss-rundgotisch', fontSize: '6rem', margin: "0 0 -20px 0", color: "#DDDDCC"}}>Insoi</div>
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
                            <h1 style={{ fontSize: "1.5rem" }}>{tx.pages}</h1>
                            <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: "0rem 1.2rem", lineHeight: 1.2, marginBottom: '1rem', fontSize: "1.15rem" }}>
                                {tx.pageLinks.map(({ label, href }) => (
                                    <Link key={href} className={"underline-style"} href={href}>{label}</Link>
                                ))}
                            </div>

                            {/* Splash box */}
                            <SplashText lang={lang} />
                        </div>

                        {/* Right: Journal */}
                        <JournalPage posts={posts} />
                    </div>

                    {/* Footer */}
                    <div style={{ margin: '0rem 0rem 1rem 0rem', fontSize: '0.8rem' }}>
                        <LangToggle lang={lang} setLang={setLang} />
                    </div>

                </div>
            </div>
        </div>
    );
}