import { Character } from "../../../app/character/core/domain/character";
import { Rarity } from "../../../app/shared/port/rarity";

interface Props {
  character: Character;
  onClick?: (character: Character) => void;
}

const CharacterCard = ({ character, onClick }: Props) => {
  return (
    <div
      onClick={_ => onClick && onClick(character)}
      className="block w-full aspect-w-1 aspect-h-1 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 h-full m-4 mx-auto card-shadow  border-gray-100 border rounded-2xl relative z-30 bg-black"
    >
      <div className="relative">
        <img src={character.image} className="w-full" />
        <div
          style={{ fontWeight: 900 }}
          className="p-3 uppercase text-2xl text-white text-right absolute top-1 right-1"
        >
          {character.name}
        </div>
        <div
          style={{ fontWeight: 900 }}
          className="p-3 uppercase text-xs text-white text-right absolute bottom-1 left-1"
        >
          {character.class.name}
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col justify-between text-white">
          {character.stats.map((stat, index) => (
            <div className="flex flex-row justify-between" key={index}>
              <span>{stat.name}</span>
              <span className="font-bold">{stat.value}</span>
            </div>
          ))}
          <div className="text-xl mt-4">{Rarity[character.rarity]}</div>
          <div
            style={{ fontWeight: 900 }}
            className="p-3 uppercase text-sm text-white text-right absolute bottom-1 right-1"
          >
            {character.class.potentials[0].name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
