import BestProducts from "../components/Home/BestProducts"
import Hero from "../components/Home/Hero"
import ProductCategory from "../components/ProductCategory"
import Header from '../components/Header'
const Home = () => {

  
  return (
    <>
    <div className="wrapper h-[729px]">
    <Header/>
    <Hero />
    </div>
    <div className="max-w-[1110px] m-auto">
      <ProductCategory />
      <BestProducts />
    </div>
    </>
  )
}

export default Home