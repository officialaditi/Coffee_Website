import Carousel from "../Components/Carousel";
import NewProdCard from "../Components/NewProdCard";
import Subscription from "../Components/Subscription";
import NewProd from '../data/NewProd'

const HomeScreen = () => {
  return (
    <>
      <div className="w-full md:h-[550px] relative">
        <img src="./BG.jpg" className="md:h-full md:w-full object-cover" />

        <div className="absolute top-8 md:top-1/4 md:left-16 p-2 rounded-md ">
          <div className=" md:flex flex-col justify-center items-center p-4 rounded-md md:opacity-80 opacity-90  bg-slate-200 bg-black-2 ">
            <h1 className="font-bold md:text-4xl mb-2">
              Welcome to The Coffee Club
            </h1>
            <p className="font-bold md:text-2xl mb-2">
              Where we "Savor the flavor, share the love"
            </p>
            <button className="bg-orange-700 text-white rounded-md md:p-2 p-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-3 font-bold text-3xl">
          New Coffee Beans
        </h1>
        <div className=" grid md:grid-cols-3 md:h-[550px] space-x-5 p-4 mt-2 bg-slate-200">
          {NewProd.map((prod) => {
            return <NewProdCard productCard={prod} key={prod.id} />;
          })}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center mt-4 text-orange-800">
          Happy Customers
        </h1>
        <Carousel/>
        <Subscription/>
      </div>
    
     
    </>
  );
};
export default HomeScreen;
