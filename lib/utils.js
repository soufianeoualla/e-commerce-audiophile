export const formatPrice = (price) => {
  const currency = "USD";
  const locale = "en-US";
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",

    currency: currency,
  });
  return formatter.format(price);
};
