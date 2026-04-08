import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "𝕴𝖓𝖘𝖔𝖎",
    description: "I am a developer, drummer, and so-called artist. Sharing my projects, games\n" +
        "and whatever else I keep starting but never finishing.",

    icons: {
        icon: "/icon.png",
    },
};

export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>

        <main>{children}</main>
        </body>
        </html>
    )
}
