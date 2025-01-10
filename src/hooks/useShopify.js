import { useState, useEffect } from "react";

const SHOPIFY_STORE_URL = "https://benzerworld.myshopify.com/api/2023-01/graphql.json"; // Replace with your store's GraphQL endpoint
const STOREFRONT_ACCESS_TOKEN = "c822247973015ae73c0094d211a01f71"; // Replace with your Storefront API Access Token

const useShopify = () => {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShopifyData = async () => {
    setLoading(true);
    try {
      const query = `
        {
          products(first: 20) {
            edges {
              node {
                id
                title
                handle
                description
                images(first: 10) {
                  edges {
                    node {
                      src
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      priceV2 {
                        amount
                        currencyCode
                      }
                      availableForSale
                      selectedOptions {
                        name
                        value
                      }
                    }
                  }
                }
              }
            }
          }
          collections(first: 10) {
            edges {
              node {
                id
                title
                description
                handle
                products(first: 5) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      images(first: 1) {
                        edges {
                          node {
                            src
                          }
                        }
                      }
                      variants(first: 10) {
                        edges {
                          node {
                            id
                            priceV2 {
                              amount
                              currencyCode
                            }
                            availableForSale
                            selectedOptions {
                              name
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;
      
      const response = await fetch(SHOPIFY_STORE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      if (response.ok) {
        setProducts(result.data.products.edges.map((edge) => edge.node));
        setCollections(result.data.collections.edges.map((edge) => edge.node));
      } else {
        throw new Error(result.errors ? result.errors[0].message : "Failed to fetch data");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopifyData();
  }, []);

  return {
    products,
    collections,
    loading,
    error
  };
};

export default useShopify;
