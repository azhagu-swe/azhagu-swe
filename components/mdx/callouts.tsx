import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"

interface CalloutProps {
    children: React.ReactNode
    className?: string
    title?: string
}

export function TLDR({ children, className, title = "TL;DR" }: CalloutProps) {
    return (
        <div className={cn("my-6 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm shadow-sm", className)}>
            <div className="flex items-center gap-2 mb-2 text-emerald-500 font-bold tracking-tight">
                <Icon icon="lucide:zap" className="w-5 h-5" />
                <span>{title}</span>
            </div>
            <div className="text-muted-foreground prose-p:my-0 prose-p:leading-relaxed">
                {children}
            </div>
        </div>
    )
}

export function Note({ children, className, title = "Note" }: CalloutProps) {
    return (
        <div className={cn("my-6 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm shadow-sm", className)}>
            <div className="flex items-center gap-2 mb-2 text-blue-500 font-bold tracking-tight">
                <Icon icon="lucide:info" className="w-5 h-5" />
                <span>{title}</span>
            </div>
            <div className="text-muted-foreground prose-p:my-0 prose-p:leading-relaxed">
                {children}
            </div>
        </div>
    )
}
