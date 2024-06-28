import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../../lib/utils";

const ProductTemplate = ({
  img,
  name,
  desc,
  price,
  features,
  boxIncules,
  otherProducts,
  gallery,
  handleAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const HandleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className=" md:px-8">
        <button onClick={HandleGoBack} className=" mb-14 text-dark-gray">
          Go Back
        </button>
        <div className="grid grid-cols-2 h-[560px] gap-[125px] items-center ">
          <div className={`w-[540px] `}>
            <img className={""} src={img} alt="" />
          </div>
          <div className="h-[343px] w-[445px] flex justify-center items-start flex-col">
            <span className="text-sm text-brown new-product">NEW PRODUCT</span>
            <h1 className="text-2xl font-bold mt-4 mb-8">{name}</h1>
            <p className=" text-black text-opacity-65 text-base mb-8">
              {desc}{" "}
            </p>
            <span className="text-lg font-bold">{formatPrice(price)}</span>

            <div className=" flex  gap-4 items-center mt-12">
              <div className="w-[120px] h-[48px] text-xs font-bold flex justify-center gap-5 items-center bg-gray">
                <div
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-4 h-4 flex justify-center  items-center text-dark-gray cursor-pointer hover:text-brown "
                >
                  <FaMinus />
                </div>
                {quantity}
                <div
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-4 h-4 flex justify-center items-center text-dark-gray cursor-pointer hover:text-brown "
                >
                  <FaPlus />
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(quantity)}
                className={`w-[160px]  bg-brown h-full text-xs font-bold text-white hover:bg-brown-off  }`}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="my-40 flex items-start gap-[125px] md:flex-col md:group-[50px]:">
          <div className="w-[635px]">
            <h1 className="mb-8 text-black font-bold text-[32px]">FEATURES</h1>
            <p className="text-base text-black text-opacity-75">{features}</p>
          </div>

          <div className="w-[350px] md:flex md:justify-between md:w-full">
            <h1 className="mb-8 text-black font-bold text-[32px]">
              IN THE BOX
            </h1>
            <ul className="flex flex-col gap-2">
              {boxIncules.map((list) => (
                <li
                  className="flex items-center gap-6 text-base text-black text-opacity-75 font-medium"
                  key={list.item}
                >
                  {" "}
                  <span className="text-brown font-bold">
                    {list.quantity}x{" "}
                  </span>{" "}
                  {list.item}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-40 flex gap-30 justify-between    h-[592px]">
          <div className="grid gap-[30px] h-full w-[445px]">
            <img className="rounded-lg" src={gallery.first.desktop} alt="" />
            <img className="rounded-lg" src={gallery.second.desktop} alt="" />
          </div>
          <div className="h-full w-[635px]">
            <img
              className=" h-full w-full rounded-lg"
              src={gallery.third.desktop}
              alt=""
            />
          </div>
        </div>

        <div className="mb-36 ">
          <h1 className="text-center mb-16 font-bold text-[32px]">
            YOU MAY ALSO LIKE
          </h1>
          <div className="flex justify-between  ">
            {otherProducts.map((product) => (
              <div
                className="w-[350px] h-[471px] flex flex-col justify-between items-center"
                key={product.slug}
              >
                <img
                  width={"350px"}
                  height={"318px"}
                  src={product.image.desktop}
                  alt=""
                />
                <h1 className="text-[24px] font-bold text-black mt-10">
                  {product.name}{" "}
                </h1>

                <Link
                  to={`/product/${product.name.toLowerCase()}`}
                  className="w-[160px] py-2.5 flex justify-center items-center text-white bg-brown text-xs  font-bold hover:bg-brown-off mt-8 "
                  href=""
                >
                  SEE PRODUCT
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTemplate;
