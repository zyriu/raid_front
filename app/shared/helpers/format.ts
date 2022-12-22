import fromExponential from "from-exponential";

export const formatCurrency = (n: number, decimals: number = 0) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(n);

export const formatPercentage = (n: number, decimals: number = 0) =>
  `${new Intl.NumberFormat("en-US", { maximumFractionDigits: decimals, minimumFractionDigits: decimals }).format(n)}%`;

export const trim = (number: number = 0, precision?: number) => {
  const array = fromExponential(number).split(".");
  if (array.length === 1) {
    return fromExponential(number);
  }

  // @ts-ignore
  array.push(array.pop().substring(0, precision));
  return array.join(".");
};
