import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const {cartItems} = useSelector((state) => state.cartItems)

  const toggleBTN = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-16 p-5 fixed top-0
       bg-white z-50">
        {/* desktop view */}
        <Link to="/">
          <div className="flex items-center justify-between">
            <img className="w-[50px]" src="./logo.png" />
            <h1 className="font-300 text-2xl ">The Coffee Club</h1>
          </div>
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-6 mr-9 
        font-semibold text-xl">
          <Link to="/products">
            <h2>All Products</h2>
          </Link>
          <Link to="/about-us">
            <h2>About Us</h2>
          </Link>
          <Link to="/cart">
            <h2>Cart {`(${cartItems.length})`}</h2>
          </Link>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        </div>

        <div className="md:hidden" onClick={toggleBTN}>
          {show ? (
            <RxCross1 className="font-bold text-2xl" />
          ) : (
            <IoMenuOutline className="font-bold text-3xl" />
          )}
        </div>
        {/* mobile view */}
      </div>
      {show ? (
        <div className="md:hidden space-y-4 mt-32 flex flex-col items-center justify-between text-2xl hover:cursor-pointer">
          <Link to="/products">
            <h2>All Products</h2>
          </Link>
          <Link to="/about-us">
            <h2>About Us</h2>
          </Link>
          <Link to="/cart">
            <h2>Cart ()</h2>
          </Link>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        </div>
      ) : null}
    </>
  );
};
export default Header;
