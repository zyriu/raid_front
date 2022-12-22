import { ethers } from "ethers";
import { getStaticProvider } from "../../shared/helpers/static-provider";
import { UnsplicedMintFacetContract } from "../../shared/abi";
import { getAddresses } from "../../shared/constants";
import { JsonRpcProvider } from "@ethersproject/providers";
import { IUnsplicedMintRepository } from "../core/port/unspliced-mint.repository.port";

export class UnsplicedMintRepository implements IUnsplicedMintRepository {
  private readonly contract;

  constructor(provider?: JsonRpcProvider) {
    const { CharacterDiamond } = getAddresses();
    this.contract = new ethers.Contract(
      CharacterDiamond,
      UnsplicedMintFacetContract,
      provider?.getSigner() || getStaticProvider(),
    );
  }

  public async unsplicedMint() {
    return await this.contract.unsplicedMint();
  }
}
