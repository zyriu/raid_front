import { Character } from "../../../app/character/core/domain/character";
import { IGameItem } from "../../../app/marketplace/core/port/marketplace.port";
import CharacterCard from "../my-heroes/hero-card";

interface IListingProps {
  items: Character[];
  onItemClick: (item: IGameItem) => void;
}

const Listings = ({ items, onItemClick }: IListingProps) => {
  return (
    <div className="w-full flex flex-row ">
      <div className="w-10/12 p-10 z-10 relative">
        <div className="w-full z-10 relative grid grid-cols-2 gap-y-10 sm:grid-cols-4 gap-x-6 lg:grid-cols-6 xl:gap-x-8">
          {items.map((hero: Character) => (
            <CharacterCard character={hero} key={hero.id} onClick={onItemClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
