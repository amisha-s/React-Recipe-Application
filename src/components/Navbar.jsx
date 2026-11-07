import React from 'react'
import {Search,Zap} from 'lucide-react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <div className=' m-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center h-16'>
        <Link to={"/"} className='flex items-center text-2xl font-black text-white hover:text-blue-400 transition duration :300 tracking-widest'>
        <Zap className='w-7 h-7 mr-2 text-yellow-400 fill-yellow-400/20'/>
        <span className='text-blue-400'>Pro</span>Chef
        </Link>
      </div>
       
      </div>
   
    </nav>
    </>
  )
}

export default Navbar
