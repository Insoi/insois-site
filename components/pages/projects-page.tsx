import React from "react";
import {t, Lang} from "@/content/translations";
import ProjectsCard from "@/components/projects-card";
import ReactMarkdown from "react-markdown";

export default function JournalPage({lang}: {lang: Lang}) {
    const tx = t[lang];

    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.projects}
            </h1>

            <div style={{ marginBottom: "1.5rem" }}>
                <p className="underline-style-static" style={{ fontFamily: "karmilla-bold", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#DDDDCC" }}>
                    {tx.projectsSub}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {tx.cards.map((card, index) => (
                    <ProjectsCard
                        key={index}
                        title={card.label}
                        description={card.description}
                        tags={card.tags}
                        Github={card.link.href}
                    />
                ))}
            </div>
        </div>
    );
}