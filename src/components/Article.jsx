import { useEffect, useState } from 'react';
import img from './assets/shared/desktop/image-best-gear.jpg'
import img_tablet from './assets/shared/tablet/image-best-gear.jpg'
const Article = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsTablet(width >= 768 && width <= 1024);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);
 
  return (
    <article className='grid grid-cols-2 items-center my-48 max-w-[1110px] mx-auto md:grid-cols-1 md:text-center md:p-10 md:my-20'>
        <div className="w-[445px] md:w-full md:order-2">
            <h1 className="text-2xl uppercase tracking-wider font-bold text-black mb-8  ">Bringing you the <br /> <span className=" text-brown">best</span> audio gear</h1>
            <p className="text-black-light text-opacity-75 text-base ">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <img  width={'540px'} className='rounded-lg md:w-full md:h-[300px] md:object-cover md:mb-8' src={isTablet ? img_tablet:img} alt="" />
    </article>

  )
}

export default Article