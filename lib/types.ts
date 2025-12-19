
export interface Frontmatter {
    title: string
    date: string
    description: string
    image?: string
    tags?: string[]
    published?: boolean
    demoUrl?: string
    repoUrl?: string
}

export interface Post {
    slug: string
    frontmatter: Frontmatter
    content: string
    readingTime: string
}
