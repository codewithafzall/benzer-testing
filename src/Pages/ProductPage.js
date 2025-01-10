// src/Pages/ProductPage.js

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useShopify from "../hooks/useShopify";

const ProductPage = () => {
  const { handle } = useParams(); // Get the product handle from the URL
  const { collections, loading, error } = useShopify(); // Fetch collections
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading && collections?.length > 0) {
      // Iterate through all collections to find the product
      for (const collection of collections) {
        const foundProduct = collection.products?.edges.find(
          (edge) => edge.node.handle.toLowerCase() === handle.toLowerCase()
        )?.node;
        if (foundProduct) {
          setProduct(foundProduct);
          break;
        }
      }
    }
  }, [handle, collections, loading]);

  // Handle loading and error states
  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error fetching product: {error.message}</p>;
  if (!product) return <p>Product not found.</p>;

  // Safely access variants and images
  const variants = product.variants?.edges || [];
  const images = product.images?.edges || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        {/* Product Images */}
        <div className="md:w-1/2">
          {images.length > 0 ? (
            <img
              src={images[0].node.src}
              alt={images[0].node.altText || product.title}
              className="w-full h-auto object-cover mb-4"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-72 bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
          {/* Additional Images */}
          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image.node.src}
                  alt={image.node.altText || `${product.title} Image ${index + 2}`}
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-6">
          <p className="mb-4">{product.description || "No description available."}</p>

          {/* Pricing */}
          <p className="text-2xl font-semibold mb-4">
            Price:{" "}
            {variants[0]?.node.priceV2.amount
              ? `${variants[0].node.priceV2.amount} ${variants[0].node.priceV2.currencyCode}`
              : "N/A"}
          </p>

          {/* Variant Selection (if multiple variants exist) */}
          {variants.length > 1 && (
            <div className="mb-4">
              <label htmlFor="variant" className="block mb-2">
                Choose Variant:
              </label>
              <select id="variant" className="border rounded p-2 w-full">
                {variants.map((variant) => (
                  <option key={variant.node.id} value={variant.node.id}>
                    {variant.node.title} -{" "}
                    {variant.node.priceV2.amount} {variant.node.priceV2.currencyCode}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
