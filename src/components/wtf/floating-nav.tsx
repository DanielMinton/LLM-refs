"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

interface FloatingNavProps {
  sections: Array<{ id: string; title: string }>
}

export function FloatingNav({ sections }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling 300px
      setIsVisible(window.scrollY > 300)

      // Determine active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.offsetTop - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <motion.div
      style={{ opacity }}
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="fixed top-24 right-4 md:right-8 z-40 hidden lg:block"
    >
      <div className="bg-background/95 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 p-4 w-64">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
          <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">
            Quick Nav
          </h3>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg hover:bg-primary/10 transition-colors group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>

        <nav className="space-y-1">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                  ${isActive
                    ? 'bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <div className={`
                    w-1.5 h-1.5 rounded-full transition-all duration-200
                    ${isActive ? 'bg-primary-foreground scale-125' : 'bg-muted-foreground/30'}
                  `} />
                  <span className="truncate">{section.title}</span>
                </div>
              </motion.button>
            )
          })}
        </nav>

        <div className="mt-4 pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            Scroll to explore
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Mobile floating action button
export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 lg:hidden z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </motion.button>
  )
}
