import React from "react";
import {t, Lang} from "@/content/translations";
import ProjectsCard from "@/components/projects-card";

export default function ProjectsPage({lang}: {lang: Lang}) {
    const tx = t[lang];

    return (
        // page panel: scrollable and capped on desktop, full height on mobile
        <div className="page-panel page-scrollbar">
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.projects}
            </h1>

            <div style={{ marginBottom: "0.5rem" }}>
                <p className="underline-style-static" style={{ fontFamily: "karmilla-bold", fontSize: "1.15rem", color: "#DDDDCC" }}>
                    {tx.projectsSub}
                </p>
            </div>

            {/* projects-grid: 2-col on desktop, 1-col on mobile */}
            <div className="projects-grid">
                {tx.cards.map((card, index) => (
                    <ProjectsCard
                        key={index}
                        title={card.label}
                        description={card.description}
                        tags={card.tags}
                        Github={card.link}
                        image={card.image}
                    />
                ))}
            </div>
        </div>
    );
}
