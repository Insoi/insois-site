import React from "react";
import {t, Lang} from "@/content/translations";
import GameCard from "@/components/projects-card";

export default function GamesPage({lang}: {lang: Lang}) {
    const tx = t[lang];

    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.games}
            </h1>

            <div style={{ marginBottom: "0.5rem" }}>
                <p className="underline-style-static" style={{ fontFamily: "karmilla-bold", fontSize: "1.15rem", color: "#DDDDCC" }}>
                    {tx.gamesSub}
                </p>
            </div>

            {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {tx.cards.map((card, index) => (
                    <GameCard
                        key={index}
                        title={card.label}
                        description={card.description}
                        tags={card.tags}
                        Github={card.link.href}
                        image={card.image}
                    />
                ))}
            </div>{"}"} */}
        </div>
    );
}