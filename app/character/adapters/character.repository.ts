import { ethers } from "ethers";
import { getStaticProvider } from "../../shared/helpers/static-provider";
import { CharacterFacetContract } from "../../shared/abi";
import { getAddresses } from "../../shared/constants";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ICharacterRepository } from "../core/port/character.repository.port";
import characterMapper from "./character.mapper";
import { Character } from "../core/domain/character";

export class CharacterRepository implements ICharacterRepository {
  private readonly contract;

  constructor(provider?: JsonRpcProvider) {
    const { CharacterDiamond } = getAddresses();
    this.contract = new ethers.Contract(
      CharacterDiamond,
      CharacterFacetContract,
      provider?.getSigner() || getStaticProvider(),
    );
  }

  public async baseURI() {
    return await this.contract.baseURI();
  }

  public async characters(ids: number[]): Promise<Character[]> {
    const characters = await this.contract.characters(ids);
    return characters.map(characterMapper.toDomain);
  }

  public async charactersOfOwner(address: string): Promise<number[]> {
    return await this.contract.charactersOfOwner(address);
  }
}
