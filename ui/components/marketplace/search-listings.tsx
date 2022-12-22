import { Character } from "../../../app/character/core/domain/character";
import { IGameItem } from "../../../app/marketplace/core/port/marketplace.port";
import CharacterCard from "../my-heroes/hero-card";
import SearchBar from "./search-bar";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Filters from "./filters";
import { mintUnsplicedCharacter } from "../../../app/character/core/use-cases/mint-unspliced-character.use-case";
import { useWeb3Context } from "../web3/context";
import { useEffect } from "react";
import { getCharactersOfOwner } from "../../../app/character/core/use-cases/get-characters-of-owner.use-case";

interface IListingProps {
  items: Character[];
  onItemClick: (item: IGameItem) => void;
  addItem?: boolean;
}

const SearchListings = ({ items, onItemClick, addItem }: IListingProps) => {
  const { address, provider } = useWeb3Context();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharactersOfOwner({ address }));
  }, [address, dispatch]);

  const mint = () => {
    dispatch(mintUnsplicedCharacter({ provider: provider.current }));
    // router.push("/city/characters/mint");
  };

  return (
    <div className="w-full flex flex-row ">
      <Filters />
      <div className="w-10/12 p-10 z-10 relative">
        <SearchBar />
        <div className="w-full z-10 relative grid grid-cols-2 gap-y-10 sm:grid-cols-4 gap-x-6 lg:grid-cols-6 xl:gap-x-8">
          {items.map((hero: Character) => (
            <CharacterCard character={hero} key={hero.id} onClick={onItemClick} />
          ))}
          {addItem && (
            <div
              className="bg-green-700 text-white justify-center items-center w-full h-full rounded-lg cursor-pointer text-center"
              onClick={mint}
            >
              Mint a character
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchListings;
