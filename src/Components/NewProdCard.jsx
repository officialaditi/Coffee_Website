const NewProdCard = ({ productCard }) => {
  return (
    <>
      <div className="text-center h-3/4 mt-3 font-bold text-2xl">
        <img
          src={productCard.img}
          alt={productCard.name}
          className=" h-full w-full object-cover rounded-2xl"
        />
        <h1>{productCard.name}</h1>
        <span>${productCard.price}</span>
        
      </div>
    </>
  );
};
export default NewProdCard;
