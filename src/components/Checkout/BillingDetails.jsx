const BillingDetails = ({
  name,
  email,
  phone,
  handleOnchange,
  errorEmail,
  errorName,
  errorPhone,
}) => {
  return (
    <div>
      <span className='text-brown font-bold text-xs tracking-wider '>
        BILLING DETAILS
      </span>
      <div className='grid grid-cols-2 gap-4 mt-4 mb-[53px]'>
        <label htmlFor='name'>
          <div className='flex justify-between items-center'>
            <b className={`${errorName && 'text-[#CD2C2C]'}`}>Name</b>
            {errorName && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorName} </small>}
          </div>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Alexei Ward'
            value={name}
            onChange={handleOnchange}
          />
        </label>

        <label htmlFor='email'>
          <div className='flex justify-between items-center'>
            <b  className={`${errorEmail && 'text-[#CD2C2C]'}`}>Email Address</b>
            {errorEmail && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorEmail} </small>}
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Alexei@mail.com'
            value={email}
            onChange={handleOnchange}
          />
        </label>

        <label htmlFor='phone'>
          <div className='flex  justify-between items-center'>
            <b className={`${errorPhone && 'text-[#CD2C2C]'}`}>Phone Number</b>
            {errorPhone && <small className="text-[#CD2C2C] text-[12px] font-medium">{errorPhone} </small>}
          </div>
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='+1 202-555-0136'
            value={phone}
            onChange={handleOnchange}
          />
        </label>
      </div>
    </div>
  );
};

export default BillingDetails;
