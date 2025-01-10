import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useShopify from "../hooks/useShopify";
import { useCart } from "../Context/CartContext"; // Import the useCart hook

const ProductPage = () => {
  const { handle } = useParams();
  const { products, loading, error } = useShopify();
  const [product, setProduct] = useState(null);

  // State for selected options
  const [selectedSize, setSelectedSize] = useState(null);

  // Access cart actions
  const { addToCart } = useCart();

  useEffect(() => {
    if (!loading && products?.length > 0) {
      const currentProduct = products.find(
        (prod) => prod.handle.toLowerCase() === handle.toLowerCase()
      );
      setProduct(currentProduct);
    }
  }, [handle, products, loading]);

  console.log(product);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error fetching product: {error.message}</p>;
  if (!product) return <p>Product not found.</p>;

  const { title, description, images, variants } = product;
  const productImage = images?.edges[0]?.node?.src;
  const productPrice = variants?.edges?.[0]?.node?.priceV2.amount;
  const productCurrency = variants?.edges?.[0]?.node?.priceV2.currencyCode;
  const productAvailability = variants?.edges?.[0]?.node?.availableForSale;

  // Extract sizes
  const sizes = [];

  variants.edges.forEach((variant) => {
    variant.node.selectedOptions.forEach((option) => {
      if (option.name.toLowerCase() === "size") {
        sizes.push(option.value);
      }
    });
  });

  const uniqueSizes = [...new Set(sizes)];

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    // Find the variant that matches the selected size
    const selectedVariant = variants.edges.find((variant) => {
      const sizeOption = variant.node.selectedOptions.find(
        (option) => option.name.toLowerCase() === "size"
      );

      return sizeOption?.value === selectedSize;
    });

    if (!selectedVariant) {
      alert("Selected variant not available.");
      return;
    }

    // Prepare the item to add to the cart
    const cartItem = {
      id: selectedVariant.node.id,
      title: title,
      price: selectedVariant.node.priceV2.amount,
      currency: selectedVariant.node.priceV2.currencyCode,
      image: images.edges[0].node.src, // Adjust if variants have specific images
      selectedSize: selectedSize,
    };

    addToCart(cartItem);
    alert("Item added to cart!");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-contain"
                src={productImage}
                alt="Product"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {description}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  {productPrice} {productCurrency}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  {productAvailability ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
            {/* Removed Color Selection */}
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Select Size:
              </span>
              <div className="flex items-center mt-2">
                {uniqueSizes.length > 0 ? (
                  uniqueSizes.map((size) => (
                    <button
                      key={size}
                      className={`py-2 px-4 rounded-full font-bold mr-2 ${
                        selectedSize === size
                          ? "bg-gray-600 dark:bg-gray-300 text-white dark:text-gray-800"
                          : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))
                ) : (
                  <p>No size options available.</p>
                )}
              </div>
            </div>
            <div className="flex -mx-2 mt-10">
              <div className="w-1/2 px-2">
                <button
                  className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  disabled={!selectedSize}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
            {/* Optional: Display selected options */}
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300">
                Selected Size: {selectedSize || "None"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
