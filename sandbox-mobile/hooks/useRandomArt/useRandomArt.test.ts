import { renderHook } from '@testing-library/react-native';
import { useRandomArt } from './useRandomArt';
import type { ArtImage } from '../../data/artImages';

describe('useRandomArt', () => {
  const images: ArtImage[] = [
    { src: 1, alt: 'First' },
    { src: 2, alt: 'Second' },
    { src: 3, alt: 'Third' },
  ];

  it('picks an image based on random index', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.66);

    const { result } = renderHook(() => useRandomArt(images));

    expect(result.current).toEqual(images[1]);

    jest.restoreAllMocks();
  });
});
