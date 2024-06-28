import logo from "./assets/shared/desktop/logo.svg";
import cart from "./assets/shared/desktop/icon-cart.svg";
import hamburger_menu from "./assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import NavLinks from "./NavLinks";
import ProductCategory from "./ProductCategory";
import { showMenu } from "../redux/menuReducer";
import { useState } from "react";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [isShowing, setIsShowing] = useState();

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.value);

  return (
    <header
      className={`flex justify-between items-center max-w-[1110px] h-[96px] m-auto border-b border-opacity-50 border-gray relative md:p-10 z-20  `}
    >
      {isShowing && <Cart setIsShowing={setIsShowing} />}
      <div className="logo flex items-center gap-10">
        <img
          onClick={() => dispatch(showMenu())}
          className="hidden md:block"
          src={hamburger_menu}
          alt=""
        />
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="md:hidden">
        <NavLinks />
      </div>

      {menu && (
        <div className="absolute w-screen top-[96px] left-0 bg-white  rounded-b-lg  ">
          <ProductCategory />
        </div>
      )}

      <div
        onClick={() => setIsShowing(!isShowing)}
        className="cart cursor-pointer relative flex justify-center items-center w-12 h-12"
      >
        {quantity > 0 && (
          <div className="badge w-6 h-6 bg-brown bg-opacity-80 flex justify-center items-center font-bold text-white rounded-full text-xs absolute top-0 right-0">
            {quantity}
          </div>
        )}
        <img src={cart} alt="" />
      </div>
    </header>
  );
};

export default Header;
