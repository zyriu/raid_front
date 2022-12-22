import { ethers } from "ethers";
import { getStaticProvider } from "../../shared/helpers/static-provider";
import { ERC20GenericContract, RouterContract } from "../../shared/abi";
import { getAddresses } from "../../shared/constants";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import { IPoolsRepository } from "../core/port/pools.repository.port";
import { AvailableLPTokens } from "../../shared/constants/tokens";

export class PoolsRepository implements IPoolsRepository {
  private readonly contract;

  constructor(provider: JsonRpcProvider) {
    const { Pools } = getAddresses();
    this.contract = {
      read: new ethers.Contract(Pools, RouterContract, getStaticProvider()),
      // TODO : update the write contract once the user has connected their wallet
      // write: new ethers.Contract(Pools, RouterContract, provider?.getSigner()),
      write: new ethers.Contract(Pools, RouterContract, getStaticProvider()),
    };
  }

  public async allowance(owner: string, token: AvailableLPTokens) {
    const addresses = getAddresses();
    const tokenContract = new ethers.Contract(addresses[token], ERC20GenericContract);
    return await tokenContract.allowance(owner, addresses.Pools);
  }

  public async approve(token: AvailableLPTokens, signer: JsonRpcSigner) {
    const addresses = getAddresses();
    const tokenContract = new ethers.Contract(addresses[token], ERC20GenericContract, signer);
    return await tokenContract.approve(addresses.Pools, ethers.constants.MaxUint256);
  }

  public async deposit(pid: number, amount: number, address: string) {
    return await this.contract.write.deposit(pid, ethers.utils.parseUnits(amount.toString(), address));
  }

  public async harvest(pid: number, address: string) {
    return await this.contract.write.harvest(pid, address);
  }

  public async raidPerBlock(pid: number) {
    return await this.contract.read.raidPerBlock(pid);
  }

  public async pendingReward(pid: number, address: string) {
    return await this.contract.read.pendingReward(pid, address);
  }

  public async withdraw(pid: number, amount: number, address: string) {
    return await this.contract.write.withdraw(pid, ethers.utils.parseUnits(amount.toString(), address));
  }

  public async withdrawAndHarvest(pid: number, amount: number, address: string) {
    return await this.contract.write.withdrawAndHarvest(pid, ethers.utils.parseUnits(amount.toString(), address));
  }
}
