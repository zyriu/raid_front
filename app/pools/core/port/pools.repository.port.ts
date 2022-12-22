import { JsonRpcSigner } from "@ethersproject/providers";
import { AvailableLPTokens } from "../../../shared/constants/tokens";

export interface IPoolsRepository {
  allowance(owner: string, token: AvailableLPTokens): Promise<number>;

  approve(token: AvailableLPTokens, signer: JsonRpcSigner): Promise<void>;

  deposit(pid: number, amount: number, address: string): Promise<void>;

  harvest(pid: number, address: string): Promise<void>;

  raidPerBlock(pid: number): Promise<number>;

  pendingReward(pid: number, address: string): Promise<number>;

  withdraw(pid: number, amount: number, address: string): Promise<void>;

  withdrawAndHarvest(pid: number, amount: number, address: string): Promise<void>;
}
