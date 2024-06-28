import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductTemplate from "../components/ProductTemplate";
import ProductCategory from "../components/ProductCategory";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartReducer";
import { getSingleProduct } from "../../data/queries";
import toast from "react-hot-toast";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const pathname = useLocation().pathname;
  const slug = pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getSingleProduct(slug);
    setProduct(data);
  
  }, [slug]);

  const handleAddToCart = (quantity) => {
    toast.success('item added to cart')
    dispatch(addProducts({ ...product, quantity }));
  };

  return (
    <div>
      <div className="bg-black">
        <Header />
      </div>

      <div className="w-[1110px] mx-auto mt-20">
        {product && (
          <ProductTemplate
            img={product.image.desktop}
            desc={product.description}
            name={product.name}
            price={product.price}
            features={product.features}
            boxIncules={product.includes}
            otherProducts={product.others}
            gallery={product.gallery}
            handleAddToCart={(quantity) => handleAddToCart(quantity)}
          />
        )}
      </div>

      <div className="w-[1110px] mx-auto">
        <ProductCategory />
      </div>
    </div>
  );
};

export default ProductPage;
