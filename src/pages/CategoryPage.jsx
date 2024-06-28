import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductCategory from "../components/ProductCategory";
import { useEffect, useState } from "react";
import { getProductsCategory } from "../../data/queries";

const CategoryPage = () => {
  const [products, setProducts] = useState();
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  useEffect(() => {
    const data = getProductsCategory(category);
    setProducts(data);
  }, [category]);

  return (
    <div>
      <div className="h-[336px] bg-black">
        <Header />
        <div className="flex justify-center items-center h-[240px] font-bold">
          <h1 className="text-2xl tracking-widest text-white">EARPHONES</h1>
        </div>
      </div>
      <div className=" max-w-[1110px] mx-auto grid gap-24 my-28">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Product
                desc={product.description}
                slug={product.slug}
                name={product.name}
                img={product.categoryImage.desktop}
              />
            </div>
          ))}
      </div>
      <div className="max-w-[1110px] mx-auto ">
        <ProductCategory />
      </div>
    </div>
  );
};

export default CategoryPage;
