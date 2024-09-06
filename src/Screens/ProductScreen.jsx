import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-x-9">
        <h1 className="text-center font-semibold text-xl mb-3">
          Search you product here:-
        </h1>
        <input
          placeholder="Search you coffee..."
          className="border-2 border-slate-500 p-2 text-xl mb-4 rounded-xl md:w-[450px]"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products
            .filter((word) => {
              return search.toLowerCase() === ""
                ? word
                : word.name.toLowerCase().includes(search);
            })
            .map((prod) => {
              return <Card key={products.id} product={prod} />;
            })}
        </div>
      )}
    </>
  );
};

export default ProductScreen;
