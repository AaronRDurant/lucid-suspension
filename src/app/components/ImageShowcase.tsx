import Image from "next/image";
import type { ReactNode } from "react";

type ShowcaseImage = {
  src: string;
  alt: string;
  caption?: ReactNode;
};

type Mode = "single" | "grid" | "beforeAfter";

type ImageShowcaseProps = {
  mode?: Mode;
  images: ShowcaseImage[];
  className?: string;
  ariaLabel?: string;
};

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

// ImageShowcase displays process/results imagery in a consistent layout.
export function ImageShowcase({
  mode = "single",
  images,
  className,
  ariaLabel,
}: ImageShowcaseProps) {
  if (!images.length) return null;

  // single image layout
  if (mode === "single") {
    const image = images[0];

    return (
      <figure className={cn("space-y-3", className)}>
        <div className="overflow-hidden rounded-2xl border border-neutral-800">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
        {image.caption ? (
          <figcaption className="text-xs text-neutral-400">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  // before/after comparison
  if (mode === "beforeAfter" && images.length >= 2) {
    const [before, after] = images;

    return (
      <div
        className={cn("grid gap-4 sm:grid-cols-2", className)}
        aria-label={ariaLabel ?? "before and after comparison"}
      >
        {[before, after].map((image, index) => (
          <figure key={index} className="space-y-2">
            <div className="overflow-hidden rounded-2xl border border-neutral-800">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between text-xs text-neutral-400">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                {index === 0 ? "Before" : "After"}
              </span>
              {image.caption ? <span>{image.caption}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  // grid mode
  return (
    <div
      className={cn("grid gap-4 sm:grid-cols-2", className)}
      aria-label={ariaLabel ?? "service images"}
    >
      {images.slice(0, 4).map((image, index) => (
        <figure key={index} className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-neutral-800">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <figcaption className="text-xs text-neutral-400">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
