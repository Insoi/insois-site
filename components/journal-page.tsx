import ReactMarkdown from "react-markdown";
import { JournalPost } from "@/content/journal-index";
import React from "react";

export default function JournalPage({ posts }: { posts: JournalPost[] }) {
    // noinspection JSUnusedGlobalSymbols
    return (
        <div style={{ overflowY: "auto", maxHeight: "320px" }}>
            <h2 style={{ color: "#DDDDCC", fontSize: "1.5rem" }}>
                Journal ✎ᝰ.ᐟ⋆⑅˚₊
            </h2>
            {posts.map((post) => (
                <div key={post.slug} style={{ marginBottom: "1.5rem" }}>
                    <p className="underline-style" style={{ fontFamily: "karmilla-bold", fontSize: "1.15rem", marginBottom: "0.5rem", color: "#DDDDCC" }}>
                        {post.date}
                    </p>
                    <ReactMarkdown
                        components={{
                            h2: ({ children }) => (
                                <h2 style={{ fontFamily: "stretch-pro", fontSize: "1.2rem", color: "#DDDDCC", marginBottom: "0.5rem" }}>
                                    {children}
                                </h2>
                            ),
                            p: ({ children }) => (
                                <p style={{ fontFamily: "karmilla-regular", fontSize: "1.15rem", lineHeight: 1.15, color: "#DDDDCC", marginBottom: "0.75rem" }}>
                                    {children}
                                </p>
                            ),
                            strong: ({ children }) => (
                                <strong style={{ fontFamily: "karmilla-bold", color: "#DDDDCC" }}>
                                    {children}
                                </strong>
                            ),
                            a: ({ href, children }) => (
                                <a href={href} className="underline-style" style={{ fontFamily: "karmilla-regular", color: "#DDDDCC" }}>
                                    {children}
                                </a>
                            ),
                            hr: () => (
                                <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "0.75rem 0" }} />
                            ),
                            ul: ({ children }) => (
                                <ul style={{ paddingLeft: "1.2rem", color: "#DDDDCC", fontFamily: "karmilla-regular", fontSize: "1.15rem" }}>
                                    {children}
                                </ul>
                            ),
                        }}
                    >
                        {post.body}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    );
}