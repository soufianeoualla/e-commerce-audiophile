import { useSelector } from "react-redux";
import { formatPrice } from "../../../lib/utils";

const Summary = ({ vat, totalPrice, grandTotal, shipping, setConfirm }) => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="w-[350px] rounded-lg bg-white p-8 ">
      <h2 className="text-lg font-bold tracking-wider text-black mb-8">
        SUMMARY
      </h2>

      {products &&
        products.map((item) => (
          <div className="flex justify-between items-center mb-4" key={item.id}>
            <div className="flex items-center gap-4">
              <img
                className="w-[64px] h-[64px] rounded-md"
                src={item.image.mobile}
                alt=""
              />
              <div className="flex flex-col ">
                <h3 className="text-base font-bold">{item.name} </h3>
                <span className="text-[14px] font-bold text-black text-opacity-60">
                  {formatPrice(item.price)}
                </span>
              </div>
            </div>
            <span className="text-black text-opacity-70 text-base font-bold">
              x{item.quantity}
            </span>
          </div>
        ))}

      <div className="flex justify-between items-center mt-8  mb-2">
        <span className="text-base font-medium text-black text-opacity-60">
          TOTAL
        </span>
        <b className="text-black text-lg">{formatPrice(totalPrice)}</b>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-base font-medium text-black text-opacity-60">
          SHIPPING
        </span>
        <b className="text-black text-lg">$ {shipping}</b>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-base font-medium text-black text-opacity-60">
          VAT (INCLUDED)
        </span>
        <b className="text-black text-lg">{formatPrice(vat)}</b>
      </div>
      <div className="flex justify-between items-center mt-6">
        <span className="text-base font-medium text-black text-opacity-60">
          GRAND TOTAL
        </span>
        <b className="text-brown text-lg">{formatPrice(grandTotal)}</b>
      </div>
      <button
        onClick={() => setConfirm(true)}
        type="submit"
        className="text-xs font-bold text-white bg-brown h-[48px] w-full mt-8 tracking-widest hover:bg-brown-off"
      >
        CONTINUE & PAY
      </button>
    </div>
  );
};

export default Summary;
