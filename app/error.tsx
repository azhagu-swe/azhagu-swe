'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex h-[80vh] flex-col items-center justify-center space-y-6 text-center px-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-destructive md:text-6xl animate-pulse">
                Something went wrong!
            </h1>
            <div className="space-y-2 max-w-[600px]">
                <p className="text-muted-foreground text-lg">
                    We apologize for the inconvenience. An unexpected error has occurred.
                </p>
                <p className="text-sm text-muted-foreground/80 font-mono bg-muted p-2 rounded-md mx-auto w-fit max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    {error.message || "Unknown Error"}
                </p>
            </div>
            <div className="flex gap-4 items-center mt-6">
                <Button
                    onClick={() => reset()}
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 font-semibold"
                >
                    Try Again
                </Button>
                <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
