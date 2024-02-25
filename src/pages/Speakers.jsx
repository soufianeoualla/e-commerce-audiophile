import Header from "../components/Header";
import Product from "../components/Product";
import ProductCategory from "../components/ProductCategory";
import zx9 from '../components/assets/shared/desktop/image-zx9-speaker.jpg'
import zx7 from '../components/assets/shared/desktop/image-zx7-speaker.jpg'
import zx9_tablet from '../components/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg'
import zx7_tablet from '../components/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg'
import zx9_mobile from '../components/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
import zx7_mobile from '../components/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
import { useEffect } from "react";

const Speakers = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='h-[336px] bg-black'>
        <Header />
        <div className='flex justify-center items-center h-[240px] font-bold'>
          <h1 className='text-2xl tracking-widest text-white'>SPEAKERS</h1>
        </div>
      </div>

      <div className=' max-w-[1110px] mx-auto grid gap-24 my-28'>
        <Product
          desc={
            "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          }
          slug={"ZX9 SPEAKER"}
          link={"zx9 speaker"}
          img={zx9}
          img_tablet={zx9_tablet}
          img_mobile={zx9_mobile}
          index={1}
        />

        <Product
          desc={
            "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          }
          slug={"ZX7 SPEAKER"}
          link={"zx7 speaker"}
          img={zx7}
          img_tablet={zx7_tablet}
          img_mobile={zx7_mobile}
          index={2}
        />

       
      </div>
      <div className='max-w-[1110px] mx-auto'>
        <ProductCategory />
      </div>
    </div>
  );
};

export default Speakers;
