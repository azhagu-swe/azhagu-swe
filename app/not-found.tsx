import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-9xl font-extrabold tracking-tighter text-primary animate-pulse">404</h1>
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
                <p className="text-muted-foreground text-lg max-w-[500px]">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>
            </div>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 mt-4">
                <Link href="/">
                    Return Home
                </Link>
            </Button>
        </div>
    )
}
