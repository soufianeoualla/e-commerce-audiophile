import { useState } from "react";
import cashOnDelivery from "../assets/checkout/icon-cash-on-delivery.svg";

const PaymentMethod = ({
  number,
  pin,
  handleOnchange,
  errorNumber,
  errorPin,
}) => {
  const paymentMethods = ["e-Money", "Cash On Delivery"];
  const [selected, setSelected] = useState(0);

  return (
    <>
      <div>
        <span className='text-brown font-bold text-xs tracking-wider '>
          PAYMENT DETAILS
        </span>
        <div className='flex justify-between mt-4'>
          <b className='text-[12px] text-black'>Payment Method </b>
          <div className='grid gap-4'>
            {paymentMethods.map((n, index) => (
              <div
                className={`w-[309px] h-[56px] rounded-lg border border-[#CFCFCF] flex items-center gap-4 p-4 text-black font-bold text-[14px] cursor-pointer hover:border-brown ${
                  selected === index && "border-brown"
                } `}
                onClick={() => setSelected(index)}
                key={n}
              >
                <div className='w-[20px] h-[20px] rounded-full flex justify-center items-center border-[#CFCFCF] border  '>
                  {selected === index && (
                    <div className='circle w-3 h-3 rounded-full bg-brown '></div>
                  )}
                </div>
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selected === 1 && (
        <div className='flex items-center justify-between text-base text-black text-opacity-60 gap-8 mt-8'>
          <img src={cashOnDelivery} alt='' />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}

      {selected === 0 && (
        <div className='flex justify-between items-center mt-8'>
          <label htmlFor='number' className='w-[309px]'>
          <div className='flex  justify-between items-center'>
            <b className={`${errorNumber && 'text-[#CD2C2C]'}`}>e-Money Number</b>
            {errorNumber && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorNumber} </small>}
          </div>            <input
              type='number'
              name='number'
              id='number'
              placeholder='238521993'
              value={number}
              onChange={handleOnchange}
            />
          </label>
          <label htmlFor='pin' className='w-[309px]'>
          <div className='flex  justify-between items-center'>
            <b className={`${errorPin && 'text-[#CD2C2C]'}`}>e-Money PIN</b>
            {errorPin && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorPin} </small>}
          </div>
            <input
              type='number'
              name='pin'
              id='pin'
              placeholder='6891'
              value={pin}
              onChange={handleOnchange}
            />
          </label>
        </div>
      )}
    </>
  );
};

export default PaymentMethod;
