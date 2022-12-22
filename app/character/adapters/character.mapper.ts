import { Character } from "../core/domain/character";
import { LibCharacter } from "../core/port/character.blockchain";
import geneticPotentialMapper from "./genetic-potential.mapper";
import characterClassMapper from "./character-class.mapper";
import statMapper from "./stat.mapper";

export default {
  toDomain(character: LibCharacter): Character {
    const potentials = geneticPotentialMapper.toDomain(character.potential);
    const characterClass = characterClassMapper.fromPotential(potentials);
    const stats = statMapper.toDomain(character.statistics);
    const { id, mutation, rarity } = character;

    return new Character({
      id,
      rarity,
      name: "",
      mutation,
      skills: [],
      pastTransactions: [],
      image: "",
      class: characterClass,
      stats,
    });
  },
};
