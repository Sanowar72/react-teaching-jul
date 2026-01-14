import axios from "axios";
import React, { useEffect, useState } from "react";

const GoogleSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cachedResults, setCachedResults] = useState({});
  const [activeIndex, setActiveIndex] = useState(-1);

  const query = searchText.trim().toLowerCase();

  const fetchSearchedResults = async () => {
    if (!query) return;

    if (cachedResults[query]) {
      setSearchedResults(cachedResults[query]);
      return;
    }

    try {
      const res = await axios.get(
        `https://dummyjson.com/recipes/search?q=${query}&limit=50`
      );

      setSearchedResults(res.data.recipes);
      setCachedResults((prev) => ({
        ...prev,
        [query]: res.data.recipes,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (!searchedResults.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < searchedResults.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      setSearchText(searchedResults[activeIndex].name);
      setShowResults(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(fetchSearchedResults, 300);
    return () => clearTimeout(timeout);
  }, [query]);
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "ig");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "#ffe58f" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
          placeholder="please start typing.."
          onKeyDown={handleKeyDown}
        />
        {showResults && searchText && (
          <div className="search-results-container">
            {searchedResults.map((results, index) => (
              <p
                key={results.id}
                onMouseDown={() => setSearchText(results.name)}
                style={{
                  backgroundColor:
                    index === activeIndex ? "#eee" : "transparent",
                  padding: "6px",
                  cursor: "pointer",
                }}
              >
                {highlightText(results.name, query)}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleSearchBar;
