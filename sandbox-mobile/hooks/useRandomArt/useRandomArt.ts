import { useEffect, useState } from 'react';
import type { ArtImage } from '../../data/artImages';

export const useRandomArt = (images: ArtImage[]) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, [images]);

  return currentImage;
};
