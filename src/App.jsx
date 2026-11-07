import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from '../src/components/Navbar'
import RecipieDetailView from '../src/components/RecipeDetailView'
import SearchView from '../src/components/SearchView'
import Cuisine from '../src/components/Cuisines';
import HomeView from '../src/components/HomeView';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";


const App=()=>{

  return(
    <>
    <BrowserRouter>
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
      <Navbar/>
      <Cuisine/>
    <Routes>
      <Route path="/" element={<HomeView/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  
  
    </>
  )
}
export default App;
