import data from "./data.json";

const products = data;

export const getProductsCategory = (category) => {
  return products.filter((item) => item.category === category);
};

export const getSingleProduct = (slug) => {
  return products.find((item) => item.slug === slug);
};
