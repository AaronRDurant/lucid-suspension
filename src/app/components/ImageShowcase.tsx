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
};

export function ImageShowcase({
  mode = "single",
  images,
  className,
}: ImageShowcaseProps) {
  if (!images.length) return null;

  if (mode === "single") {
    const image = images[0];

    return (
      <figure className={className}>
        <div className="overflow-hidden rounded-2xl border border-neutral-100">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </div>
        {image.caption ? (
          <figcaption className="mt-3 text-xs text-neutral-500">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  if (mode === "beforeAfter" && images.length >= 2) {
    const [before, after] = images;

    return (
      <div
        className={`grid gap-4 sm:grid-cols-2 ${className ?? ""}`.trim()}
        aria-label="before and after comparison"
      >
        {[before, after].map((image, index) => (
          <figure key={index} className="space-y-2">
            <div className="overflow-hidden rounded-2xl border border-neutral-100">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between text-xs text-neutral-500">
              <span className="font-semibold uppercase tracking-[0.2em]">
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
      className={`grid gap-4 sm:grid-cols-2 ${className ?? ""}`.trim()}
      aria-label="service images"
    >
      {images.slice(0, 4).map((image, index) => (
        <figure key={index} className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-neutral-100">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          {image.caption ? (
            <figcaption className="text-xs text-neutral-500">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
