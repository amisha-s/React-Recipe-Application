import React, { useCallback, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import RecipieDetailView from "../src/components/RecipeDetailView";
import SearchView from "../src/components/SearchView";
import Cuisine from "../src/components/Cuisines";
import HomeView from "../src/components/HomeView";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import CategorySelection from "./components/CategorySelection";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchArea, setSearchArea] = useState([]);

  const handleSearch = useCallback(async (query) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const response = await fetch(`${API_URL}search.php?s=${query}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const res = await response.json();
      setSearchResult(res?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);
  const filterRecipie = useCallback(async (area, filterType) => {
    setSearchResult([]);
    setSearchLoading(true);
    try {
      const response = await fetch(`${API_URL}filter.php?${filterType}=${area}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const res = await response.json();
      setSearchResult(res?.meals || []);
      console.log(setSearchArea);
    } catch (e) {
      console.log(e);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const filterByCategory=useCallback(((category)=>{
    filterRecipie(category,"c")
  }),[filterRecipie])

    const filterByArea=useCallback(((area)=>{
    filterRecipie(area,"a")
  }),[filterRecipie])

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <Navbar handleSearch={handleSearch} />
          <Cuisine filterByArea={filterByArea} />
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="/element/:id" element={<RecipieDetailView />}></Route>
            <Route
              path="/search/:query"
              element={
                <SearchView meal={searchResult} loading={searchLoading} />
              }
            ></Route>
           
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
