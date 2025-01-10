// src/components/CheckoutButton.js

import React from 'react';
import { useCart } from '../Context/CartContext';

const CheckoutButton = () => {
  const { checkout, cartItems } = useCart();

  const handleCheckout = () => {
    checkout();
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={cartItems.length === 0}
      className={`mt-4 bg-green-500 text-white py-2 px-4 rounded ${
        cartItems.length === 0
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-green-600'
      }`}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
