import { useSelector } from "react-redux";

const Summary = ({vat,totalPrice,grandTotal,shipping}) => {
    
    const products = useSelector((state) => state.cart.products);
  
  return (
    <div className='w-[350px] rounded-lg bg-white p-8 md:w-full md:mt-10 '>
    <h2 className='text-lg font-bold tracking-wider text-black mb-8'>
      SUMMARY
    </h2>

    {products &&
      products.map((item) => (
        <div
          className='flex justify-between items-center mb-4'
          key={item[0].id}
        >
          <div className='flex items-center gap-4'>
            <img
              className='w-[64px] h-[64px] rounded-md'
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
                      .slice(0, 1)},${item[0].price
                      .toString()
                      .slice(1)}`
                  : item[0].price}{" "}
              </span>
            </div>
          </div>
          <span className='text-black text-opacity-70 text-base font-bold'>
            x{item.quantity}
          </span>
        </div>
      ))}

    <div className='flex justify-between items-center mt-8  mb-2'>
      <span className='text-base font-medium text-black text-opacity-60'>
        TOTAL
      </span>
      <b className='text-black text-lg'>
        {" "}
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
      </b>
    </div>
    <div className='flex justify-between items-center mb-2'>
      <span className='text-base font-medium text-black text-opacity-60'>
        SHIPPING
      </span>
      <b className='text-black text-lg'>$ {shipping}</b>
    </div>
    <div className='flex justify-between items-center'>
      <span className='text-base font-medium text-black text-opacity-60'>
        VAT (INCLUDED)
      </span>
      <b className='text-black text-lg'>
        {"$"}
        {vat.toString().split(".")[0].length <= 3
          ? vat
          : vat.toString().split(".")[0].length > 3
          ? vat.toString().split(".")[0].slice(0, 1) +
            "," +
            vat.toString().split(".")[0].slice(1)
          : (vat.toString().split(".")[0].length > 4
              ? vat.toString().split(".")[0].slice(0, 2) + ","
              : "") + vat.toString().split(".")[0].slice(2)}
      </b>
    </div>
    <div className='flex justify-between items-center mt-6'>
      <span className='text-base font-medium text-black text-opacity-60'>
        GRAND TOTAL
      </span>
      <b className='text-brown text-lg'>
      {"$"}
        {grandTotal.toString().split(".")[0].length <= 3
          ? grandTotal
          : grandTotal.toString().split(".")[0].length > 4
          ? grandTotal.toString().split(".")[0].slice(0, 2) +
            "," +
            grandTotal.toString().split(".")[0].slice(2)
          : (grandTotal.toString().split(".")[0].length > 3
              ? grandTotal.toString().split(".")[0].slice(0,1) + ","
              : "") + grandTotal.toString().split(".")[0].slice(1)}
      </b>
    </div>
    <button type="submit" className="text-xs font-bold text-white bg-brown h-[48px] w-full mt-8 tracking-widest hover:bg-brown-off">CONTINUE & PAY</button>
  </div>
  )
}

export default Summary