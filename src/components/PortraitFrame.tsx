import Image from "next/image";

export function PortraitFrame({
  alt,
  className = "",
  decorative = true,
  priority = false,
  sizes = "(min-width: 1024px) 400px, 90vw",
}: {
  alt: string;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {decorative && (
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent-blue-soft sm:h-56 sm:w-56"
        />
      )}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_45px_-25px_rgba(23,35,60,0.35)]">
        <Image
          src="/luca-portrait.jpg"
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover"
        />
      </div>
    </div>
  );
}
