const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=one&vs_currencies=usd");
  const { one } = (await response.json()) as any;

  cache["ONE"] = one.usd;
};

export const getTokenPrice = (symbol: string): number => {
  return Number(cache[symbol]);
};
