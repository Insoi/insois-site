import ReactMarkdown from "react-markdown";
import { JournalPost } from "@/content/journal-index";
import React from "react";
import {t, Lang} from "@/content/translations";

export default function JournalPage({ posts, lang }: { posts: JournalPost[], lang: Lang }) {
    const tx = t[lang];

    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h1 style={{ fontSize: "1.5rem" }}>
                {tx.journal}
            </h1>
            {posts.map((post) => (
                <div key={post.slug} style={{ marginBottom: "1.5rem" }}>
                    <p className="underline-style-static" style={{ fontFamily: "karmilla-bold", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#DDDDCC" }}>
                        {post.date}
                    </p>
                    <ReactMarkdown
                        components={{
                            h2: ({ children }) => (
                                <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                                    {children}
                                </h2>
                            ), // heading
                            p: ({ children }) => (
                                <p style={{ fontSize: "1.15rem", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                                    {children}
                                </p>
                            ), // general unedited text
                            strong: ({ children }) => (
                                <strong style={{ fontFamily: "karmilla-bold" }}>
                                    {children}
                                </strong>
                            ), // bold text as **double asterisks**
                            a: ({ href, children }) => (
                                <a href={href} className="underline-style">
                                    {children}
                                </a>
                            ), // links embedded
                            hr: () => (
                                <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "0.5rem 0" }} />
                            ), // divider as ---
                            ul: ({ children }) => (
                                <ul style={{ paddingLeft: "1.2rem", fontSize: "1.15rem", listStyleType: "disc", fontFamily: "karmilla-bold", color: "#DDDDCC" }}>
                                    {children}
                                </ul>
                            ), // list margin as -
                        }}
                    >
                        {post.body}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
}