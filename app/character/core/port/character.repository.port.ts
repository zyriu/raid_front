import { Character } from "../domain/character";

export interface ICharacterRepository {
  baseURI(): Promise<any>;
  characters(ids: number[]): Promise<Character[]>;
  charactersOfOwner(address: string): Promise<number[]>;
}
