import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideNotfication } from "../redux/cartReducer";

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
  img_tablet,
  img_mobile
}) => {

  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const HandleGoBack = () => {
    navigate(-1);
  };
  const handleButton= ()=>{
    handleAddToCart(quantity)
    setTimeout(()=>{
      dispatch(hideNotfication())
    },2000)
  }

 

  return (
    <>
    <div className=" md:px-8">

      <button onClick={HandleGoBack} className=' mb-14 text-dark-gray md:mb-0 sm:mb-8'>
        Go Back
      </button>

      <div className='grid grid-cols-2 h-[560px] gap-[125px] items-center md:gap-10 sm:grid-cols-1 sm:items-center sm:place-content-center sm:h-auto '>
        <div className={`w-[540px] md:w-auto `}>
          <img className={" md:hidden"} src={img} alt='' />
          <img className={" hidden md:block sm:hidden"} src={img_tablet} alt='' />
          <img className={" hidden sm:block"} src={img_mobile} alt='' />


        </div>
        <div className='h-[343px] w-[445px] flex justify-center items-start flex-col md:w-auto sm:h-auto  '>
          <span className='text-sm text-brown new-product'>NEW PRODUCT</span>
          <h1 className='text-2xl font-bold mt-4 mb-8'>{name}</h1>
          <p className=' text-black text-opacity-65 text-base mb-8'>{desc} </p>
          <span className='text-lg font-bold'>
            ${" "}
            {price.toString().length > 3
              ? `${price.toString().slice(0, 1)},${price.toString().slice(1)}`
              : price}{" "}
          </span>

          <div className=' flex  gap-4 items-center mt-12 sm:w-[80%]'>
            <div className='w-[120px] h-[48px] text-xs font-bold flex justify-center gap-5 items-center bg-gray md:w-[50%] '>
              <div
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className='w-4 h-4 flex justify-center  items-center text-dark-gray cursor-pointer hover:text-brown '
              >
                <FaMinus />
              </div>
              {quantity}
              <div
                onClick={() => setQuantity(quantity + 1)}
                className='w-4 h-4 flex justify-center items-center text-dark-gray cursor-pointer hover:text-brown '
              >
                <FaPlus />
              </div>
            </div>
            <button onClick={handleButton}
             className={`w-[160px] h-[48px] bg-brown  text-xs font-bold text-white hover:bg-brown-off focus:bg-brown-off  }`}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className='my-40 flex items-start gap-[125px] md:flex-col md:gap-[50px]'>
        <div className='w-[635px] md:w-auto'>
          <h1 className='mb-8 text-black font-bold text-[32px]'>FEATURES</h1>
          <p className='text-base text-black text-opacity-75'>{features}</p>
        </div>

        <div className='w-[350px] md:flex md:justify-between md:w-full sm:grid'>
          <h1 className='mb-8 text-black font-bold text-[32px]'>IN THE BOX</h1>
          <ul className='flex flex-col gap-2'>
            {boxIncules.map((list) => (
              <li
                className='flex items-center gap-6 text-base text-black text-opacity-75 font-medium'
                key={list.item}
              >
                {" "}
                <span className='text-brown font-bold'>
                  {list.quantity}x{" "}
                </span>{" "}
                {list.item}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='my-40 flex gap-30 justify-between  h-[592px] md:h-auto sm:grid sm:place-content-center sm:items-center sm:gap-8'>
        <div className='grid gap-[30px] h-full w-[445px] md:w-2/5 sm:h-full sm:w-full'>
          <img className='rounded-lg md:hidden' src={gallery.first.desktop} alt='' />
          <img className='rounded-lg md:hidden' src={gallery.second.desktop} alt='' />
          <img className='rounded-lg hidden md:block sm:hidden' src={gallery.first.tablet} alt='' />
          <img className='rounded-lg hidden md:block sm:hidden' src={gallery.second.tablet} alt='' />
          <img className='rounded-lg hidden sm:block ' src={gallery.first.mobile} alt='' />
          <img className='rounded-lg hidden sm:block ' src={gallery.second.mobile} alt='' />
        </div>
        <div className='h-full w-[635px] md:w-[58%] sm:w-full'>
          <img
            className=' h-full w-full rounded-lg md:hidden'
            src={gallery.third.desktop}
            alt=''
          />
          <img
            className=' h-full w-full rounded-lg hidden md:block sm:hidden '
            src={gallery.third.tablet}
            alt=''
          />
          <img
            className=' h-full w-full rounded-lg hidden sm:block '
            src={gallery.third.mobile}
            alt=''
          />
        </div>
      </div>

      <div className='mb-36 '>
        <h1 className='text-center mb-16 font-bold text-[32px]'>
          YOU MAY ALSO LIKE
        </h1>
        <div className='flex justify-between sm:flex-col sm:items-center sm:gap-8  '>
          {otherProducts.map((product) => (
            <div
              className='w-[350px] h-[471px] flex flex-col justify-between items-center md:w-[32%] sm:w-full sm:h-full'
              key={product.slug}
            >
              <img
              className=" md:hidden"
                width={"350px"}
                height={"318px"}
                src={product.image.desktop}
                alt=''
              />
                <img
                className="hidden md:block h-full rounded-lg sm:hidden "
                
                src={product.image.tablet}
                alt=''
              />
                <img
                className="hidden sm:block h-full   rounded-lg "
                
                src={product.image.mobile}
                alt=''
              />
              <h1 className='text-[24px] font-bold text-black mt-10'>
                {product.name}{" "}
              </h1>

              <Link
                to={`/product/${product.name.toLowerCase()}`}
                className='w-[160px] py-2.5 flex justify-center items-center text-white bg-brown text-xs  font-bold hover:bg-brown-off mt-8 '
                href=''
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
