import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FcEmptyTrash } from "react-icons/fc";
import { removeCart, addToCart } from "../features/cartSlice";
import { toast } from "react-toastify"; // I

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);

  // Handle quantity changes
  const qtyHandler = (e, item) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      dispatch(addToCart({ ...item, qty: value - item.qty }));
    }
  };

  // Handle item removal
  const removeHandler = (id) => {
    dispatch(removeCart(id));
    toast.error("Item removed from cart");
  };

  // Function to calculate total price
  const calculateTotal = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);

   // checkout handler
   const checkoutHandler = () => {
    toast.info('Thank you....')
   }   

  return (
    <div className="container mx-auto p-6 bg-slate-300">
      <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500 text-lg">${item.price}</p>
                  <div className="flex items-center space-x-4">
                    <label className="text-gray-700 font-semibold">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => qtyHandler(e, item)}
                      min="1"
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 w-[150px]">
                <img src={item.image_url} alt={item.title} />
              </div>
              <button onClick={() => removeHandler(item.id)}>
                <FcEmptyTrash className="w-10 h-10" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartScreen;
