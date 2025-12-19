
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { ProjectList } from "@/components/projects/project-list"

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcase of my work.",
}

export default async function ProjectsPage() {
    const posts = await getAllPosts("projects")

    // Ensure posts have necessary frontmatter for the list
    const postsWithRequiredData = posts.map(post => ({
        ...post,
        frontmatter: {
            ...post.frontmatter,
            tags: post.frontmatter.tags || []
        }
    }))

    return (
        <div className="container py-10">
            <div className="flex flex-col items-start gap-4 mb-10">
                <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                    Projects
                </h1>
                <p className="text-xl text-muted-foreground">
                    A gallery of my experiments, tools, and apps.
                </p>
            </div>

            <ProjectList initialProjects={postsWithRequiredData} />
        </div>
    )
}
