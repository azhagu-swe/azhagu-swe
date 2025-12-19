import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { Frontmatter } from "@/lib/types"
import { components } from "@/components/mdx-components"

const root = process.cwd()

export function getPostSlugs(type: string) {
    const dir = path.join(root, "content", type)
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir)
}

export async function getPostBySlug(type: string, slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = path.join(root, "content", type, `${realSlug}.mdx`)

    if (!fs.existsSync(fullPath)) {
        return { slug: realSlug, frontmatter: {}, content: null, readingTime: "0 min read" }
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data: frontmatter, content } = matter(fileContents)

    // Calculate reading time
    const words = content.trim().split(/\s+/).length
    const readingTime = Math.ceil(words / 200) + " min read"

    // Return raw content for react-markdown
    return {
        slug: realSlug,
        frontmatter: frontmatter as any,
        content: content,
        readingTime
    }

    return {
        slug: realSlug,
        frontmatter: frontmatter as any, // Cast to any to avoid strict type checks in pages until we define a proper Union type
        content: content,
        readingTime
    }
}

export async function getAllPosts(type: string) {
    const slugs = getPostSlugs(type)
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(type, slug)))

    return posts
        .filter(post => post.content !== null)
        .sort((a, b) => {
            if (a.frontmatter.date && b.frontmatter.date) {
                return a.frontmatter.date > b.frontmatter.date ? -1 : 1
            }
            return 0
        })
}
