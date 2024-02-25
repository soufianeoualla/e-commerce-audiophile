import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = ({desc,slug,link,img,index,img_tablet,img_mobile}) => {
  
  return (
    <div className="page-category grid grid-cols-2 h-[560px] gap-[125px] items-center md:flex md:flex-col md:justify-center md:items-center md:h-auto md:gap-[56px] md:mb-20">
      <div className={`w-[540px]  ${index===2 && 'order-2'}  ${slug ==='YX1 WIRELESS EARPHONES' && 'bg-gray rounded-lg flex justify-center items-center h-[490px] '} md:hidden `}>
      <img className=" md:hidden" src={img} alt='' />
      </div>
      <div className={` md:px-10  hidden md:block sm:hidden `}>
      <img className="  md:h-auto md:w-full md:rounded-lg" src={img_tablet} alt='' />
      </div>
      <div className={` sm:px-6  hidden sm:block `}>
      <img className="  sm:rounded-lg" src={img_mobile} alt='' />
      </div>
      
      <div className="h-[343px] w-[445px] md:text-center md:h-[267px] sm:w-auto sm:px-6">
        <span className='text-sm text-brown new-product'>NEW PRODUCT</span>
        <h1 className='text-2xl font-bold mt-4 mb-8'>{slug}</h1>
        <p className=" text-black text-opacity-65 text-base">{desc} </p>
        
        <Link to={`/product/${link}`} className="w-[160px] py-2.5 flex justify-center items-center text-white bg-brown text-xs  font-bold hover:bg-brown-off mt-10 md:mx-auto " href="">SEE PRODUCT</Link>
      </div>
    </div>
  );
};

export default Product;
