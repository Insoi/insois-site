'use client';

import React, { useState } from "react";

import Overhead from "../overhead"
import SplashText from "../splash";
import ProjectsPage from "./projects-page";
import GamesPage from "./games-page";
import ArtPage from "./art-page";
import JournalPage from "./journal-page";
import { JournalPost } from "@/content/journal-index";

import {t, Lang} from "@/content/translations";
import LangToggle from "../language-toggle";

type Page = "journal" | "projects" | "games" | "art";
type Props = {
    enPosts: JournalPost[];
    dkPosts: JournalPost[];
}

{/* gets used on the main front page from client stored on server components */}

export default function FrontpageClient({ enPosts, dkPosts }: Props) {
    const [lang, setLang] = useState<Lang>("en");
    const [page, setPage] = useState<Page>("journal");
    const tx = t[lang];
    const posts = lang === "en" ? enPosts : dkPosts;

    const PAGE_ORDER: Page[] = ["journal", "art", "projects", "games"];
    const [direction, setDirection] = useState<"left" | "right">("right");

    const handleSetPage = (newPage: Page) => {
        const oldIndex = PAGE_ORDER.indexOf(page);
        const newIndex = PAGE_ORDER.indexOf(newPage);
        setDirection(newIndex > oldIndex ? "right" : "left");
        setPage(newPage);
    };

    const pageComponents: Record<Page, React.ReactNode> = {
        journal: <JournalPage posts={posts} lang={lang}/>,
        projects: <ProjectsPage lang={lang}/>,
        games: <GamesPage lang={lang}/>,
        art: <ArtPage lang={lang}/>
    };

    return (
        <>
            <Overhead tx={tx} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.42fr', gap: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: "1.5rem" }}>{tx.pages}</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: "0rem 1.2rem", lineHeight: 1.2, marginBottom: '1rem', fontSize: "1.15rem" }}>
                        {tx.pageLinks.map((link) => (
                            "href" in link
                                ? <a key={link.href} className="underline-style" href={link.href} target="_blank">{link.label}</a>
                                : <a key={link.page} className="underline-style" onClick={() => handleSetPage(link.page)}>{link.label}</a>
                        ))}
                    </div>
                    <SplashText lang={lang} />
                </div>
                <div key={page} className={direction === "right" ? "slide-in-right" : "slide-in-left"}>
                    {pageComponents[page]}
                </div>
            </div>

            <div style={{ margin: '0rem 0rem 1rem 0rem', fontSize: '0.8rem' }}>
                <LangToggle lang={lang} setLang={setLang} />
            </div>
        </>
    );
}