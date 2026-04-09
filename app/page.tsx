import { Metadata } from "next";
import FrontpageClient from "../components/frontpage-client";
import { getAllPosts } from "../content/journal-index";

export const metadata: Metadata = {
  title: "𝕴𝖓𝖘𝖔𝖎",
  description:
      "I am a developer, drummer, and so-called artist. Sharing my projects, games\n" +
      "and whatever else I keep starting but never finishing.",
};

export default function Frontpage() {
  const enPosts = getAllPosts("en");
  const dkPosts = getAllPosts("dk");
  return <FrontpageClient enPosts={enPosts} dkPosts={dkPosts} />;
}