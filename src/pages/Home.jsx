import BestProducts from "../components/Home/BestProducts"
import Hero from "../components/Home/Hero"
import ProductCategory from "../components/ProductCategory"
import Header from '../components/Header'
import { useEffect, useState } from "react"
const Home = () => {

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
    <>
    <div className="wrapper h-[729px]">
    <Header/>
    <Hero />
    </div>
    <div className="max-w-[1110px] m-auto">
      <ProductCategory isTablet={isTablet}/>
      <BestProducts isTablet={isTablet}/>
    </div>
    </>
  )
}

export default Home