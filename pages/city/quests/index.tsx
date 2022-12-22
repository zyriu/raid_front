import { ChevronLeftIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import CityMap from "../../ui/assets/images/map.jpg";
import Link from "next/link";
import { setSelectedMarketplaceItem } from "../../../app/marketplace/core/use-cases/select-item.use-case";
import Meta from "../../../ui/components/homepage/meta";

const Quests: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    dispatch(setSelectedMarketplaceItem(null));
    router.back();
  };

  const startQuest = () => {
    router.push("/city/quests/level-up");
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0 p-20">
      <Meta />
      <div className="text-white flex flex-row cursor-pointer" onClick={goBack}>
        <ChevronLeftIcon
          className="flex-shrink-0 ml-1 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-100"
          aria-hidden="true"
        />
        Go back to city
      </div>
      <div className="grid grid-cols-3 grid-rows-2 z-20 relative text-white w-full h-screen">
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
          <div className="bg-green-600 text-white p-4" onClick={startQuest}>
            Start a quest
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
