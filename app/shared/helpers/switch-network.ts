import { Environment } from "../constants";
import { getRpcURI } from "./static-provider";

const switchRequest = () => {
  return window.ethereum!.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: process.env.NEXT_PUBLIC_ENV === Environment.STAGING ? "0x6357d2e0" : "0x63564c40",
      },
    ],
  });
};

const addChainRequest = () => {
  return window.ethereum!.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: process.env.NEXT_PUBLIC_ENV === Environment.STAGING ? "0x6357d2e0" : "0x63564c40",
        chainName: process.env.NEXT_PUBLIC_ENV === Environment.STAGING ? "Harmony Testnet" : "Harmony",
        rpcUrls: [getRpcURI()],
        blockExplorerUrls: [
          process.env.NEXT_PUBLIC_ENV === Environment.STAGING
            ? "https://explorer.pops.one/"
            : "https://explorer.harmony.one/",
        ],
        nativeCurrency: {
          name: "ONE",
          symbol: "ONE",
          decimals: 18,
        },
      },
    ],
  });
};

export const switchNetwork = async () => {
  if (window.ethereum) {
    try {
      await switchRequest();
    } catch (error: any) {
      if (error.code === 4902) {
        await addChainRequest();
        await switchRequest();
      } else {
        throw error;
      }
    }
  }
};
