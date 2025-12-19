"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background/80 backdrop-blur-xl border-t border-border lg:hidden flex justify-around items-center px-2">
            {siteConfig.mainNav.map((item) => {
                const isActive = pathname === item.href

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "relative flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                            isActive ? "text-primary shadow-[0_0_20px_hsla(var(--primary),0.3)]" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="bottom-nav-active"
                                className="absolute inset-0 bg-primary/10 z-0 rounded-xl"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        {isActive && (
                            <motion.div
                                layoutId="bottom-nav-indicator"
                                className="absolute top-0 w-12 h-1 bg-primary rounded-b-full shadow-[0_0_10px_hsla(var(--primary),0.8)] z-10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}

                        <Icon
                            icon={item.icon}
                            className={cn("w-6 h-6 transition-transform duration-200 z-10", isActive && "scale-110 animate-pulse")}
                        />
                        <span className="text-[10px] font-medium z-10">{item.title}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

