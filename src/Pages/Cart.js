// src/components/Cart.js

import React from 'react';
import { useCart } from '../Context/CartContext';
import CheckoutButton from '../Components/CheckoutButton';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={generateCartItemId(item)} className="flex items-center mb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Size: {item.selectedSize}</p>
                  <p className="text-gray-600 dark:text-gray-300">Price: {item.price} {item.currency}</p>
                  <p className="text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Total: {totalAmount.toFixed(2)} {cartItems[0].currency}</h3>
            <CheckoutButton />
            <button
              onClick={clearCart}
              className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Utility function to generate a unique ID for each cart item
const generateCartItemId = (item) => {
  return `${item.id}-${item.selectedSize}`;
};

export default Cart;
