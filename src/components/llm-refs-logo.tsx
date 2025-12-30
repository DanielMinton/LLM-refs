export function LLMRefsLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
      </defs>

      {/* Logo Icon - Abstract Neural Network/Connections */}
      <g transform="translate(0, 25)">
        {/* Central node */}
        <circle cx="25" cy="25" r="8" fill="url(#logo-gradient)" opacity="0.9">
          <animate
            attributeName="r"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Connection lines */}
        <path
          d="M25 25 L45 10 M25 25 L45 40 M25 25 L10 15"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Outer nodes */}
        <circle cx="45" cy="10" r="5" fill="#6366f1" opacity="0.8" />
        <circle cx="45" cy="40" r="5" fill="#a855f7" opacity="0.8" />
        <circle cx="10" cy="15" r="5" fill="#ec4899" opacity="0.8" />

        {/* Sparkle effect */}
        <path
          d="M40 25 L42 27 L40 29 L38 27 Z"
          fill="#fbbf24"
          opacity="0.9"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.9;0.3"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      {/* Text: LLM-refs */}
      <g transform="translate(65, 30)">
        {/* LLM */}
        <text
          x="0"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="36"
          fontWeight="900"
          fill="url(#text-gradient)"
          letterSpacing="-2"
        >
          LLM
        </text>

        {/* Hyphen with gradient */}
        <rect
          x="72"
          y="24"
          width="12"
          height="4"
          rx="2"
          fill="url(#logo-gradient)"
        />

        {/* refs */}
        <text
          x="90"
          y="30"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="36"
          fontWeight="700"
          fill="url(#text-gradient)"
          opacity="0.9"
          letterSpacing="-1"
        >
          refs
        </text>
      </g>

      {/* Tagline */}
      <text
        x="70"
        y="70"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="500"
        fill="#888"
        letterSpacing="2"
      >
        AI MODELS UNIVERSE
      </text>
    </svg>
  )
}

export function LLMRefsIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>

      {/* Central node */}
      <circle cx="25" cy="25" r="8" fill="url(#icon-gradient)" opacity="0.9" />

      {/* Connection lines */}
      <path
        d="M25 25 L40 12 M25 25 L40 38 M25 25 L10 18"
        stroke="url(#icon-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Outer nodes */}
      <circle cx="40" cy="12" r="6" fill="#6366f1" opacity="0.8" />
      <circle cx="40" cy="38" r="6" fill="#a855f7" opacity="0.8" />
      <circle cx="10" cy="18" r="6" fill="#ec4899" opacity="0.8" />

      {/* Sparkle */}
      <path
        d="M35 25 L37 27 L35 29 L33 27 Z"
        fill="#fbbf24"
        opacity="0.9"
      />
    </svg>
  )
}
