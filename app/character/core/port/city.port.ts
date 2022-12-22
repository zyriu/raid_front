import { FilterMap, IGameItem } from "../../../marketplace/core/port/marketplace.port";
import { Character } from "../domain/character";

export interface ICityStoreState {
  selectedItem: IGameItem;
  filterMap: FilterMap;
  dnaExtracts: Character[];
  myCharacters: Character[];
}
