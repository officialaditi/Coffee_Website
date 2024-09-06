import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductScreen from "./Screens/ProductScreen";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import Footer from "./Components/Footer";
import SignUpScreen from "./Screens/SignUpScreen";
import SingleProdScreen from "./Screens/SingleProdScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex flex-col mt-[70px] ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/products/:id" element={<SingleProdScreen />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
        />
      </BrowserRouter>
    </>
  );
};
export default App;
