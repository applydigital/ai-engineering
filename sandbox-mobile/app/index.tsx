import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ArtworkImage } from '@/components/ArtworkImage';
import { BidForm } from '@/components/BidForm';
import { BidInfo } from '@/components/BidInfo';
import { artImages } from '@/data/artImages';
import { useBidding } from '@/hooks/useBidding';
import { useArtworkTimer } from '@/hooks/useArtworkTimer';
import { useState, useCallback } from 'react';

export default function HomeScreen() {
  const [currentImage, setCurrentImage] = useState(() => {
    const idx = Math.floor(Math.random() * artImages.length);
    return artImages[idx];
  });

  const rotateArtwork = useCallback(() => {
    const idx = Math.floor(Math.random() * artImages.length);
    setCurrentImage(artImages[idx]);
  }, []);

  const { timeRemaining } = useArtworkTimer(rotateArtwork);
  const { currentBid, submitBid, minBid } = useBidding(100);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <ArtworkImage src={currentImage.src} alt={currentImage.alt} />
        <View style={styles.bidSection}>
          <BidInfo bid={currentBid} timeRemaining={timeRemaining} />
          <BidForm onSubmit={submitBid} minBid={minBid} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#022c22',
  },
  content: {
    paddingHorizontal: 16,
    gap: 24,
  },
  bidSection: {
    gap: 16,
    alignItems: 'center',
  },
});
