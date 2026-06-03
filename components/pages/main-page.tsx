'use client';

import React, {useEffect, useState} from "react";

import Overhead from "../overhead"
import SplashText from "../splash";
import ProjectsPage from "./projects-page";
import GamesPage from "./games-page";
import ArtPage from "./art-page";
import JournalPage from "./journal-page";
import { JournalPost } from "@/content/journal-index";

import { useNotification } from "../notifcation";
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
    const { notification } = useNotification();

    const PAGE_ORDER: Page[] = ["journal", "art", "projects", "games"];
    const [direction, setDirection] = useState<"left" | "right">("right");

    useEffect(() => {
        if (window.innerWidth <768) {
            notification(
                "This site is optimized for desktop - mobile is supported but not prioritized.",
                { variant: "warning", duration: 5000}
            );
        }
    }, [notification]);

    const handleSetPage = (newPage: Page) => {
        if (newPage === "games" || newPage === "art") {
            notification("This page is currently under construction.", { variant: "warning" });
            return;
        }

        const oldIndex = PAGE_ORDER.indexOf(page);
        const newIndex = PAGE_ORDER.indexOf(newPage);
        setDirection(newIndex > oldIndex ? "right" : "left");
        setPage(newPage);
    };

    // TODO: remember to create translations and reference it for all notification strings
    const handleSetLang = (newLang: Lang) => {
        setLang(newLang);
        notification(newLang === "en" ? "Changed language to English!" : "Skiftet sproget til dansk!", { variant: "success" });
    }

    const pageComponents: Record<Page, React.ReactNode> = {
        journal: <JournalPage posts={posts} lang={lang}/>,
        projects: <ProjectsPage lang={lang}/>,
        games: <GamesPage lang={lang}/>,
        art: <ArtPage lang={lang}/>
    };

    return (
        <>
            <Overhead tx={tx} />

            <div className="main-grid">
                <div>
                    <h1 style={{ fontSize: "1.5rem" }}>{tx.pages}</h1>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.3fr 1fr', gap: "0rem 1.2rem", lineHeight: 1.2, marginBottom: '1rem', fontSize: "1.15rem" }}>
                        {tx.pageLinks.map((link) => (
                            "href" in link
                                ? <a key={link.href} className="underline-style" href={link.href} target="_blank" onClick={() => notification("Redirecting you to specified link...", {variant: "success"})}>{link.label}</a>
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
                <LangToggle lang={lang} setLang={handleSetLang} />
            </div>
        </>
    );
}