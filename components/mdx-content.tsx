"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { components } from "@/components/mdx-components"

export function MDXContent({ source }: { source: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={components as any}
        >
            {source}
        </ReactMarkdown>
    )
}
