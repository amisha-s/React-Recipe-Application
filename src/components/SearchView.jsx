import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft,Loader } from 'lucide-react'
import RecipeCard from './RecipeCard'

const SearchView = ({meal,loading}) => {
  // console.log(meal)
  return (
   <>
    <main className="m-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to={"/"}
        className="text-yellow-400 hover:text-yellow-300 flex items-center mb-6 font-medium tranition text-lg group"
      >
        <ChevronLeft className="w-6 h-6 m-1 transition " />
        Back to Dashboard
      </Link>
      {loading && <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Searching the database...
      </div> }

      {!loading && meal?.length > 0 && (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-12 '>
       {meal.map((meal,index)=><RecipeCard key={index} meal={meal}/>)}

      </div>)} 
      </main>
   </>
  )
}

export default SearchView

