import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Lang } from "./translations";

export type JournalPost = {
    slug: string;
    date: string;
    title: string;
    body: string;
};

export function getAllPosts(lang: Lang): JournalPost[] {
    const dir = path.join(process.cwd(), "content/journals");

    return fs
        .readdirSync(dir)
        .filter((entry) => fs.statSync(path.join(dir, entry)).isDirectory())
        .sort()
        .reverse() // newest first
        .map((slug) => {
            const filePath = path.join(dir, slug, `${lang}.md`);
            const raw = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(raw);
            return {
                slug,
                date: data.date,
                title: data.title,
                body: content.trim(),
            };
        });
}