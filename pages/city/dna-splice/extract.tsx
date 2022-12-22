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
import { setDnaExtract } from "../../../app/character/core/use-cases/set-extracts.use-case";
import Link from "next/link";

const ExtractDNA: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const characters = useSelector((state: RootState) => state.city.myCharacters);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [extracted, setExtracted] = useState<boolean>(false);

  const goBack = () => {
    router.push("/city/dna-splice");
  };

  const onItemClick = (item: IGameItem) => {
    setSelectedCharacters([...selectedCharacters, item as Character]);
  };

  const extract = () => {
    dispatch(setDnaExtract(selectedCharacters));
    setExtracted(true);
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
        {extracted ? (
          <div>
            You extracted DNA from {selectedCharacters.length} characters, you can either{" "}
            <Link href="/marketplace">sell</Link> them or <Link href="/city/dna-splice/BreedCharacter">breed</Link> a
            character
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center font-bold text-3xl cursor-pointer">
              Selected characters :{" "}
            </div>
            {selectedCharacters.length ? (
              <>
                <Listings items={selectedCharacters} onItemClick={onItemClick} />
                <div onClick={extract} className="p-4 bg-green-500 text-white cursor-pointer w-fit">
                  Extract DNA from {selectedCharacters.length} characters
                </div>
              </>
            ) : (
              <div className="e=w-full text-center">No character selected</div>
            )}
            <SearchListings items={characters} onItemClick={onItemClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default ExtractDNA;
