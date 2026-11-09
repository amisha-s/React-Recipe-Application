import React from "react";
import { useFetch } from "./useFetch";
import RecipeCard from "../components/RecipeCard";
import Slider from "react-slick";
import { Clock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
const SlickSlider = Slider.default ?? Slider;

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log(data?.meals);
  const meals = data?.meals || [];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  console.log({ Slider, Clock, RecipeCard });
  if (loading) {
    return (
      <div className="text-center p-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );
  }

  return (
    <section className="mt-2 mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-6 h-6 text-blue-500 flex items-center " />
        <h2
          className="text-3xl font-extrabold text-gray-100 mb-6 tracking-tight border-1-4
      border-yellow-400 pl-4 flex items-center
      "
        >
          {title}
        </h2>
      </div>

      <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
        <SlickSlider {...settings}>
          {meals.map((meal) => {
            return (
              <Link to={`element/${meal.idMeal}`}>
              <div key={meal.idMeal} className="px-10 flex justify-center">
                <div
                  className="relative bg-gray-900 rounded-xl shadow-xl shadow-black/50 group
    overflow-hidden transform duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 "
                >
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/100
      transition duration-500"
                  ></div>
                  <div className="flex justify-center items-center p-5">
                    <img
                      src={meal?.strMealThumb}
                      className="h-[120px] w-[120px] rounded-xl border border-yellow-400 transition duration-500
          group-hover:scale-105"
                    ></img>
                  </div>
                 
                </div>
              </div>
              </Link>
            );
          })}
        </SlickSlider>
      </div>
    </section>
  );
};

export default TrendingSlider;
