export const secondsUntilBlock = (startBlock: number, endBlock: number) => {
  return Math.max(0, endBlock - startBlock);
};
