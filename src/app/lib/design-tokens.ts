// gradient tokens – Lucid stripe
export const gradients = {
  lucidStripe: {
    start: "var(--lucid-gradient-start)",
    mid1: "var(--lucid-gradient-mid1)",
    mid2: "var(--lucid-gradient-mid2)",
    end: "var(--lucid-gradient-end)",
  },
} as const;

// typography scale
export const typography = {
  display: {
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)", // ~40–56px
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    fontWeight: 600,
  },
  heading: {
    fontSize: "1.5rem", // 24px
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
    fontWeight: 600,
  },
  body: {
    fontSize: "1rem", // 16px
    lineHeight: 1.6,
    letterSpacing: "-0.01em",
    fontWeight: 400,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
    letterSpacing: "0",
    fontWeight: 400,
  },
  eyebrow: {
    fontSize: "0.7rem",
    lineHeight: 1.4,
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    fontWeight: 600,
  },
} as const;

// border radius system
export const radii = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  pill: "9999px",
} as const;

// spacing scale
export const spacing = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "5rem",
} as const;

// soft shadow for cards
export const shadows = {
  card: "0 18px 45px rgba(15, 23, 42, 0.06)",
} as const;

// transition timings
export const transitions = {
  fast: "150ms ease-out",
  medium: "200ms ease-out",
  slow: "250ms ease-out",
} as const;

// motion tokens
export const motion = {
  hoverLift: "translateY(-1px)",
  pressed: "translateY(0)",
} as const;

// z-index scale
export const zIndex = {
  nav: 40,
  spine: 30,
  modal: 50,
  toast: 60,
} as const;
