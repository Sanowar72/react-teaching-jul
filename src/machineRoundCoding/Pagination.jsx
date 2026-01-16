import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "../hooks/useDebounce";
const PRODUCTS_PER_PAGE = 17;

const Pagination = () => {
  const [fetchedResults, setFetchedResults] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [searchedText, setSearchedText] = useState("");
  const debouncedSearch = useDebounce(searchedText, 300);
  const [totalPages, setTotalPages] = useState(0);
  
  const fetcheResults = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=1000");
      setFetchedResults(res.data.products);
    } catch (error) {
      console.log("handle error==>>");
    }
  };

  useEffect(() => {
    fetcheResults();
  }, []);

  useEffect(() => {
    setPageNo(0);
  }, [debouncedSearch]);

  //   const STARTING_PAGE_DATA = PRODUCTS_PER_PAGE * pageNo;
  //   const ENDING_PAGE_DATA = STARTING_PAGE_DATA + PRODUCTS_PER_PAGE;

  //   const paginatedResults = useMemo(() => {
  //     let searchedResults;
  //     if (!debouncedSearch) {
  //       searchedResults = fetchedResults;
  //     } else {
  //       searchedResults = fetchedResults.filter((product) => {
  //         return product.category
  //           .toLowerCase()
  //           .includes(debouncedSearch.toLowerCase().trim());
  //       });
  //     }
  //     return searchedResults.slice(
  //       pageNo * PRODUCTS_PER_PAGE,
  //       pageNo * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE
  //     );
  //   }, [fetchedResults, pageNo, debouncedSearch]);

  const filteredResults = useMemo(() => {
    if (!debouncedSearch) return fetchedResults;

    return fetchedResults.filter((product) =>
      product.category
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase().trim())
    );
  }, [fetchedResults, debouncedSearch]);

  const paginatedResults = useMemo(() => {
    const start = pageNo * PRODUCTS_PER_PAGE;
    return filteredResults.slice(start, start + PRODUCTS_PER_PAGE);
  }, [filteredResults, pageNo]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredResults.length / PRODUCTS_PER_PAGE));
  }, [filteredResults]);

  return (
    <>
      <input
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        type="text"
        placeholder="please type to search"
      />
      <div>
        <button
          disabled={pageNo === 0}
          onClick={() => setPageNo((pre) => pre - 1)}
        >
          pre
        </button>
        {[...new Array(totalPages).keys()].map((page) => {
          return (
            <span
              className={`page ${page == pageNo && "selected-page-no"}`}
              key={page}
              onClick={() => setPageNo(page)}
            >
              {page + 1}
            </span>
          );
        })}
        <button
          disabled={pageNo === totalPages - 1}
          onClick={() => setPageNo((pre) => pre + 1)}
        >
          next
        </button>
      </div>
      <div className="products-container">
        {paginatedResults.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};

const Card = ({ id, title, category, price, brand, rating }) => {
  return (
    <div className="products">
      <p>{title}</p>
      <p> id : {id}</p>
      <p> category : {category}</p>
      <p> brand : {brand}</p>
      <p> price : {price}</p>
      <p> rating : {rating}</p>
    </div>
  );
};

export default Pagination;
