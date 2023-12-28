export const formatPrice = (number) => {
  if (!number) return;
  const formattedNumber = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedNumber;
};
