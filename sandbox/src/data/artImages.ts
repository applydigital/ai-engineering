import a from "@art/a.png";
import b from "@art/b.png";
import c from "@art/c.png";
import d from "@art/d.png";
import e from "@art/e.png";

export interface ArtImage {
  src: string;
  alt: string;
}

export const artImages: ArtImage[] = [
  { src: a, alt: "Mona Doggo" },
  { src: b, alt: "The Storm of Pollock" },
  { src: c, alt: "Avante Garde" },
  { src: d, alt: "Pyramid" },
  { src: e, alt: "Starlight" },
];
