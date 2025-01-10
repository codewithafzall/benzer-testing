// src/Pages/CollectionPage.js

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams and Link
import useShopify from "../hooks/useShopify"; // Custom hook for fetching collections

const CollectionPage = () => {
  const { handle } = useParams(); // Get the handle from the URL
  const { collections, loading, error } = useShopify(); // Use the custom hook to fetch collections
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (!loading && collections?.length > 0) {
      // Case-insensitive matching
      const currentCollection = collections.find(
        (col) => col.handle.toLowerCase() === handle.toLowerCase()
      );
      setCollection(currentCollection);
    }
  }, [handle, collections, loading]); // Trigger this when the handle, collections, or loading state changes

  // Handle loading and error states
  if (loading) return <p>Loading collection...</p>;
  if (error) return <p>Error fetching collection: {error.message}</p>;
  if (!collection) return <p>Collection not found.</p>;

  // Safely access products and edges, defaulting to empty array
  const products = collection.products?.edges || [];
  if (products.length === 0) {
    return <p>No products available in this collection.</p>;
  }
  console.log(products);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{collection.title}</h1>
      <p className="mb-6">
        {collection.description || "No description available."}
      </p>

      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ node: product }) => (
          <li key={product.id} className="border rounded-lg p-4">
            <Link to={`/products/${product.handle}`} className="block">
              <h3 className="text-xl font-medium">{product.title}</h3>
              <p className="text-gray-600 mb-2">
                {product.description || "No description available."}
              </p>
              {product.images?.edges?.length > 0 ? (
                <img
                  src={product.images.edges[0].node.src}
                  alt={product.images.edges[0].node.altText || product.title}
                  className="w-full h-72 object-cover mb-2"
                  loading="lazy" // Enhances performance by lazy loading images
                />
              ) : (
                <div className="w-full aspect-square object-contain bg-gray-200 flex items-center justify-center mb-2">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
              <p className="font-semibold">
                Price:{" "}
                {product.variants?.edges?.[0]?.node.priceV2.amount || "N/A"}{" "}
                {product.variants?.edges?.[0]?.node.priceV2.currencyCode || ""}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;
