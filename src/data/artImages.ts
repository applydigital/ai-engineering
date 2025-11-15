import a from "../assets/art/a.png";
import b from "../assets/art/b.png";
import c from "../assets/art/c.png";
import d from "../assets/art/d.png";
import e from "../assets/art/e.png";

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
