import React from "react";
import {t, Lang} from "@/content/translations";

export default function JournalPage({lang}: {lang: Lang}) {
    const tx = t[lang];

    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.projects}
            </h1>
        </div>
    );
}