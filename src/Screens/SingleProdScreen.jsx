import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { fetchProductByID } from "../features/singleproductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";

const SingleProdScreen = () => {
  const dispatch = useDispatch();
  const { product, error } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // add to cart
  const addCartHandler = (singleProd) => {
    dispatch(addToCart(singleProd))
    toast.success('Added to Cart')
  }

  useEffect(() => {
    dispatch(fetchProductByID(id));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id, dispatch]);
  return (
    <>
      <Link to="/products">
        <button
          className="border-2 border-red-700 font-bold text-xl
        m-3 p-2 rounded-xl"
        >
          Back
        </button>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <p> {error}</p>
      ) : (
        product.map((singleProd) => {
          return (
            <>
              <div className="bg-slate-200 grid md:grid-cols-3  ">
                <div className="w-full h-[350px]">
                  <img src={singleProd.image_url} className="h-full" />
                </div>
                <div className=" flex flex-col items-center justify-center space-y-6 p-4">
                  <h1 className="font-bold text-3xl">
                    Name:- {singleProd.name}
                  </h1>
                  <h2 className="font-thin text-2xl">
                    {singleProd.description}
                  </h2>
                  <span className="font-semibold text-lg underline">
                    {singleProd.region}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-bold text-2xl mb-3">Grind option:-</h2>
                  <ul className="border-2 rounded-md border-slate-900 md:px-[30px]">
                    {singleProd.flavor_profile.map((option, index) => (
                      <li className="font-thin text-lg p-2" key={index}>
                        * {option}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-10 flex items-center gap-10 mt-5">
                    <h1 className="font-bold text-2xl">${singleProd.price}</h1>
                    <Link to="/cart">
                      <button className="bg-indigo-600 px-6 py-2 font-bold text-md md:text-xl uppercase text-white rounded-lg" onClick={() => addCartHandler(singleProd)}>
                        add to cart{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default SingleProdScreen;
