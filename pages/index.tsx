import type { NextPage } from "next";
import Factions from "../ui/components/homepage/factions";
import Header from "../ui/components/homepage/header";
import Meta from "../ui/components/homepage/meta";
import Roadmap from "../ui/components/homepage/roadmap";
import Tokenomics from "../ui/components/homepage/tokenomics";
import EnterGame from "../ui/components/homepage/enter-game";
import GameDescription from "../ui/components/homepage/description";
import HomeBg from '../ui/assets/images/home.jpg';
import TokenDescription from "../ui/components/homepage/token-description";

const Home: NextPage = () => {
  return (<>
    <div className="w-full h-full bg-cover bg-no-repeat transform -skew-y-3 -mt-16 pt-16" style={{background: `url(${HomeBg.src})`}}>
      <div className="transform skew-y-3">
          <Meta />
          <Header />
          <GameDescription/>
      </div>
    </div>
      <TokenDescription />
      <Factions />
      <Roadmap />
      <Tokenomics />
    </>
  );
};

export default Home;
