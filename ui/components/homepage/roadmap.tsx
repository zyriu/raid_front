import Crypto from "../../assets/images/blockchain.png";
import DEX from "../../assets/images/exchange-rate.png";
import Game from "../../assets/images/game.png";
import NFT from "../../assets/images/nft.png";

const Roadmap = () => {
  return (
    <div className="mt-48">
      <div className="w-full relative z-10">
        <div className="w-full bg-black p-10 transform-gpu -skew-y-2 border-t-8 border-black border-solid">
          <div className="w-full bg-black transform-gpu skew-y-2 flex flex-wrap justify-evenly">
            <div className="w-6/12 bg-lime-500 rounded-2xl -mt-32 card-shadow">
              <div className="text-black font-bold p-10 text-8xl">Roadmap</div>
              <div className="text-black font-light p-10 pt-0 -mt-2 text-xl">
                We still have a lot to achieve, but we have already accomplished so much ! Check out we've done and
                what's to come.
              </div>
            </div>
            <div className="timeline mx-auto">
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container left">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  15 Dec
                </div>
                <img className="icon" src={NFT.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        NFT Release
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container right">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  22 Oct
                </div>
                <img className="icon" src={Crypto.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        MainNet integration
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container left">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  10 Jul
                </div>
                <img className="icon" src={Game.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        Game release
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container right">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  18 May
                </div>
                <img className="icon" src={DEX.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        DEX integration
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container left">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  10 Feb
                </div>
                <img className="icon" src={NFT.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        Lorem ipsum dolor sit amet
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
              <div className="cursor-pointer transform-gpu transition-all hover:-translate-y-2  container right">
                <div className="date text-5xl text-black" style={{ fontWeight: 900 }}>
                  01 Jan
                </div>
                <img className="icon" src={NFT.src} />
                <div className="rounded-2xl card-shadow bg-lime-500 p-1">
                  <div className="rounded-2xl content text-2xl">
                    <div className="bg-black">
                      <h3 className="text-2xl text-white mb-5" style={{ fontWeight: 800 }}>
                        Lorem ipsum dolor sit amet
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper
                        pretium.
                      </p>
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
