import type { Provider } from "@/types/models"
import type { ReactElement } from "react"

interface ProviderLogoProps {
  provider: Provider
  className?: string
  variant?: "full" | "icon"
}

export function ProviderLogo({ provider, className = "h-6 w-auto", variant = "full" }: ProviderLogoProps) {
  const logos: Partial<Record<Provider, ReactElement>> = {
    "OpenAI": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#10a37f" opacity="0.9" />
        {variant === "full" && (
          <text x="28" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            OpenAI
          </text>
        )}
      </svg>
    ),
    "Anthropic": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <path d="M12 3L6 21H9L10.5 16H13.5L15 21H18L12 3Z" fill="#d97706" opacity="0.9" />
        {variant === "full" && (
          <text x="22" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Anthropic
          </text>
        )}
      </svg>
    ),
    "Google": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="8" fill="#4285f4" opacity="0.9" />
        <path d="M12 8V12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {variant === "full" && (
          <text x="24" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Google
          </text>
        )}
      </svg>
    ),
    "Meta": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <circle cx="8" cy="12" r="6" fill="#0081fb" opacity="0.9" />
        <circle cx="16" cy="12" r="6" fill="#0081fb" opacity="0.7" />
        {variant === "full" && (
          <text x="26" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Meta
          </text>
        )}
      </svg>
    ),
    "Mistral": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <path d="M8 12L12 4L16 12L12 20L8 12Z" fill="#f97316" opacity="0.9" />
        {variant === "full" && (
          <text x="20" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Mistral
          </text>
        )}
      </svg>
    ),
    "Cohere": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <rect x="6" y="8" width="4" height="8" rx="2" fill="#d946ef" opacity="0.9" />
        <rect x="12" y="6" width="4" height="12" rx="2" fill="#d946ef" opacity="0.7" />
        <rect x="18" y="10" width="4" height="6" rx="2" fill="#d946ef" opacity="0.5" />
        {variant === "full" && (
          <text x="26" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Cohere
          </text>
        )}
      </svg>
    ),
    "DeepSeek": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="7" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.9" />
        <circle cx="12" cy="12" r="3" fill="#10b981" opacity="0.9" />
        {variant === "full" && (
          <text x="24" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            DeepSeek
          </text>
        )}
      </svg>
    ),
    "xAI": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        {variant === "full" && (
          <text x="24" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            xAI
          </text>
        )}
      </svg>
    ),
    "Amazon": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <path d="M4 12Q4 6 12 6T20 12" stroke="#ff9900" strokeWidth="2" fill="none" opacity="0.9" />
        <path d="M4 16L20 16" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
        {variant === "full" && (
          <text x="24" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Amazon
          </text>
        )}
      </svg>
    ),
    "Microsoft": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <rect x="6" y="6" width="7" height="7" fill="#f25022" />
        <rect x="14" y="6" width="7" height="7" fill="#7fba00" />
        <rect x="6" y="14" width="7" height="7" fill="#00a4ef" />
        <rect x="14" y="14" width="7" height="7" fill="#ffb900" />
        {variant === "full" && (
          <text x="25" y="17" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="currentColor">
            Microsoft
          </text>
        )}
      </svg>
    ),
    "Stability AI": (
      <svg viewBox="0 0 100 24" fill="none" className={className}>
        <rect x="6" y="10" width="3" height="8" rx="1.5" fill="#8b5cf6" opacity="0.9" />
        <rect x="10" y="6" width="3" height="12" rx="1.5" fill="#8b5cf6" opacity="0.7" />
        <rect x="14" y="8" width="3" height="10" rx="1.5" fill="#8b5cf6" opacity="0.5" />
        <rect x="18" y="11" width="3" height="7" rx="1.5" fill="#8b5cf6" opacity="0.3" />
        {variant === "full" && (
          <text x="25" y="17" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="currentColor">
            Stability AI
          </text>
        )}
      </svg>
    ),
  }

  // Fallback for providers without custom logos
  const fallback = (
    <div className={`${className} flex items-center gap-2 px-3 py-1 rounded-md bg-muted/50 border border-border`}>
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      {variant === "full" && (
        <span className="text-sm font-semibold text-foreground">{provider}</span>
      )}
    </div>
  )

  return logos[provider] || fallback
}

// Badge-style provider component with logo
export function ProviderBadge({ provider, showLogo = true }: { provider: Provider; showLogo?: boolean }) {
  const colors: Record<string, string> = {
    "OpenAI": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
    "Anthropic": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
    "Google": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
    "Meta": "bg-blue-600/10 text-blue-700 dark:text-blue-300 border-blue-600/30",
    "Mistral": "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
    "Cohere": "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/30",
    "DeepSeek": "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30",
    "xAI": "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30",
    "Amazon": "bg-orange-600/10 text-orange-700 dark:text-orange-300 border-orange-600/30",
    "Microsoft": "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
    "Stability AI": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30",
  }

  const colorClass = colors[provider] || "bg-muted text-foreground border-border"

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium transition-all duration-200 hover:scale-105 ${colorClass}`}>
      {showLogo && <ProviderLogo provider={provider} variant="icon" className="h-4 w-4" />}
      <span>{provider}</span>
    </div>
  )
}
