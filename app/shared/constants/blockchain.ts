export enum Environment {
  PRODUCTION = "production",
  STAGING = "staging",
}

const NETWORKS = {
  [Environment.PRODUCTION]: 0x63564c40,
  [Environment.STAGING]: 0x6357d2e0,
} as { [x in Environment]: number };

export const NETWORK = NETWORKS[process.env.NEXT_PUBLIC_ENV as Environment];
