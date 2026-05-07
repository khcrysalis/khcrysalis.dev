import type { CollectionEntry } from "astro:content";

export interface Friend {
    site: string;
    image: string;
}

// MARK: BLOG POSTS

export interface TOCProps {
    toc?: TOCItem[];
}

export interface PostLayoutProps {
    title: string;
    pubDate: Date;
    image?: string;
    readingTime?: ReadingTime;
    toc?: TOCItem[];
}

export interface ReadingTime {
    text: string;
    minutes: number;
    time: number;
    words: number;
}

export interface TOCItem {
    level: number;
    text: string;
    id: string;
    index: number;
}

export interface PostListProps {
    posts: CollectionEntry<"posts">[];
}

export interface FormattedDateProps {
    date: Date;
}
