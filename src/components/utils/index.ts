export const commaFormatted = (value: number | string): string => {
  if (!value) {
    return "";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
