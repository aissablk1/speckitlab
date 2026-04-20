type LogoProps = { size?: number; className?: string }

export function Logo({ size = 22, className }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={`skl-logo-svg ${className ?? ''}`}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" className="skl-logo-bg" />
      <path d="M8 10h10l-3 4h-7z" className="skl-logo-bar" />
      <path d="M8 15h14l-3 4h-11z" className="skl-logo-bar" opacity="0.78" />
      <path d="M8 20h9l-3 4h-6z" className="skl-logo-bar" opacity="0.55" />
    </svg>
  )
}
