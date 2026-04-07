export interface ArtImage {
  src: number;
  alt: string;
}

export const artImages: ArtImage[] = [
  { src: require('../assets/art/a.png'), alt: 'Mona Doggo' },
  { src: require('../assets/art/b.png'), alt: 'The Storm of Pollock' },
  { src: require('../assets/art/c.png'), alt: 'Avante Garde' },
  { src: require('../assets/art/d.png'), alt: 'Pyramid' },
  { src: require('../assets/art/e.png'), alt: 'Starlight' },
];
