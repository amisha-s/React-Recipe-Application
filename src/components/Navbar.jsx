import React, { useState } from "react";
import { Search, Zap } from "lucide-react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [input,setInput]=useState();
  const handleSearch=(e)=>{
    e.preventDefault();
    console.log("Searching...");
      setInput();
    

  }

  return (
    <>
      <nav className="navbar">
        <div className=" m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to={"/"}
              className="flex items-center text-2xl font-black text-white hover:text-blue-400 transition duration :300 tracking-widest"
            >
              <Zap className="w-7 h-7 mr-2 text-yellow-400 fill-yellow-400/20" />
              <span className="text-blue-400">Pro</span>Chef
            </Link>
            <form className="flex-1 max-w-lg mx-4 hidden sm:flex" onSubmit={handleSearch}>
              <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Search dishes..., ingridents..."
                className="w-full px-5 py-2 border border-gray-700 bg-gray-900 text-gray-500 rounded-l-full focus:outline-none focus:ring-4 focus:ring-blue-600/50
                 transition duration-300 placeholder-gray-500 shadow-inner shadow-blue-50
          "
              ></input>
              <button type="submit" className="bg-linear-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-r-full
              hover:from-blue-700 hover:to-cyan-600 transition duration-300
              ">
                <Search   className="w-5 h-5 "/></button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
