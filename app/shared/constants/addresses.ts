import { Environment } from "./blockchain";

export type Addresses = {
  CharacterDiamond: string;
  // DeFi
  Pools: string;
  Router: string;
  // Tokens
  RAID: string;
  USDC: string;
  // Pools
  LP_RAID_ONE: string;
  LP_RAID_USDC: string;
};

const addresses: { [env in Environment]: Addresses } = {
  [Environment.PRODUCTION]: {
    CharacterDiamond: "",
    // DeFi
    Pools: "",
    Router: "",
    // Tokens
    RAID: "",
    USDC: "0x169dbcd3c04f8c33e4e17bc65500842f3d7918dd",
    // Pools
    LP_RAID_ONE: "",
    LP_RAID_USDC: "",
  },
  [Environment.STAGING]: {
    CharacterDiamond: "0xC35d4E2Db2c7442b85B349957f2F6b930345a741",
    // DeFi
    Pools: "",
    Router: "",
    // Tokens
    RAID: "",
    USDC: "",
    // Pools
    LP_RAID_ONE: "",
    LP_RAID_USDC: "",
  },
};

export function getAddresses(): Addresses {
  return addresses[process.env.NEXT_PUBLIC_ENV as Environment];
}
