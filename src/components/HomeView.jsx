import React from "react";
import RecipieSLider from "../components/RecipieSlider";
import TrendingRecipie from "../components/TrendingRecipie";
import CategorySelection from "../components/CategorySelection";
import { API_URL } from "../components/useFetch";

const HomeView = () => {
  return (
    <>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipieSLider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
        <TrendingRecipie
          title="Quick and Easy Meals"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />
        <CategorySelection />
      </div>
    </>
  );
};

export default HomeView;
