"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function SiteHeader() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
            <div className="container flex h-14 items-center justify-between">

                {/* Left: Hamburger + Logo */}
                <div className="flex items-center gap-4">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Icon icon="lucide:menu" className="w-5 h-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <SheetHeader className="px-1 text-left">
                                <SheetTitle className="flex items-center gap-2 font-bold">
                                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                        <Icon icon="lucide:zap" className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    Portfolio
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 mt-8 px-1">
                                {siteConfig.mainNav.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`))
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-3 rounded-lg transition-colors font-medium",
                                                isActive
                                                    ? "bg-primary text-primary-foreground"
                                                    : "hover:bg-accent text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <Icon icon={item.icon} className="w-5 h-5" />
                                            {item.title}
                                        </Link>
                                    )
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" className="flex items-center gap-2 font-bold">
                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center hidden md:flex">
                            <Icon icon="lucide:zap" className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span>Portfolio</span>
                    </Link>
                </div>

                {/* Right: Theme Toggle */}
                <ThemeToggle />
            </div>
        </header>
    )
}
