import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

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
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="NFTs App is built using Expo, a framework built on top of React Native and greatly simplifies the process of building and deploying apps across multiple platforms."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="NFTs App has two main screens: the home screen and the details screen. The home screen displays a list of NFTs, and the details screen displays the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by{" "}
          <a
            href="http://samarth-portfolio-website.000webhostapp.com"
            target="_blank"
            rel="noreferrer"
            className="bold"
          >
            Samarth H Chinivar
          </a>
        </p>
      </div>
    </>
  );
};

export default App;
