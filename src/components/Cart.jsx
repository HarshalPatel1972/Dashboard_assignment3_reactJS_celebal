import React from "react";
import { MdOutlineCancel } from "react-icons/md"; // Close icon
import { useStateContext } from "../contexts/ContextProvider";

// Mock data for shopping cart items
const cartData = [
  {
    // Ice Cream image (generic placeholder)
    image:
      "https://images.unsplash.com/photo-1561230101-2c841778f9ae?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Butterscotch Ice-Cream",
    category: "Milk product",
    price: "₹250",
    quantity: 1,
  },
  {
    // Tomato image (generic placeholder)
    image:
      "https://images.unsplash.com/photo-1696087172662-65f7b09d614e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Supreme Fresh Tomato",
    category: "Vegetable Item",
    price: "₹450",
    quantity: 1,
  },
  {
    // Candy image (generic placeholder)
    image:
      "https://plus.unsplash.com/premium_photo-1673488825874-36f1403311ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Red Color Candy",
    category: "Food Item",
    price: "₹190",
    quantity: 1,
  },
];

const Cart = () => {
  const { currentColor, handleClick, setIsClicked } = useStateContext();

  // Function to close the cart popover
  const handleCloseCart = () => {
    setIsClicked({
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,
      themeSettings: false,
    });
  };

  const subTotal = cartData.reduce(
    (acc, item) => acc + parseInt(item.price.replace("₹", "")),
    0
  );

  return (
    <div className="popover-panel cart-panel">
      <div className="popover-header">
        <p className="font-semibold text-xl">Shopping Cart</p>
        <button
          type="button"
          onClick={handleCloseCart}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="close-popover-btn"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="cart-items">
        {cartData.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              className="rounded-lg w-20 h-20"
              src={item.image}
              alt={item.name}
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <div className="flex items-center mt-2">
                <p className="font-bold text-lg">{item.price}</p>
                <div className="cart-item-quantity-controls">
                  <button type="button" className="quantity-btn">
                    -
                  </button>
                  <p className="quantity-display">{item.quantity}</p>
                  <button type="button" className="quantity-btn">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-500">Sub Total</p>
          <p className="font-semibold">₹{subTotal}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500">Total</p>
          <p className="font-semibold">₹{subTotal}</p>
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className="place-order-btn"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
