export const formatNumber = (number: number) =>
  new Intl.NumberFormat("en-us").format(number);
