import React from "react";
import {t, Lang} from "@/content/translations";

export default function JournalPage({lang}: {lang: Lang}) {
    const tx = t[lang];

    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.journal}
            </h1>
        </div>
    );
}

// Implementing a new page:
// change line 11 to the translated headline
// Inside main-page.tsx, Import this page, add as a new string inside the Page type,
// give index name in PAGE_ORDER and then pageComponents so it can index the page and show

// Then finally just add it as a page inside translations.ts/pageLinks, so a button gets made for opening
// I doubt anyone else will read this than me. Just want to make sure I don't go dumb, whenever I make a new page for something