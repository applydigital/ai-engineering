import { AtBidTicker, AtImage, MlBidForm } from "./components";
import { artImages } from "./data/artImages";
import { useBidding, useRandomArt } from "./hooks";
import { Container, Grid } from "./layout";
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
