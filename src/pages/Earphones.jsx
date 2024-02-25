import { useEffect } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import ProductCategory from "../components/ProductCategory";
import yx1 from "../components/assets/shared/desktop/image-category-thumbnail-earphones.png";
import yx1_tablet from "../components/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1_mobile from "../components/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";


const Earphones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="h-[336px] bg-black">
        <Header />
        <div className="flex justify-center items-center h-[240px] font-bold">
          <h1 className="text-2xl tracking-widest text-white">EARPHONES</h1>
        </div>
      </div>
      <div className=" max-w-[1110px] mx-auto grid gap-24 my-28">
        <Product
          desc={
            "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          }
          slug={"YX1 WIRELESS EARPHONES"}
          link={"yx1 wireless earphones"}
          img={yx1}
          img_tablet={yx1_tablet}
          img_mobile ={yx1_mobile}
        />
      </div>
      <div className="max-w-[1110px] mx-auto ">
        <ProductCategory />
      </div>
    </div>
  );
};

export default Earphones;
