"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Post } from "@/lib/types"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { Badge } from "@/components/ui/badge"

interface PostListProps {
    initialPosts: Post[]
    basePath: string
}

export function PostList({ initialPosts, basePath }: PostListProps) {
    const [search, setSearch] = useState("")

    const filteredPosts = initialPosts.filter((post) => {
        const query = search.toLowerCase()
        return (
            post.frontmatter.title.toLowerCase().includes(query) ||
            post.frontmatter.description.toLowerCase().includes(query) ||
            post.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(query))
        )
    })

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            <div className="relative">
                <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                    placeholder="Search posts..."
                    className="pl-9 rounded-full bg-secondary/50 border-transparent focus-visible:bg-background transition-colors"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`${basePath}/${post.slug}`}>
                                <Card className="hover:border-primary/50 transition-colors cursor-pointer group bg-transparent border-b border-border shadow-none rounded-none border-x-0 border-t-0 p-0 hover:bg-transparent">
                                    <CardHeader className="px-0 py-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.frontmatter.title}</CardTitle>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-4 flex items-center gap-1">
                                                <Icon icon="lucide:clock" className="w-3 h-3" />
                                                {post.readingTime}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{post.frontmatter.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {post.frontmatter.tags?.slice(0, 3).map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0 h-5 font-normal">{tag}</Badge>
                                            ))}
                                            {post.frontmatter.date && <span className="text-xs text-muted-foreground ml-auto">{post.frontmatter.date}</span>}
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                    {filteredPosts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-10 text-muted-foreground"
                        >
                            No posts found matching "{search}"
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
