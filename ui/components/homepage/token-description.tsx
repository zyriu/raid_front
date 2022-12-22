import { useRouter } from "next/router";
import Home from '../../../ui/assets/images/abstract_cyber.jpg';
import Dude from '../../../ui/assets/images/dude.png';

function TokenDescription() {
  const router = useRouter();

  const enter = () => {
    router.push("/city");
  };

  return (<>
    <div className="w-full py-10 bg-lime-500 transform -skew-y-3"></div>
    <div className=" transform -skew-y-2" style={{background: `url(${Home.src})`}}>
      <div className=" w-10/12 p-16 flex flex-wrap flex-row mx-auto my-16">
        <div className="w-1/2 transform skew-y-2 flex justify-center flex-col">
          <img src={Dude.src}/>
          <div className="mx-auto transform shadow-lg -skew-y-3  py-8 -mt-16 w-8/12 text-lime-500 text-center uppercase font-bold text-6xl">
            <button className="cybr-btn mx-2">
              Marketplace
              <span aria-hidden className="cybr-btn__glitch">
                Marketplace
              </span>
              <span aria-hidden className="cybr-btn__tag">
                Go
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 transform skew-y-2">
          <div className="flex h-full flex-col justify-center px-4">
            <div className="text-xl text-lime-500 font-bold uppercase italic">Make real money playing</div>
            <div className="text-7xl text-white font-extrabold uppercase italic ardestine">An extensive marketplace</div>
            <div className="text-3xl text-white font-bold ">Buy or sell items, resources, currencies, and heroes.</div>
            <div className="text-xl text-white py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in imperdiet nisi, nec luctus lorem. Nullam ac ultrices quam. Mauris varius vehicula enim a maximus. Donec ipsum urna, accumsan euismod purus quis, consectetur efficitur orci. 
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
}

export default TokenDescription;
