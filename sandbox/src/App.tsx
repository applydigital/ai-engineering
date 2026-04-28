import { MlBidForm, MlBidInfo } from "@components/index";
import { AtImage } from "@components/atoms/AtImage";
import { useArtworkTimer, useBidding } from "@hooks/index";
import { Container, Grid } from "@layout/index";
import { artImages } from "@data/artImages";
import { useState, useCallback } from "react";
import "./App.css";

const App = () => {
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

  return (
    <div className="bg-emerald-950 h-screen w-screen">
      <Container>
        <Grid orientation="horizontal">
          <AtImage src={currentImage.src} alt={currentImage.alt} />
          <Grid orientation="vertical">
            <MlBidInfo bid={currentBid} timeRemaining={timeRemaining} />
            <MlBidForm onSubmit={(bid) => submitBid(bid)} minBid={minBid} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
