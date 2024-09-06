import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white grid md:grid-cols-3 p-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img className="w-[50px]" src="./logo.png" />
            <h1 className="font-300 text-2xl ">The Coffee Club</h1>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-300 text-2xl text-red-400 mt-3">Get Help</h1>
          <div className=" flex flex-col justify-center items-center space-x-4 mt-3 space-y-3 font-thin  text-xl  ">
            <h2>FAQ</h2>
            <h2>Shipping</h2>
            <h2>Return</h2>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-300 text-2xl text-red-400 mt-2 ">Follow Us</h1>
          <div className="flex justify-center items-center space-x-4 m-3 ">
            <FaFacebook className="h-7 w-7" />
            <FaInstagram className="h-7 w-7" />
            <FaTwitter className="h-7 w-7" />
          </div>
        </div>
      </div>
      <div className="bg-black text-white font-thin text-center text-2xl p-3">
        <hr />
        <h1 className="mt-3">
          Copyright © {new Date().getFullYear()}. Designed by Aditi
        </h1>
      </div>
    </>
  );
};
export default Footer;
