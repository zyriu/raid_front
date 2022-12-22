import { useRouter } from "next/router";
import Dude from "../../../ui/assets/images/second_dude.png";

function GameDescription() {
  const router = useRouter();

  const enter = () => {
    router.push("/city");
  };

  return (
    <>
      <div className="flex flex-wrap flex-row w-10/12 mx-auto my-16 transform -skew-y-2">
        <div className="w-1/2 transform skew-y-2">
          <div className="flex h-full flex-col justify-center px-4">
            <div className="text-xl text-lime-500 font-bold uppercase italic">Discover a new way to play</div>
            <div className="text-9xl text-white font-extrabold uppercase italic ardestine">Raid City</div>
            <div className="text-3xl text-white font-bold ">
              Farm, craft, stake, breed heroes and trade them in an all-in-one crypto video game.
            </div>
            <div className="text-xl text-white py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in imperdiet nisi, nec luctus lorem.
              Nullam ac ultrices quam. Mauris varius vehicula enim a maximus. Donec ipsum urna, accumsan euismod purus
              quis, consectetur efficitur orci.
            </div>
          </div>
        </div>
        <div className="w-1/2 transform skew-y-2 flex justify-center flex-col">
          <img src={Dude.src} />
          <div className="mx-auto transform shadow-lg -skew-y-3  py-8 -mt-16 w-8/12 text-lime-500 text-center uppercase font-bold text-6xl">
            <button className="cybr-btn mx-2">
              Start Playing
              <span aria-hidden className="cybr-btn__glitch">
                Start Playing
              </span>
              <span aria-hidden className="cybr-btn__tag">
                Go
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDescription;
