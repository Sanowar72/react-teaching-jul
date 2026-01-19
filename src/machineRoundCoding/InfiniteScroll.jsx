import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const LIMIT = 10;

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Refs to avoid stale closures in scroll handler
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  // Keep refs in sync with state
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  const fetchProducts = async () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    loadingRef.current = true;
    setLoading(true);

    try {
      const skip = (page - 1) * LIMIT;

      const res = await axios.get(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      const newProducts = res.data.products;

      setProducts((prev) => [...prev, ...newProducts]);
      setHasMore(newProducts.length === LIMIT);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  };

  // Fetch when page changes
  useEffect(() => {
    fetchProducts();
  }, [page]);

  // Scroll handler (pure + ref-based)
  const handleScroll = () => {
    if (loadingRef.current || !hasMoreRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
      setPage((prev) => prev + 1);
    }
  };

  // Attach scroll listener once
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="products-container infinite-scroll">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {!hasMore && <p style={{ textAlign: "center" }}>No more products</p>}
    </>
  );
};

// const InfiniteScroll = () => {
//   const [products, setProducts] = useState([]);
//   const pageRef = useRef(1);
//   const loadingRef = useRef(false);
//   const hasMoreRef = useRef(true);

//   const fetchProducts = async () => {
//     if (loadingRef.current || !hasMoreRef.current) return;

//     loadingRef.current = true;

//     const skip = (pageRef.current - 1) * 10;

//     const res = await axios.get(
//       `https://dummyjson.com/products?limit=10&skip=${skip}`
//     );

//     const newProducts = res.data.products;

//     setProducts((prev) => [...prev, ...newProducts]);
//     hasMoreRef.current = newProducts.length === 10;
//     loadingRef.current = false;
//     pageRef.current += 1;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (loadingRef.current || !hasMoreRef.current) return;

//       const { scrollTop, scrollHeight, clientHeight } =
//         document.documentElement;

//       if (scrollTop + clientHeight >= scrollHeight - 100) {
//         fetchProducts();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   console.log(document.documentElement);

//   return (
//     <div className="products-container infinite-scroll">
//       {products.map((product) => (
//         <Card key={product.id} {...product} />
//       ))}
//     </div>
//   );
// };

const Card = ({ title, category, price, brand, rating }) => {
  return (
    <div className="products">
      <p>{title}</p>
      <p>category: {category}</p>
      <p>brand: {brand}</p>
      <p>price: {price}</p>
      <p>rating: {rating}</p>
    </div>
  );
};

export default InfiniteScroll;
