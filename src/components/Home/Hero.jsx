import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" hero max-w-[1110px] m-auto flex flex-col justify-center md:items-center  "> 
      <div className=" mt-[112px] w-[398px] h-[346px] flex flex-col justify-between items-start gap-8 md:items-center md:text-center ">
        <span className="text-sm text-gray text-opacity-50 new-product">NEW PRODUCT</span>
        <h1 className=" text-3xl font-bold text-white">XX99 Mark II Headphones</h1>
        <p className="text-gray font-medium text-opacity-70">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        
        <Link to={'/product/xx99 mark ii'} className="w-[160px] py-2.5 flex justify-center items-center text-white bg-brown text-xs  font-bold hover:bg-brown-off" >SEE PRODUCT</Link>
      </div>
      
    </section>
  );
};

export default Hero;
