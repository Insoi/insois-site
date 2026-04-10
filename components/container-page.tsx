'use client';

import React, { useState } from "react";
import Link from "next/link";

import Overhead from "./overhead"
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
        <>
            <Overhead tx={tx} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.42fr', gap: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: "1.5rem" }}>{tx.pages}</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: "0rem 1.2rem", lineHeight: 1.2, marginBottom: '1rem', fontSize: "1.15rem" }}>
                        {tx.pageLinks.map(({ label, href }) => (
                            <Link key={href} className="underline-style" href={href}>{label}</Link>
                        ))}
                    </div>
                    <SplashText lang={lang} />
                </div>
                <JournalPage posts={posts} />
            </div>

            <div style={{ margin: '0rem 0rem 1rem 0rem', fontSize: '0.8rem' }}>
                <LangToggle lang={lang} setLang={setLang} />
            </div>
        </>
    );
}