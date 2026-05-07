import { type Friend } from "./types";
import { getCollection, type CollectionEntry } from "astro:content";

export function formatDate(date: Date, format?: string): string {
    const formatStr = format;
    const configSeparator = "-";

    const separator = [".", "-", "/"].includes(configSeparator.trim())
        ? configSeparator.trim()
        : ".";

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const pad = (num: number) => String(num).padStart(2, "0");

    switch (formatStr) {
        case "YYYY-MM-DD":
            return `${year}${separator}${pad(month)}${separator}${pad(day)}`;
        default:
            return `${year}${separator}${pad(month)}${separator}${pad(day)}`;
    }
}

/**
 * Get all posts, filtering out posts whose filenames start with _
 */
export async function getFilteredPosts() {
    const posts = await getCollection("posts");
    return posts.filter(
        (post: CollectionEntry<"posts">) => !post.id.startsWith("_"),
    );
}

/**
 * Get all posts sorted by publication date, filtering out posts whose filenames start with _
 */
export async function getSortedFilteredPosts() {
    const posts = await getFilteredPosts();
    return posts.sort(
        (a: CollectionEntry<"posts">, b: CollectionEntry<"posts">) =>
            b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
    );
}
