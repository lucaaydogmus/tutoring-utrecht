type IconProps = { className?: string };

const base = "1.5";

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 12a8 8 0 1 1-3.2-6.4M21 12l-4-1 1-4"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20l1.3-3.6A8 8 0 1 1 8.6 19.3L4 20Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SlidersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h13M21 18h-1" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth={base} />
      <circle cx="8" cy="12" r="2" stroke="currentColor" strokeWidth={base} />
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function CheckMessageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 5h16v11H8l-4 4V5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 10.5l2 2 4-4.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 4H12v16H6.5A2.5 2.5 0 0 0 4 20V5.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path
        d="M20 5.5A2.5 2.5 0 0 0 17.5 4H12v16h5.5a2.5 2.5 0 0 1 2.5 1.5V5.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FunctionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 4c-2 0-3 1.2-3 3v3H4M6 10v4c0 2-1 3-2 3.5"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
      />
      <path d="M4.5 10h4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M13 8l6 8M19 8l-6 8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function AtomIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth={base} />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth={base} transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth={base} transform="rotate(120 12 12)" />
    </svg>
  );
}

export function FlaskIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 3h4M10 3v6l-5.5 9A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3L14 9V3"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 15h7" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={base} />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.4 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.4-3.8-8.5S9.5 5.9 12 3.5Z" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.2A8.4 8.4 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path
        d="M9 9.3c0-.5.4-.8.8-.8h.6c.3 0 .5.2.6.4l.5 1.3c.1.2 0 .5-.1.6l-.5.5c.4.9 1.1 1.6 2 2l.5-.5c.2-.2.4-.2.6-.1l1.3.5c.2.1.4.3.4.6v.6c0 .5-.4.9-.9.9-3 0-5.8-2.8-5.8-5.8Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth={base} />
      <path d="M8 10.5v6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="8" cy="7.5" r="0.9" fill="currentColor" />
      <path
        d="M11.5 16.5v-3.7c0-1.2.8-1.9 1.8-1.9 1 0 1.7.7 1.7 1.9v3.7"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.5 10.5v6" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}
