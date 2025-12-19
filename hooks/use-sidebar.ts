"use client"

import * as React from "react"

const MOBILE_BREAKPOINT = 1024

export function useSidebar() {
    const [isOpen, setIsOpen] = React.useState(true)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }

        // Initial check
        checkMobile()

        // Load persisted state only if not mobile
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            const collapsed = localStorage.getItem("sidebar-collapsed")
            // Note: The new Sidebar uses internal state for collapse
            // This hook mainly controls visibility on mobile or general layout state
            // For now, let's keep it simple.
        } else {
            setIsOpen(false) // Always closed on mobile initially
        }

        const handleResize = () => {
            checkMobile()
            if (window.innerWidth < MOBILE_BREAKPOINT) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }

    const setOpen = (value: boolean) => {
        setIsOpen(value)
    }

    return { isOpen, toggle, setOpen, isMobile }
}
