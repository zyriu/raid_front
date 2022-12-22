import { ethers } from "ethers";
import { Environment, NETWORK } from "../constants";

export const getHarmonyURI = (): string => {
  return "https://api.harmony.one";
};

export const getHarmonyTestnetURI = (): string => {
  return "https://api.s0.b.hmny.io";
};

export const getRpcURI = () =>
  ({
    [Environment.PRODUCTION]: getHarmonyURI(),
    [Environment.STAGING]: getHarmonyTestnetURI(),
  }[process.env.NEXT_PUBLIC_ENV as Environment]);

export function getStaticProvider(): ethers.providers.JsonRpcProvider {
  return new ethers.providers.JsonRpcProvider(getRpcURI(), NETWORK);
}
