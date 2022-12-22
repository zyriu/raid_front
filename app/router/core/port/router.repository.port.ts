import { JsonRpcSigner } from "@ethersproject/providers";
import { AvailableERC20Tokens } from "../../../shared/constants/tokens";

export interface IRouterRepository {
  addLiquidity(
    tokenA: AvailableERC20Tokens,
    tokenB: AvailableERC20Tokens,
    amountADesired: number,
    amountBDesired: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number,
  ): Promise<void>;
  addLiquidityOne(
    token: AvailableERC20Tokens,
    amountDesired: number,
    amountMin: number,
    amountOne: number,
    to: string,
    deadline: number,
  ): Promise<void>;
  allowance(owner: string, token: AvailableERC20Tokens): Promise<number>;
  approve(token: AvailableERC20Tokens, signer: JsonRpcSigner): Promise<void>;
  getAmountsIn(amountOut: number, path: string[]): Promise<number>;
  getAmountOut(amountIn: number, path: string[]): Promise<number>;
  removeLiquidity(
    tokenA: AvailableERC20Tokens,
    tokenB: AvailableERC20Tokens,
    liquidity: number,
    amountAMin: number,
    amountBMin: number,
    to: string,
    deadline: number,
  ): Promise<void>;
  removeLiquidityOne(
    token: AvailableERC20Tokens,
    liquidity: number,
    amountTokenMin: number,
    amountOneMin: number,
    to: string,
    deadline: number,
  ): Promise<void>;
  swapExactOneForTokens(amountOutMin: number, path: string[], to: string, deadline: number): Promise<void>;
  swapExactTokensForOne(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ): Promise<void>;
  swapExactTokensForTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ): Promise<void>;
  swapOneForExactTokens(
    amountIn: number,
    amountOutMin: number,
    path: string[],
    to: string,
    deadline: number,
  ): Promise<void>;
  swapTokensForExactOne(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number,
  ): Promise<void>;
  swapTokensForExactTokens(
    amountOut: number,
    amountInMax: number,
    path: string[],
    to: string,
    deadline: number,
  ): Promise<void>;
}
