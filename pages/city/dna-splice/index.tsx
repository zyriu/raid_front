import { ChevronLeftIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "../../../app/character/core/domain/character";
import Meta from "../../../ui/components/homepage/meta";
import { RootState } from "../../../app/shared/store/store";
import { IGameItem } from "../../../app/marketplace/core/port/marketplace.port";
import { useState } from "react";
import Link from "next/link";

const DNASplice: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const characters = useSelector((state: RootState) => state.marketplace.characters);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  const goBack = () => {
    router.push("/city");
  };

  const onItemClick = (item: IGameItem) => {
    setSelectedCharacters([...selectedCharacters, item as Character]);
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
      <div className="grid grid-cols-2 z-20 relative text-white w-full h-screen p-20">
        <Link href="/city/dna-splice/extract">
          <span className="cursor-pointer text-2xl">Extract DNA</span>
        </Link>
        <Link href="/city/dna-splice/BreedCharacter">
          <span className="cursor-pointer text-2xl">DNA BANK</span>
        </Link>
      </div>
    </div>
  );
};

export default DNASplice;
