const ShippingInfo = ({
  address,
  zip,
  city,
  country,
  handleOnchange,
  errorAddress,
  errorZip,
  errorCity,
  errorCountry,
}) => {
  return (
    <div>
      <span className='text-brown font-bold text-xs tracking-wider '>
        SHIPPING INFO
      </span>
      <div className='flex items-center flex-wrap justify-between mt-4 mb-[53px]'>
        <label htmlFor='address ' className='w-full'>
        <div className='flex  justify-between items-center'>
            <b className={`${errorAddress && 'text-[#CD2C2C]'}`}>Address</b>
            {errorAddress && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorAddress} </small>}
          </div>          <input
            type='text'
            name='address'
            id='address'
            placeholder='1137 Williams Avenue'
            value={address}
            onChange={handleOnchange}
          />
        </label>
        <label htmlFor='zip' className='w-[309px] my-6'>
        <div className='flex  justify-between items-center'>
            <b className={`${errorZip && 'text-[#CD2C2C]'}`}>ZIP Code</b>
            {errorZip && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorZip} </small>}
          </div>
          <input
            type='number'
            name='zip'
            id='zip'
            placeholder='10001'
            value={zip}
            onChange={handleOnchange}
          />
        </label>
        <label htmlFor='city' className='w-[309px] my-6'>
        <div className='flex  justify-between items-center'>
            <b className={`${errorCity && 'text-[#CD2C2C]'}`}>City</b>
            {errorCity && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorCity} </small>}
          </div>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='New York'
            value={city}
            onChange={handleOnchange}
          />
        </label>
        <label htmlFor='country' className='w-[309px]'>
        <div className='flex  justify-between items-center'>
            <b className={`${errorCountry && 'text-[#CD2C2C]'}`}>Country</b>
            {errorCountry && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorCountry} </small>}
          </div>
          <input
            type='text'
            name='country'
            id='country'
            placeholder='United States'
            value={country}
            onChange={handleOnchange}
          />
        </label>
      </div>
    </div>
  );
};

export default ShippingInfo;
