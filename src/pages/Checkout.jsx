import Header from "../components/Header";
import BillingDetails from "../components/Checkout/BillingDetails";
import ShippingInfo from "../components/Checkout/ShippingInfo";
import PaymentMethod from "../components/Checkout/PaymentMethod";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Summary from "../components/Checkout/Summary";
import { useFormik } from "formik";
import OrderConfirmation from "../components/Checkout/OrderConfirmation";
import { useSelector } from "react-redux";
import { useState } from "react";
const Checkout = () => {
  const navigate = useNavigate();
  const[confirm,setConfirm]=useState(false)
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const shipping = 50;
  const vat = (totalPrice * 0.2).toFixed(2);
  const grandTotal = totalPrice + shipping + parseFloat(vat);
  const HandleGoBack = () => {
    navigate(-1);
  };
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Worng Format";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.zip) {
      errors.zip = "Required";
    }
    if (!values.city) {
      errors.city = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }
    if (!values.number) {
      errors.number = "Required";
    }
    if (!values.pin) {
      errors.pin = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      number: "",
      pin: "",
    },
    validate,
    onSubmit: (values) => {
      setConfirm(true)
      
    },
  });

  return (
    <div className={confirm && ' relative lightbox z-10'}>
      <div className=' bg-black'>
        <Header />
      </div>
      <div className=' bg-[#F2F2F2] py-[143px] z-0  '>
        <form  onSubmit={formik.handleSubmit} action=''
        className='flex justify-between items-start  w-[1110px] m-auto relative  '>
          <button
            onClick={HandleGoBack}
            className=' mb-14 text-dark-gray absolute top-[-63px] hover:text-brown'
          >
            Go Back
          </button>
          <div className='w-[730px] p-12 bg-white rounded-lg'>
            <h1 className='text-[32px] font-bold text-black mb-10'>CHECKOUT</h1>
            <div >
              <BillingDetails
                email={formik.values.email}
                name={formik.values.name}
                phone={formik.values.phone}
                handleOnchange={formik.handleChange}
                errorEmail={formik.errors.email}
                errorName={formik.errors.name}
                errorPhone={formik.errors.phone}
              />

              <ShippingInfo
                address={formik.values.address}
                zip={formik.values.zip}
                city={formik.values.city}
                country={formik.values.country}
                handleOnchange={formik.handleChange}
                errorAddress={formik.errors.address}
                errorZip={formik.errors.zip}
                errorCity={formik.errors.city}
                errorCountry={formik.errors.country}
              />

              <PaymentMethod
                number={formik.values.number}
                pin={formik.values.pin}
                handleOnchange={formik.handleChange}
                errorNumber={formik.errors.number}
                errorPin={formik.errors.pin}
              />
            </div>
          </div>

          <Summary
            vat={vat}
            totalPrice={totalPrice}
            grandTotal={grandTotal}
            shipping={shipping}
            setConfirm={setConfirm}
          />
        </form>
        {confirm && <OrderConfirmation grandTotal={grandTotal} />}
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
