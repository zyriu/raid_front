import { ChevronLeftIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IGameItem } from "../../../app/marketplace/core/port/marketplace.port";
import { setSelectedCityItem } from "../../../app/character/core/use-cases/select-item.use-case";
import { RootState } from "../../../app/shared/store/store";
import Meta from "../../../ui/components/homepage/meta";
import SearchListings from "../../../ui/components/marketplace/search-listings";

const MyCharacters: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const characters = useSelector((state: RootState) => state.city.myCharacters);

  const goBack = () => {
    router.back();
  };

  const onItemClick = (item: IGameItem) => {
    dispatch(setSelectedCityItem(item));
    router.push("/city/characters/item");
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0 p-20">
      <Meta />
      <div className="text-white flex flex-row cursor-pointer" onClick={goBack}>
        <ChevronLeftIcon
          className="flex-shrink-0 ml-1 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-100"
          aria-hidden="true"
        />
        Go back to the city
      </div>
      <div className="flex flex-col z-20 relative text-white w-full h-screen">
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">My characters:</div>
        <SearchListings items={characters} onItemClick={onItemClick} addItem />
      </div>
    </div>
  );
};

export default MyCharacters;
