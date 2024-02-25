import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductTemplate from "../components/ProductTemplate";
import ProductCategory from "../components/ProductCategory";
import data from "../data.json";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartReducer";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products, setProducts] = useState(data);
  const x99Mark2 = products.filter(
    (item) => item.slug === "xx99-mark-two-headphones"
  );
  const x99Mark1 = products.filter(
    (item) => item.slug === "xx99-mark-one-headphones"
  );
  const zx9 = products.filter((item) => item.slug === "zx9-speaker");
  const xx59 = products.filter((item) => item.slug === "xx59-headphones");
  const zx7 = products.filter((item) => item.slug === "zx7-speaker");
  const yx1 = products.filter((item) => item.slug === "yx1-earphones");

  const location = useLocation().pathname.split("/")[2];
  const decodedLocation = decodeURIComponent(location);

  const product =
    decodedLocation === "yx1 wireless earphones"
      ? yx1
      : decodedLocation === "xx99 mark i"
      ? x99Mark1
      : decodedLocation === "xx99 mark ii"
      ? x99Mark2
      : decodedLocation === "zx9 speaker"
      ? zx9
      : decodedLocation === "zx7 speaker"
      ? zx7
      : decodedLocation === "xx59"
      ? xx59
      : null;

  const dispatch = useDispatch();

  const handleAddToCart = (quantity)=>{
    dispatch(addProducts({...product,quantity}))
  }



  return (
    <div>
      <div className='bg-black'>
        <Header />
      </div>
      {product.map((item) => (
        <div key={item.id} className='max-w-[1110px] mx-auto mt-20'>
          <ProductTemplate
            img={item.image.desktop}
            img_tablet={item.image.tablet}
            img_mobile={item.image.mobile}
            desc={
              "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            }
            name={item.name}
            price={item.price}
            features={item.features}
            boxIncules={item.includes}
            otherProducts={item.others}
            gallery={item.gallery}
            handleAddToCart={handleAddToCart}
          />
        </div>
      ))}
      <div className='max-w-[1110px] mx-auto'>
        <ProductCategory />
      </div>
    </div>
  );
};

export default ProductPage;
