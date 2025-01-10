// src/contexts/CartContext.js

import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { GraphQLClient, gql } from 'graphql-request';

// Create the context
const CartContext = createContext();

// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

// Initial state
const initialState = {
  cartItems: [],
};

// Function to generate a unique identifier for a cart item
const generateCartItemId = (item) => {
  return `${item.id}-${item.selectedSize}`;
};

// Reducer function to handle state changes based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.id === action.payload.id &&
          cartItem.selectedSize === action.payload.selectedSize
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedCart };
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => generateCartItemId(cartItem) !== action.payload
        ),
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

// Function to get initial state from localStorage
const getInitialState = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : initialState;
};

// Cart Provider component with localStorage integration
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {}, getInitialState);

  // Action creators
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (item) => {
    const itemId = generateCartItemId(item);
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Shopify Storefront API details from environment variables
  const SHOPIFY_STORE_URL = "https://benzerworld.myshopify.com/api/2023-01/graphql.json"; // e.g., 'https://benzerworld.myshopify.com/api/2023-01/graphql.json'
  const STOREFRONT_ACCESS_TOKEN = "c822247973015ae73c0094d211a01f71"; // e.g., 'c822247973015ae73c0094d211a01f71'

  // Initialize GraphQL Client
  const graphQLClient = new GraphQLClient(SHOPIFY_STORE_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    },
  });

  // Function to create a checkout and redirect the user
  const checkout = async () => {
    if (state.cartItems.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    // Construct line items for the checkout
    const lineItems = state.cartItems.map((item) => ({
      variantId: item.id,
      quantity: item.quantity,
      customAttributes: [
        { key: 'Size', value: item.selectedSize }
      ],
    }));

    // GraphQL mutation to create a checkout
    const CREATE_CHECKOUT = gql`
      mutation CheckoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    try {
      const variables = {
        input: {
          lineItems: lineItems,
        },
      };

      const data = await graphQLClient.request(CREATE_CHECKOUT, variables);

      const { checkout, checkoutUserErrors } = data.checkoutCreate;

      if (checkoutUserErrors.length > 0) {
        // Handle errors (e.g., out of stock)
        console.error(checkoutUserErrors);
        alert('There was an issue creating your checkout. Please try again.');
        return;
      }

      // Redirect the user to the Shopify checkout page
      window.location.href = checkout.webUrl;
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  // Sync cart state with localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        checkout, // Expose the checkout function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = () => {
  return useContext(CartContext);
};
