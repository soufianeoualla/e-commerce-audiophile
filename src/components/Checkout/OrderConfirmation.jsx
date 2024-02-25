import { useDispatch, useSelector } from "react-redux";
import check from "../assets/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../../redux/cartReducer";
import { useEffect, useState } from "react";

const OrderConfirmation = ({ grandTotal }) => {
  const products = useSelector((state) => state.cart.products);
  const quantity =useSelector(state=>state.cart.quantity)
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const product = !viewAll ? products.slice(0, 1) : products;
  const handleBack = () => {
    dispacth(removeAll());
    navigate("/");

  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productQuantity =product.map((item)=>item.quantity)
  return (
    <div className='w-[540px] p-12 bg-white fixed sm:absolute top-1/2 right-1/2 rounded-lg z-30 translate-x-[50%] translate-y-[-50%] md:w-[70%] sm:w-[80%] sm:p-8 sm:top-[129px] sm:translate-y-0  '>
      <img src={check} alt='' />
      <h1 className='text-[32px] text-black font-bold mb-6 mt-8 sm:text-[24px] '>
        THANK YOU FOR YOUR ORDER
      </h1>
      <p className='text-black text-opacity-60 font-medium text-base'>
        You will receive an email confirmation shortly.
      </p>
      <div className='mt-8 w-[444px] flex sm:flex-col sm:w-auto   '>
        <div className=' bg-gray p-6 w-[246px] rounded-l-lg grid sm:w-full sm:rounded-t-lg sm:rounded-b-none'>
          {product &&
            product.map((item) => (
              <div
                className='flex justify-between items-start mb-4 w-[198px ]'  
                key={item[0].id}
              >
                <div className='flex items-center gap-4'>
                  <img
                    className='w-[50px] h-[50px] rounded-md'
                    src={item[0].image.mobile}
                    alt=''
                  />
                  <div className='flex flex-col '>
                    <h3 className='text-base font-bold'>{item[0].name} </h3>
                    <span className='text-[14px] font-bold text-black text-opacity-60'>
                      {" "}
                      {"$ "}
                      {item[0].price.toString().length > 3
                        ? `${item[0].price
                            .toString()
                            .slice(0, 1)},${item[0].price.toString().slice(1)}`
                        : item[0].price}{" "}
                    </span>
                  </div>
                </div>
                <span className='text-black text-opacity-70 text-base font-bold'>
                  x{item.quantity}
                </span>
              </div>
            ))}
          {(quantity-1 -productQuantity) > 0 &&
          <>
           <hr className='text-black text-opacity-15 mb-4' />
        <button onClick={()=>setViewAll(!viewAll)}
           className='flex justify-center items-center w-full text-black text-opacity-60 text-[12px] font-bold hover:underline '>
            {!viewAll ? `and ${quantity - 1 -productQuantity} other item(s)`:`View Less`}
          </button>
             </>
          }
        </div>
        <div className={`w-[198px] flex sm:justify-start sm:items-center  p-8 bg-black rounded-r-lg ${viewAll ? ' justify-end items-end':'justify-start items-center '} sm:w-full sm:rounded-tr-none  sm:rounded-b-lg sm:flex-col  `}>
          <div className=" sm:grid sm:items-start">
            <span className='text-base text-white text-opacity-60 font-medium'>
              GRAND TOTAL{" "}
            </span>
            <b className='text-white text-lg sm:ml-2 '>
              {"$"}
              {grandTotal.toString().split(".")[0].length <= 3
                ? grandTotal
                : grandTotal.toString().split(".")[0].length > 4
                ? grandTotal.toString().split(".")[0].slice(0, 2) +
                  "," +
                  grandTotal.toString().split(".")[0].slice(2)
                : (grandTotal.toString().split(".")[0].length > 3
                    ? grandTotal.toString().split(".")[0].slice(0, 1) + ","
                    : "") + grandTotal.toString().split(".")[0].slice(1)}
            </b>
          </div>
        </div>
      </div>
      <button
        onClick={handleBack}
        className=' bg-brown w-full h-[48px] text-white text-base font-bold tracking-wider mt-12 hover:bg-brown-off sm:mt-8'
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default OrderConfirmation;
