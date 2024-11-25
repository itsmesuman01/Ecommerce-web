import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const {
    cartItems,
    subproduct_list,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);

  return (
    <div className="cart mt-24">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-4" />
        {subproduct_list.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item flex items-center space-x-4 my-2 text-black">
                  <img src={item.image} alt={item.name} className="w-12" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer text-red-500"
                  >
                    x
                  </p>
                </div>
                <hr className="my-4" />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom mt-20 flex justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex flex-col gap-5 flex-1">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-gray-600">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr className="my-4" />
            <div className="cart-total-details flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr className="my-4" />
            <div className="cart-total-details flex justify-between text-gray-600 font-bold">
              <p>Total</p>
              <p>{getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white py-3 rounded-md w-[max(15vw,200px)]">
            PROCEED
          </button>
        </div>

        <div className="cart-promocode flex-1">
          <div>
            <p className="text-gray-600">If you have promo code enter here</p>
            <div className="cart-promocode-input mt-4 flex justify-between items-center bg-gray-200 rounded-md p-2">
              <input
                type="text"
                placeholder="Enter your promo code"
                className="bg-transparent border-none outline-none pl-2"
              />
              <button className="bg-black text-white px-4 py-3 rounded-md w-[max(10vw,150px)]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
