import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
   <Link to={`/products/${product.id}`}>
     <div className="bg-slate-300 bg-opacity-30 rounded-md h-[400px] p-3 m-6  flex flex-col items-center hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150 justify-center">
      <div className="h-3/4 ">
        <img
          src={product.image_url}
          alt={product.name}
          className="object-cover rounded-t-md"
        />
      </div>
      <div className=" mt-4 w-full mb-4 text-center space-y-3">
        <h1 className="font-bold text-2xl font-serif">{product.name}</h1>
        <h2 className="font-mono text-xl underline">{product.region}</h2>
      </div>
      <div className="mb-10 flex items-center gap-10">
        <h1 className="font-bold text-2xl">${product.price}</h1>
       
      </div>
    </div>
   </Link>
  );
};
export default Card;
