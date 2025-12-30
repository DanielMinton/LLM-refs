import Link from "next/link"
import { Github, Gitlab, Linkedin, Twitter, Mail, Briefcase, Instagram, Facebook, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 backdrop-blur-sm mt-24">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                LLM-refs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive AI model reference platform. Compare performance, pricing, and capabilities across LLMs, vision, audio, and video models.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/leaderboards" className="text-sm hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Leaderboards
                </Link>
                <Link href="/timeline" className="text-sm hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Timeline
                </Link>
                <Link href="/compare" className="text-sm hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Compare
                </Link>
                <Link href="/learn" className="text-sm hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                  Learn
                </Link>
              </nav>
            </div>

            {/* Author & Contact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Created by</h4>
                <Briefcase className="h-3.5 w-3.5 text-green-500" />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-base">Daniel Minton</p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available for hire
                </p>
                <a
                  href="mailto:daniel_minton@icloud.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  daniel_minton@icloud.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-8"></div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Daniel Minton. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://danielminton.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                aria-label="Portfolio"
                title="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/NeonPanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-500 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/DanielMinton"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/TheModernOpossum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                aria-label="X (Twitter)"
                title="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/ChromeOpossum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/TheModernOpossum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
