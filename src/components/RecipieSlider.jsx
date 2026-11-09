import React from 'react'
import { useFetch } from './useFetch'
import RecipeCard from "../components/RecipeCard"
import Slider from "react-slick";
import { Clock, Loader } from 'lucide-react';
const SlickSlider = Slider.default ?? Slider;

const RecipieSlider = ({title,fetchUrl}) => {
  const {data,loading,error}=useFetch(fetchUrl);
  // console.log(data?.meals)
  const meals=data?.meals || []
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  // console.log({ Slider, Clock, RecipeCard });
if(loading){
  return (
     <div className='text-center p-8 text-gray-300'>
    <Loader className='animate-spin inline-block mr-2 text-blue-400'/>
    Loading {title}...
  </div>
  )
 
}

  return (
    <section className='mt-2 mx-auto'>
      <div className='flex items-center gap-2 mb-6'>
      <Clock className='w-6 h-6 text-blue-500 flex items-center '/>
      <h2 className='text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4
      border-yellow-400 pl-4 flex items-center
      '>{title}</h2></div>
      
      <div style={{width:'90%', margin:"auto" , padding:'10px'}}>
        <SlickSlider {...settings}>
         {meals.map(meal=>{
      return <div key={meal.idMeal} className='px-10 flex justify-center'>
       <RecipeCard meal={meal}/>
      </div>
     })}
        </SlickSlider>
    
     </div>
    </section>
  )
}

export default RecipieSlider
