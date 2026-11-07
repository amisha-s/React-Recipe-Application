import React from 'react'
import { useFetch } from './useFetch'
import RecipeCard from "../components/RecipeCard"

const RecipieSlider = ({title,fetchUrl}) => {
  const {data,loading,error}=useFetch(fetchUrl);
  console.log(data?.meals)
  const meals=data?.meals || []
  return (
    <div>
     {meals.map(meal=>{
      return <div key={meal.idMeal} className='px-10 flex justify-center'>
       <RecipeCard meal={meal}/>
      </div>
     })}
    </div>
  )
}

export default RecipieSlider
