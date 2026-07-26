// Placeholder portrait frame. Replace with the real photo:
// import Image from "next/image";
// <Image src="/luca-portrait.webp" alt={alt} fill sizes="..." className="object-cover" priority />
// Drop the real photo file into /public as luca-portrait.webp (or .avif) and swap the markup below.

export function PortraitFrame({
  alt,
  className = "",
  decorative = true,
}: {
  alt: string;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {decorative && (
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent-blue-soft sm:h-56 sm:w-56"
        />
      )}
      <div
        role="img"
        aria-label={alt}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_45px_-25px_rgba(23,35,60,0.35)]"
      >
        <svg
          viewBox="0 0 320 400"
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="320" height="400" fill="#E8EEF3" />
          <circle cx="160" cy="160" r="62" fill="#C7D6E2" />
          <path
            d="M60 400c0-72 44.7-130 100-130s100 58 100 130"
            fill="#C7D6E2"
          />
        </svg>
      </div>
    </div>
  );
}
