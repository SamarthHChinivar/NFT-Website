import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store  of NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. All in one place."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
};

export default App;
