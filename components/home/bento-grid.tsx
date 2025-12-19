"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
    colSpan = 1,
    componentWrapper: Wrapper,
}: {
    className?: string
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
    onClick?: () => void
    colSpan?: 1 | 2 | 3
    componentWrapper?: React.ComponentType<{ children: React.ReactNode; className?: string }>
}) => {
    const colSpanClass = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    }[colSpan]

    const Content = (
        <Card
            className={cn(
                "h-full rounded-xl border-border bg-card/50 backdrop-blur-sm p-4 justify-between flex flex-col space-y-4 hover:shadow-xl transition-all duration-200 hover:border-primary/50 cursor-pointer overflow-hidden relative",
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </Card>
    )

    return (
        <motion.div
            className={cn("group/bento row-span-1 min-h-[10rem]", colSpanClass, className)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={onClick}
        >
            {Wrapper ? <Wrapper>{Content}</Wrapper> : Content}
        </motion.div>
    )
}
