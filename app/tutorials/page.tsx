
import { getAllPosts } from "@/lib/mdx"
import { Metadata } from "next"
import { PostList } from "@/components/content/post-list"

export const metadata: Metadata = {
    title: "Tutorials",
    description: "Step-by-step guides for developers.",
}

export default async function TutorialsPage() {
    const posts = await getAllPosts("tutorials")

    return (
        <div className="container py-10 max-w-2xl px-4 md:px-0">
            <div className="mb-10 text-center">
                <h1 className="font-heading text-4xl tracking-tight lg:text-5xl mb-4">
                    Tutorials
                </h1>
                <p className="text-xl text-muted-foreground">
                    Learn something new.
                </p>
            </div>

            <PostList initialPosts={posts} basePath="/tutorials" />
        </div>
    )
}
