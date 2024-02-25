import { Outlet } from "react-router-dom"
import Article from "./Article"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
  
    <Outlet/>
    
    <Article/>
    <Footer/>
    
    </>
  )
}

export default Layout