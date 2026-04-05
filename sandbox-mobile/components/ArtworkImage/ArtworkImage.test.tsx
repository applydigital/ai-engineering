import { render, screen } from '@testing-library/react-native';
import { ArtworkImage } from './ArtworkImage';

describe('ArtworkImage', () => {
  it('renders image with accessibility label', () => {
    render(<ArtworkImage src={1} alt="Mona Doggo" />);

    expect(screen.getByLabelText('Mona Doggo')).toBeTruthy();
  });
});
