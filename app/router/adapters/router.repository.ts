import { ethers } from "ethers";
import { getStaticProvider } from "../../shared/helpers/static-provider";
import { ERC20GenericContract, RaidContract, RouterContract } from "../../shared/abi";
import { getAddresses } from "../../shared/constants";
import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import { IRouterRepository } from "../core/port/router.repository.port";
import { AvailableERC20Tokens } from "../../shared/constants/tokens";

export class RouterRepository implements IRouterRepository {
  private readonly contract;

  constructor(provider?: JsonRpcProvider) {
    const { Router } = getAddresses();
    this.contract = new ethers.Contract(Router, RouterContract, provider?.getSigner() || getStaticProvider());
  }

  public async addLiquidity(
    tokenA: AvailableERC20Tokens,
    tokenB: AvailableERC20Tokens,
    amountADesired: number,
    amountBDesired: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number,
  ) {
    const addresses = getAddresses();
    return await this.contract.addLiquidity(
      addresses[tokenA],
      addresses[tokenB],
      ethers.utils.parseUnits(amountADesired.toString()),
      ethers.utils.parseUnits(amountBDesired.toString()),
      ethers.utils.parseUnits(amountAMin.toString()),
      ethers.utils.parseUnits(amountBMin.toString()),
      to,
      deadline,
    );
  }

  public async addLiquidityOne(
    token: AvailableERC20Tokens,
    amountDesired: number,
    amountMin: number,
    amountOne: number,
    to: string,
    deadline: number,
  ) {
    const addresses = getAddresses();
    return await this.contract.addLiquidityETH(
      addresses[token],
      ethers.utils.parseUnits(amountDesired.toString()),
      ethers.utils.parseUnits(amountMin.toString()),
      ethers.utils.parseUnits(amountOne.toString()),
      to,
      deadline,
    );
  }

  public async allowance(owner: string, token: AvailableERC20Tokens) {
    const { RAID, Router, USDC } = getAddresses();
    const { address, contract } = (
      {
        RAID: { address: RAID, contract: RaidContract },
        USDC: { address: USDC, contract: ERC20GenericContract },
      } as { [token in AvailableERC20Tokens]: { address: string; contract: any } }
    )[token];

    const tokenContract = new ethers.Contract(address, contract);
    return await tokenContract.allowance(owner, Router);
  }

  public async approve(token: AvailableERC20Tokens, signer: JsonRpcSigner) {
    const { RAID, Router, USDC } = getAddresses();
    const { address, contract } = (
      {
        RAID: { address: RAID, contract: RaidContract },
        USDC: { address: USDC, contract: ERC20GenericContract },
      } as { [token in AvailableERC20Tokens]: { address: string; contract: any } }
    )[token];

    const tokenContract = new ethers.Contract(address, contract, signer);
    return await tokenContract.approve(Router, ethers.constants.MaxUint256);
  }

  public async getAmountsIn(amountOut: number, path: string[]) {
    return await this.contract.getAmountsIn(ethers.utils.parseUnits(amountOut.toString()), path);
  }

  public async getAmountOut(amountIn: number, path: string[]) {
    return await this.contract.getAmountsIn(ethers.utils.parseUnits(amountIn.toString()), path);
  }

  public async removeLiquidity(
    tokenA: AvailableERC20Tokens,
    tokenB: AvailableERC20Tokens,
    liquidity: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number,
  ) {
    const addresses = getAddresses();
    return await this.contract.removeLiquidity(
      addresses[tokenA],
      addresses[tokenB],
      ethers.utils.parseUnits(liquidity.toString()),
      ethers.utils.parseUnits(amountAMin.toString()),
      ethers.utils.parseUnits(amountBMin.toString()),
      to,
      deadline,
    );
  }

  public async removeLiquidityOne(
    token: AvailableERC20Tokens,
    liquidity: number,
    amountTokenMin: number,
    amountOneMin: number,
    to: string,
    deadline: number,
  ) {
    const addresses = getAddresses();
    return await this.contract.removeLiquidityETH(
      addresses[token],
      ethers.utils.parseUnits(liquidity.toString()),
      ethers.utils.parseUnits(amountTokenMin.toString()),
      ethers.utils.parseUnits(amountOneMin.toString()),
      to,
      deadline,
    );
  }

  public async swapExactOneForTokens(amountOutMin: number, path: string[], to: string, deadline: number) {
    return await this.contract.swapExactETHForTokens(
      ethers.utils.parseUnits(amountOutMin.toString()),
      path,
      to,
      deadline,
    );
  }

  public async swapExactTokensForOne(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ) {
    return await this.contract.swapExactTokensForETH(
      ethers.utils.parseUnits(amountIn.toString()),
      ethers.utils.parseUnits(amountOutMin.toString()),
      path,
      to,
      deadline,
    );
  }

  public async swapExactTokensForTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ) {
    return await this.contract.swapExactTokensForTokens(
      ethers.utils.parseUnits(amountIn.toString()),
      ethers.utils.parseUnits(amountOutMin.toString()),
      path,
      to,
      deadline,
    );
  }

  public async swapOneForExactTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ) {
    return await this.contract.swapETHForExactTokens(
      ethers.utils.parseUnits(amountIn.toString()),
      ethers.utils.parseUnits(amountOutMin.toString()),
      path,
      to,
      deadline,
    );
  }

  public async swapTokensForExactOne(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number,
  ) {
    return await this.contract.swapTokensForExactETH(
      ethers.utils.parseUnits(amountOut.toString()),
      ethers.utils.parseUnits(amountInMax.toString()),
      path,
      to,
      deadline,
    );
  }

  public async swapTokensForExactTokens(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number,
  ) {
    return await this.contract.swapTokensForExactTokens(
      ethers.utils.parseUnits(amountOut.toString()),
      ethers.utils.parseUnits(amountInMax.toString()),
      path,
      to,
      deadline,
    );
  }
}
