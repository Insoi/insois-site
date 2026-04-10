import { Metadata } from "next";
import FrontpageClient from "../components/container-page";
import { getAllPosts } from "../content/journal-index";
import ShaderCanvas from "@/components/ShaderCanvas";
import React from "react";

export const metadata: Metadata = {
  title: "𝕴𝖓𝖘𝖔𝖎",
  description:
      "I am a developer, drummer, and so-called artist. Sharing my projects, games\n" +
      "and whatever else I keep starting but never finishing.",
};

export default function Frontpage() {
  const enPosts = getAllPosts("en");
  const dkPosts = getAllPosts("dk");

  return (
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        <ShaderCanvas />

        <div style={{
          position: 'relative',
          zIndex: '1',
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          minHeight: '100vh',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: "100%",
            maxWidth: '1150px',
            background: "rgba(43, 43, 43, 0.33)",
            border: "2px solid #444433",
            borderBottomWidth: "0",
            padding: "0rem 2.5rem 0rem 2.5rem",
            pointerEvents: 'all',
          }}>
            <FrontpageClient enPosts={enPosts} dkPosts={dkPosts} />
          </div>
        </div>
      </div>
  );
}