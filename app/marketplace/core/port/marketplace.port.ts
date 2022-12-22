import { Character } from "../../../character/core/domain/character";
import { GeneticPotential } from "../../../character/core/domain/genetic-potential";
import { CharacterClass } from "../../../character/core/domain/character-class";
import { Skill } from "../../../character/core/domain/skill";
import { Stat } from "../../../character/core/domain/stat";

export type IGameItem = Character | null;

export interface IMarketplaceStoreState {
  selectedItem: IGameItem;
  filterMap: FilterMap;
  characters: Character[];
}

export type FilterItem = CharacterClass | GeneticPotential | Stat | Skill;
export type FilterCategoryType = "disciplines" | "classes" | "stats" | "skills";

export interface ManyFilterType {
  filters: FilterItem[];
  category: FilterCategoryType;
}

export interface FilterType {
  filter: FilterItem;
  category: FilterCategoryType;
}

export type FilterMap = {
  [category in FilterCategoryType]: FilterItem[];
};
