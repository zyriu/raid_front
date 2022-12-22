import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import CityMap from "../../ui/assets/images/map.jpg";
import Link from "next/link";
import { setSelectedMarketplaceItem } from "../../app/marketplace/core/use-cases/select-item.use-case";
import Meta from "../../ui/components/homepage/meta";

const City: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    dispatch(setSelectedMarketplaceItem(null));
    router.back();
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0">
      <Meta />
      <div
        className="absolute w-full h-full z-10 bg-cover bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${CityMap.src})` }}
      />
      <div className="grid grid-cols-3 grid-rows-2 z-20 relative text-white w-full h-screen gap-8">
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
          <Link href="/city/dna-splice">DNA Splicing / Breed</Link>
        </div>
        <Link href="/city/inventory">
          <div className="flex justify-center items-center text-3xl cursor-pointer">Inventory</div>
        </Link>
        <div className="grid grid-cols-3 grid-rows-2 text-3xl cursor-pointer">
          <Link href="/city/quests">
            <div className="flex justify-center items-center">Quests</div>
          </Link>
          <Link href="/city/quests/raids">
            <div className="flex justify-center items-center">Raids</div>
          </Link>
          <Link href="/city/quests/dungeons">
            <div className="flex justify-center items-center">Dungeons</div>
          </Link>
          <Link href="/city/quests/bounty">
            <div className="flex justify-center items-center">Bounty</div>
          </Link>
          <Link href="/city/quests/pvp">
            <div className="flex justify-center items-center">PvP</div>
          </Link>
        </div>
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
          <Link href="/city/MyCharacters">My Characters</Link>
        </div>
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
          <Link href="/city">Staking (the gardens)</Link>
        </div>
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
          <Link href="/marketplace">Marketplace</Link>
        </div>
      </div>
    </div>
  );
};

export default City;
