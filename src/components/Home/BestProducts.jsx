import speaker_zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import circles from "../assets/home/desktop/pattern-circles.svg";
import earphones from "../assets/home/desktop/image-earphones-yx1.jpg";
import earphones_tablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";
const BestProducts = ({ isTablet }) => {
  return (
    <section className="best-products mb-28 grid gap-12 md:p-8">
      <div className="h-[560px] bg-brown relative overflow-hidden rounded-lg  md:h-[720px]  ">
        <img className=" absolute top-0 left-[-15%]  " src={circles} alt="" />
        <div className="flex justify-center items-center md:flex md:flex-col md:justify-between md:items-center ">
          <img
            className=" absolute bottom-[-16px] left-[10%]  md:top-10 md:w-[198px] md:left-1/2 md:translate-x-[-50%] "
            width={"410px"}
            src={speaker_zx9}
            alt=""
          />
          <div className="text-white w-[349px] h-[303px] flex flex-col justify-between absolute top-[25%] right-[10%] md:items-center md:right-1/2 md:translate-x-[50%]   md:top-[50%] md:text-center  ">
            <div>
              <h1 className="text-3xl font-bold ">ZX9 SPEAKER</h1>
              <p className="font-medium text-gray text-opacity-85 mt-5">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </div>
            <Link
              to={"/product/zx9-speaker"}
              className="text-xs font-bold bg-black w-[160px] h-[48px] flex justify-center items-center hover:bg-dark-gray"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[320px] relative px-20 flex  items-center rounded-lg ">
        <div className="">
          <h2 className="text-xl font-bold text-black mb-8">ZX7 SPEAKER</h2>
          <Link
            to={"/product/zx7-speaker"}
            className="text-xs font-bold border-[1.5px] border-black w-[160px] h-[48px] flex justify-center items-center hover:bg-black"
            href=""
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 h-[320px]">
        <img
          className="rounded-lg h-[320px] w-full"
          src={isTablet ? earphones_tablet : earphones}
          alt=""
        />
        <div className="rounded-lg bg-gray flex flex-col justify-center px-20 md:px-10">
          <h2 className="text-xl font-bold text-black mb-8">YX1 EARPHONES</h2>
          <Link
            to={"/product/yx1-wireless-earphones"}
            className="text-xs font-bold border-[1.5px] border-black w-[160px] h-[48px] flex justify-center items-center hover:bg-black"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
