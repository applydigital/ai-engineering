import { useEffect, useState } from "react";
import type { ArtImage } from "../data/artImages";

export const useRandomArt = (artImages: ArtImage[]) => {
  const [currentImage, setCurrentImage] = useState(artImages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artImages.length);
    setCurrentImage(artImages[randomIndex]);
  }, [artImages]);

  return currentImage;
};
