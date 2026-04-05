import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface ArtworkImageProps {
  src: number;
  alt: string;
}

export const ArtworkImage = ({ src, alt }: ArtworkImageProps) => (
  <View style={styles.container}>
    <Image
      source={src}
      style={styles.image}
      contentFit="cover"
      accessibilityLabel={alt}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
