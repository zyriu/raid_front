export const shorten = (str: string, n: number = 4): string => {
  if (str.length < 10) return str;
  return `${str.slice(0, n + 2)}...${str.slice(str.length - n)}`;
};
