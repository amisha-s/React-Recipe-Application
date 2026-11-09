import React, { useCallback, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import RecipieDetailView from '../src/components/RecipeDetailView'
import SearchView from '../src/components/SearchView'
import Cuisine from '../src/components/Cuisines';
import HomeView from '../src/components/HomeView';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const API_URL="https://www.themealdb.com/api/json/v1/1/";


const App=()=>{
  const [searchResult,setSearchResult]=useState([]);
  const [searchLoading,setSearchLoading]=useState(false);

  const handleSearch=useCallback(async(query)=>{
    setSearchResult([]);
    setSearchLoading(true);
    try {
        const response = await fetch(`${API_URL}search.php?s=${query}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const res=await response.json();
        setSearchResult(res?.meals || []);
      } catch (error) {
       console.log(error)
      } finally {
        setSearchLoading(false);
      }





  },[])
  return(
    <>
    <BrowserRouter>
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
      <Navbar handleSearch={handleSearch}/>
      <Cuisine/>
    <Routes>
      <Route path="/" element={<HomeView/>}></Route>
       <Route path="/element/:id" element={<RecipieDetailView/>}></Route>
       <Route path="/search/:query" element={<SearchView meal={searchResult} loading={searchLoading}/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  
  
    </>
  )
}
export default App;
