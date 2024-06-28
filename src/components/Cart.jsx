import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";
import {
  deleteProduct,
  quantityDecrement,
  quantityIncrement,
  removeAll,
} from "../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../lib/utils";

const Cart = ({ setIsShowing }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteProduct(products[index]));
  };
  const handleQuantityIncrement = () => {
    dispatch(quantityIncrement());
  };
  const handleQuantityDecrement = () => {
    dispatch(quantityDecrement());
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };
  const handleCheckout = () => {
    setIsShowing(false);
    navigate("/checkout");
  };

  return (
    <>
      <div
        onClick={() => setIsShowing(false)}
        className="fixed w-full h-full bg-black/75 inset-0 z-10"
      />
      <div className="w-[407px]  p-[30px] pb-6 bg-white rounded-lg absolute top-[129px] right-0 z-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg tracking-wider font-bold">
            CART ({quantity}){" "}
          </h2>
          {quantity > 0 && (
            <button
              onClick={handleRemoveAll}
              className="text-base text-black text-opacity-75 font-medium underline hover:text-brown"
            >
              Remove all
            </button>
          )}
          {quantity === 0 && (
            <button
              onClick={() => setIsShowing(false)}
              className=" underline text-black text-opacity-60 text-xs font-bold hover:text-brown"
            >
              CLOSE
            </button>
          )}
        </div>
        {quantity > 0 && (
          <div className="flex flex-col gap-6">
            {products &&
              products.map((item, index) => (
                <div
                  className="flex  justify-between items-center  h-[64]"
                  key={item.id}
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[64px] h-[64px] rounded-md"
                      src={item.image.mobile}
                      alt=""
                    />
                    <div className="flex flex-col ">
                      <h3 className="text-base font-bold">{item.name} </h3>
                      <span className="text-[14px] font-bold text-black text-opacity-75">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-[120px] h-[48px] text-xs font-extrabold flex  justify-center gap-5 items-center bg-gray">
                      <div
                        onClick={handleQuantityDecrement}
                        className="w-4 h-4 flex justify-center  items-center text-dark-gray cursor-pointer hover:text-brown "
                      >
                        <FaMinus />
                      </div>
                      {item.quantity}
                      <div
                        onClick={handleQuantityIncrement}
                        className="w-4 h-4 flex justify-center items-center text-dark-gray cursor-pointer hover:text-brown "
                      >
                        <FaPlus />
                      </div>
                    </div>
                    <div
                      onClick={() => handleDelete(index)}
                      className="w-4 h-4 flex justify-center items-center text-base text-black text-opacity-55 hover:text-brown hover:text-opacity-100 cursor-pointer"
                    >
                      <FaXmark />
                    </div>
                  </div>
                </div>
              ))}

            <div className="flex justify-between items-center mt-8">
              <span className="text-base text-black text-opacity-75 font-medium">
                TOTAL
              </span>
              <h2 className="text-lg font-bold text-black">
                {"$ "}
                {totalPrice.toString().length > 4
                  ? `${totalPrice.toString().slice(0, 2)},${totalPrice
                      .toString()
                      .slice(2)}`
                  : totalPrice.toString().length > 3
                  ? `${totalPrice.toString().slice(0, 1)},${totalPrice
                      .toString()
                      .slice(1)}`
                  : totalPrice}{" "}
              </h2>
            </div>
            <button
              onClick={handleCheckout}
              className=" font-bold text-xs tracking-wider flex justify-center items-center w-full h-[48px] bg-brown text-white hover:bg-brown-off"
              href=""
            >
              CHECKOUT
            </button>

            <button
              onClick={() => setIsShowing(false)}
              className=" underline text-black text-opacity-60 text-xs font-bold hover:text-brown"
            >
              CLOSE
            </button>
          </div>
        )}

        {quantity === 0 && (
          <div className="flex flex-col  justify-center items-center h-[130px] text-lg font-bold text-black text-opacity-60">
            <h1>YOUR CART IS EMPTY</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
