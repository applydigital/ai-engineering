import { AtBidTicker, AtImage, MlBidForm } from "@components/index";
import { useBidding, useRandomArt } from "@hooks/index";
import { Container, Grid } from "@layout/index";
import { artImages } from "@data/artImages";
import "./App.css";

const App = () => {
  const currentImage = useRandomArt(artImages);
  const { currentBid, submitBid, minBid } = useBidding(100);

  return (
    <div className="bg-emerald-950 h-screen w-screen">
      <Container>
        <Grid orientation="horizontal">
          <AtImage src={currentImage.src} alt={currentImage.alt} />
          <Grid orientation="vertical">
            <AtBidTicker bid={currentBid} />
            <MlBidForm onSubmit={(bid) => submitBid(bid)} minBid={minBid} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
