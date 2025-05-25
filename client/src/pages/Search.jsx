"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Leftsidebar from "../components/Leftsidebar.jsx";
import FoodList from "../components/FoodList.jsx";
import { baseUrl } from "../app/constant.js";

function Search() {
  const [dataArray, setDataArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useRef(new Map());

  const debouncedSearch = useDebounce(searchValue, 500); // 👈 Use debounce

  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }

    // Update suggestions from cache
    const allTerms = [...searchCache.current.keys()];
    const filtered = allTerms.filter((term) =>
      term.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setSuggestions(filtered);

    handleFetch(debouncedSearch);
  }, [debouncedSearch]);

  const handleFetch = async (query) => {
    if (!query) return;

    if (searchCache.current.has(query)) {
      setDataArray(searchCache.current.get(query));
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/meal/${query}`);
      const data = await response.json();
      searchCache.current.set(query, data);
      setDataArray(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!searchValue) return;
    handleFetch(searchValue); // Immediate fetch on submit
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    handleFetch(suggestion);
  };

  return (
    <div className="w-full h-[100dvh] flex overflow-hidden relative pl-[180px] max-md:pl-0 max-md:pt-[60px]">
      <Navbar />
      <Leftsidebar />
      <div className="flex-grow p-10 flex flex-col items-center w-full max-md:p-2">
        <form
          className="sticky w-[90%] top-20 bg-white shadow rounded-2xl z-10"
          onSubmit={handleSubmit}
        >
          <div className="flex h-24 rounded-2xl border border-black w-full">
            <input
              type="text"
              className="w-full rounded-2xl px-10 outline-none font-body text-3xl"
              placeholder="Type here"
              value={searchValue}
              onChange={handleInputChange}
            />
            <input
              type="submit"
              value="Search"
              className="border-2 font-body text-3xl border-black text-center w-44 rounded-lg outline-none text-customgreen hover:bg-customgreen hover:text-white transition-all cursor-pointer"
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="bg-white border border-gray-300 w-full mt-2 rounded-xl shadow-md max-h-[200px] overflow-y-auto text-2xl font-body z-20">
              {suggestions.map((suggestion, idx) => (
                <li
                  key={idx}
                  className="px-6 py-3 hover:bg-customgreen hover:text-white cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </form>

        <div className="mt-20 px-5 w-full">
          <div className="flex flex-wrap gap-8 justify-center">
            <FoodList
              removebutton={false}
              title="Results"
              data={dataArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
