import { ChevronLeftIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../../../app/character/core/domain/character";
import Meta from "../../../ui/components/homepage/meta";
import SearchListings from "../../../ui/components/marketplace/search-listings";
import { RootState } from "../../../app/shared/store/store";
import { IGameItem } from "../../../app/marketplace/core/port/marketplace.port";
import { useState } from "react";
import Listings from "../../../ui/components/marketplace/listing";
import { setSelectedCityItem } from "../../../app/character/core/use-cases/select-item.use-case";

const BreedCharacter: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const extracts = useSelector((state: RootState) => state.city.dnaExtracts);
  const [selectedExtracts, setSelectedExtracts] = useState<Character[]>([]);

  const goBack = () => {
    router.push("/city/dna-splice");
  };

  const goToMarketplace = () => {
    router.push("/marketplace");
  };

  const mint = () => {
    router.push("/city/dna-splice/mint");
    dispatch(setSelectedCityItem(selectedExtracts[0]));
  };

  const onItemClick = (item: IGameItem) => {
    setSelectedExtracts([...selectedExtracts, item as Character]);
  };

  return (
    <div className="bg-primary-dark w-screen h-full mt-0 p-20">
      <Meta />
      <div className="text-white flex flex-row cursor-pointer" onClick={goBack}>
        <ChevronLeftIcon
          className="flex-shrink-0 ml-1 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-100"
          aria-hidden="true"
        />
        Go back to DNA Splicing
      </div>
      <div className="flex flex-col z-20 relative text-white w-full h-screen">
        <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">Selected extracts :</div>
        {selectedExtracts.length ? (
          <>
            <Listings items={selectedExtracts} onItemClick={onItemClick} />
            <div className="flex flex-row">
              <span onClick={mint} className="p-4 bg-green-500 text-white cursor-pointer w-fit">
                Invoke a new character using {selectedExtracts.length} extracts
              </span>
              <span onClick={goToMarketplace} className="p-4 bg-red-500 text-white cursor-pointer w-fit ml-3">
                Sell {selectedExtracts.length} extracts
              </span>
            </div>
          </>
        ) : (
          <div className="e=w-full text-center">No extract selected</div>
        )}
        <div className="mx-auto text-2xl mt-20">Available extracts :</div>
        <SearchListings items={extracts} onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default BreedCharacter;
