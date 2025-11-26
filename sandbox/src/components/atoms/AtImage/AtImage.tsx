import { sanitizeTailwindClassnames } from "@utilities/sanitizeTailwindClassnames";
import type { ImgHTMLAttributes } from "react";

export interface AtImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export const AtImage = ({ className = "", alt, src }: AtImageProps) => (
  <figure
    className={sanitizeTailwindClassnames(`
        relative overflow-hidden
        border
        shadow-xl/50
        rounded-2xl
        backdrop-blur-lg bg-white/20 border-white/30
        ${className}
      `)}
  >
    <img
      className={sanitizeTailwindClassnames(`
          w-full h-full object-cover
        `)}
      alt={alt}
      src={src}
    />
  </figure>
);
