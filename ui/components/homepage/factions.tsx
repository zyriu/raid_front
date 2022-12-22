import Hacker from "../../assets/images/hacker.png";
import Cobolt from "../../assets/images/cobolt.png";
import Cyborg from "../../assets/images/cyborg.png";

const Factions = () => {
  return (
    <div className="mt-48">
      <div className="w-full relative z-10">
        <div className="w-full  p-10 transform-gpu -skew-y-2 border-t-8 border-black border-solid">
          <div className="w-full  transform-gpu skew-y-2 flex flex-wrap justify-evenly">
            <div className="w-1/3 flex flex-row justify-evenly  -mt-20 ">
              <div
                style={{ width: "300px", background: "linear-gradient(to right, lime, black)" }}
                className="cursor-pointer transition-all hover:-translate-y-6 h-full  -mx-6 card-shadow overflow-hidden relative z-30 bg-black flex flex-col rounded-3xl transform-gpu -rotate-6"
              >
                <div className="m-1 h-full rounded-3xl overflow-hidden bg-black">
                  <img src={Hacker.src} className="w-full" />
                  <div style={{ fontWeight: 900 }} className="p-5 uppercase text-2xl text-white text-right">
                    Hacker
                  </div>
                </div>
              </div>
              <div
                style={{ width: "300px", background: "linear-gradient(to right, lime, black)" }}
                className="cursor-pointer transition-all hover:-translate-y-6 h-full overflow-hidden  -mx-6  card-shadow -mt-10 relative z-20 bg-black rounded-3xl"
              >
                <div className="m-1 h-full rounded-3xl overflow-hidden bg-black">
                  <img src={Cobolt.src} className="w-full" />
                  <div style={{ fontWeight: 900 }} className="p-5 uppercase text-2xl text-white text-right">
                    Cobolt
                  </div>
                </div>
              </div>
              <div
                style={{ width: "300px", background: "linear-gradient(to right, lime, black)" }}
                className="cursor-pointer transition-all hover:-translate-y-6 h-full overflow-hidden -mx-6 card-shadow -mt-16 relative z-10 bg-black rounded-3xl  transform-gpu rotate-6"
              >
                <div className="m-1 h-full rounded-3xl overflow-hidden bg-black">
                  <img src={Cyborg.src} className="w-full" />
                  <div style={{ fontWeight: 900 }} className="p-5 uppercase text-2xl text-white text-right">
                    Mantis
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12 -mt-32  card-shadow transform -skew-y-2" style={{ background: "rgb(132, 204, 22)" }}>
              <div className="text-black font-bold p-10 text-6xl">Create or join a faction</div>
              <div style={{ fontWeight: 100 }} className="text-black px-10 pb-10 font-extralight text-xl">
                <div className="flex flex-nowrap justify-end z-20 relative mt-10">
                  <button className="cybr-btn-white mx-2">
                    Create a faction
                    <span aria-hidden className="cybr-btn-white__glitch">
                      Create a faction
                    </span>
                    <span aria-hidden className="cybr-btn-white__tag">
                      Go
                    </span>
                  </button>
                  <button className="cybr-btn-white mx-2">
                    Join a faction
                    <span aria-hidden className="cybr-btn-white__glitch">
                      Join a faction
                    </span>
                    <span aria-hidden className="cybr-btn-white__tag">
                      Gas
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factions;
