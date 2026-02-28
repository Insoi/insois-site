import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

// Components
import BackgroundLayer from "@/components/background";
import AsciiBanner from "@/components/ascii-banner";
import Navbar from "@/components/navbar";
import QueryProvider from "@/components/query-provider";

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
