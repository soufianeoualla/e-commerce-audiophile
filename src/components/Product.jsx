import { Link } from "react-router-dom";

const Product = ({ desc, slug, img, index,name }) => {
  return (
    <div className="grid grid-cols-2 h-[560px] gap-[125px] items-center md:flex md:flex-col md:justify-center md:items-center md:h-auto md:gap-[56px] md:mb-10">
      <div
        className={`w-[540px] ${index === 2 && "order-1"} ${
          slug === "YX1 WIRELESS EARPHONES" &&
          "bg-gray rounded-lg flex justify-center items-center h-[490px] "
        }  `}
      >
        <img className=" md:h-auto md:w-full md:rounded-lg" src={img} alt="" />
      </div>
      <div className="h-[343px] w-[445px] md:text-center md:h-[267px]">
        <span className="text-sm text-brown new-product">NEW PRODUCT</span>
        <h1 className="text-2xl font-bold mt-4 mb-8">{name}</h1>
        <p className=" text-black text-opacity-65 text-base">{desc} </p>

        <Link
          to={`/product/${slug}`}
          className="w-[160px] py-2.5 flex justify-center items-center text-white bg-brown text-xs  font-bold hover:bg-brown-off mt-10 md:mx-auto "
          href=""
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default Product;
