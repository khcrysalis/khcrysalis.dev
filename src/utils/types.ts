// MARK: FRIEND

import type { CollectionEntry } from "astro:content";

export interface Friend {
    site: string;
    avatar: string;
    description: string;
}

// MARK: BLOG POSTS

export interface TOCProps {
  toc?: TOCItem[]
}

export interface PostLayoutProps {
    title: string
    pubDate: Date
    image?: string
    readingTime?: ReadingTime
    toc?: TOCItem[]
}

export interface ReadingTime {
    text: string
    minutes: number
    time: number
    words: number
}

// TOC item interface
export interface TOCItem {
    level: number
    text: string
    id: string
    index: number
}

// PostList component props interface
export interface PostListProps {
    posts: CollectionEntry<'posts'>[]
}

// FormattedDate component props interface
export interface FormattedDateProps {
    date: Date
}
