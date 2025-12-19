"use client"

import { BentoGrid, BentoItem } from "@/components/home/bento-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { Icon } from "@iconify/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { BentoCard } from "@/components/ui/bento-card"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <div className="container py-10 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BentoGrid className="max-w-4xl mx-auto auto-rows-[minmax(100px,auto)]">

          {/* Hero Section - 2x2 */}
          <BentoItem
            colSpan={2}
            className="row-span-2 min-h-[300px]"
            componentWrapper={BentoCard} // Use the new wrapper
            title={<HeroSection />} // Use the new Hero
            description="I build pixel-perfect, accessible, and high-performance web applications with a focus on user experience."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-black/[0.1] dark:bg-grid-white/[0.1] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                <Icon icon="fluent-emoji:waving-hand" className="w-24 h-24 md:w-32 md:h-32 group-hover:scale-110 transition-transform duration-300" />
              </div>
            }
          />

          {/* Theme Switcher Showcase - 1x1 */}
          <BentoItem
            colSpan={1}
            title="Theme System"
            componentWrapper={BentoCard}
            description="Try the Emerald, Abyss, or Paper modes."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-secondary/50 items-center justify-center">
                <ThemeToggle />
              </div>
            }
          />

          {/* Socials - 1x1 */}
          <BentoItem
            colSpan={1}
            title="Connect"
            componentWrapper={BentoCard}
            description="Find me on the internet."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-background/50 border border-border/50 items-center justify-center gap-4">
                <Link href="https://github.com" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <Icon icon="mdi:github" className="w-6 h-6" />
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                    <Icon icon="mdi:twitter" className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            }
          />

          {/* Projects Link - 2x1 */}
          <BentoItem
            colSpan={2}
            title="Projects"
            componentWrapper={BentoCard}
            description="Check out my latest work and experiments."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 items-center justify-center">
                <Icon icon="lucide:code-2" className="w-16 h-16 text-white" />
              </div>
            }
            onClick={() => window.location.href = '/projects'}
          />

          {/* Blog Link - 1x1 */}
          <BentoItem
            colSpan={1}
            title="Blog"
            componentWrapper={BentoCard}
            description="Read my thoughts on tech."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 items-center justify-center">
                <Icon icon="lucide:book-open" className="w-12 h-12 text-white" />
              </div>
            }
            onClick={() => window.location.href = '/blog'}
          />

          {/* Tech Stack - 3x1 */}
          <BentoItem
            colSpan={3}
            title="Tech Stack"
            componentWrapper={BentoCard}
            description="The tools I use to build."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-card/50 border border-border/50 items-center justify-around px-4 overflow-hidden">
                <Icon icon="logos:nextjs-icon" className="w-10 h-10 grayscale hover:grayscale-0 transition-all" />
                <Icon icon="logos:react" className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
                <Icon icon="logos:tailwindcss-icon" className="w-10 h-10 grayscale hover:grayscale-0 transition-all" />
                <Icon icon="logos:typescript-icon" className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
                <Icon icon="simple-icons:shadcnui" className="w-10 h-10 text-black dark:text-white grayscale hover:grayscale-0 transition-all" />
                <Icon icon="logos:framer" className="w-10 h-10 blur-[1px] hover:blur-0 transition-all" />
              </div>
            }
          />

        </BentoGrid>
      </motion.div>
    </div>
  )
}
