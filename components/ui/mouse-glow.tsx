"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export function MouseGlow() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className={cn(
                "pointer-events-none fixed inset-0 z-[-1] overflow-hidden",
                "opacity-0 transition-opacity duration-1000 lg:opacity-100" // Only visible on desktop
            )}
            style={{
                background: `radial-gradient(600px circle at ${x}px ${y}px, hsla(var(--primary), 0.15), transparent 40%)`,
            }}
        />
    )
}

// Version 2 for a more distinct "Follower" element if preferred, 
// but the radial gradient background approach (above) is cleaner for "Ambience".
export function MouseFollower() {
    const mouseX = useMotionValue(-100)
    const mouseY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 150) // Center offset (300px width / 2)
            mouseY.set(e.clientY - 150)
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [mouseX, mouseY])

    return (
        <motion.div
            className="pointer-events-none fixed z-0 h-[300px] w-[300px] rounded-full blur-3xl opacity-20"
            style={{
                x,
                y,
                background: "hsla(var(--primary), 0.6)",
            }}
        />
    )
}
