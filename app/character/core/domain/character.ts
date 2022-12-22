import { Rarity } from "../../../shared/port/rarity";
import { CharacterClass } from "./character-class";
import { Skill } from "./skill";
import { Stat } from "./stat";

interface ICharacterProps {
  id: number;
  class: CharacterClass;
  mutation: number;
  rarity: Rarity;
  image: string;
  name: string;
  skills: Skill[];
  pastTransactions: string[];
  stats: Stat[];
}

export class Character {
  constructor(private props: ICharacterProps) {}
  get id() {
    return this.props.id;
  }
  get image() {
    return this.props.image;
  }
  get class() {
    return this.props.class;
  }
  get mutation() {
    return this.props.mutation;
  }
  get name() {
    return this.props.name;
  }
  get rarity() {
    return this.props.rarity;
  }
  get skills() {
    return this.props.skills;
  }
  get stats() {
    return this.props.stats;
  }
  get pastTransactions() {
    return this.props.pastTransactions;
  }
}
