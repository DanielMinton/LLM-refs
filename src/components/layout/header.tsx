"use client"

import Link from "next/link"
import { Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI Models Universe
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/leaderboards"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Leaderboards
            </Link>
            <Link
              href="/models"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Models
            </Link>
            <Link
              href="/compare"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Compare
            </Link>
            <Link
              href="/learn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
