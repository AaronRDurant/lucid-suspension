"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type CTAButtonProps = ButtonProps | LinkProps;

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function getVariantClasses(variant: Variant) {
  switch (variant) {
    case "secondary":
      return "border border-neutral-600 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 hover:text-neutral-50 hover:border-neutral-500";
    case "ghost":
      return "border border-transparent text-neutral-100 hover:border-neutral-600 hover:bg-neutral-800";
    case "primary":
    default:
      return "border border-neutral-100 bg-neutral-50 text-neutral-950 hover:bg-neutral-200 hover:border-neutral-200";
  }
}

function getSizeClasses(size: Size) {
  switch (size) {
    case "sm":
      return "px-4 py-2 text-[0.7rem]";
    case "md":
    default:
      return "px-5 py-2.5 text-[0.75rem]";
  }
}

// CTAButton is the primary action for email, checkout, and portal actions.
export function CTAButton(props: CTAButtonProps) {
  const {
    variant = "primary",
    size = "md",
    isLoading,
    className,
    children,
    ...rest
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.2em] transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60";

  const classes = cn(
    baseClasses,
    getVariantClasses(variant),
    getSizeClasses(size),
    className,
  );

  const content = (
    <span className="flex items-center gap-2">
      <span>{children}</span>
      {isLoading ? (
        <span className="h-1 w-8 animate-pulse rounded-full bg-neutral-500" />
      ) : null}
    </span>
  );

  // link mode
  if ("href" in props && props.href) {
    const { href, onClick, ...linkRest } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    const isDisabled = !!isLoading || (linkRest["aria-disabled"] as boolean);

    const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (
      event,
    ) => {
      if (isDisabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <a
        href={href}
        className={classes}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : linkRest.tabIndex}
        onClick={handleClick}
        {...linkRest}
      >
        {content}
      </a>
    );
  }

  // button mode
  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const disabled = buttonRest.disabled || isLoading;

  return (
    <button
      type={buttonRest.type ?? "button"}
      className={classes}
      disabled={disabled}
      aria-busy={isLoading || undefined}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
