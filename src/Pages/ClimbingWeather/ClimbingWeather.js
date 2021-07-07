import React from "react";
import SearchButton from "../../Components/SearchButton/SearchButton";
import "./ClimbingWeather.css"


function WeatherPage(props) {
  return (
   <>
	 <div className="weather-container">
	   <div className="weather-header">
		 <h2>WeatherPage</h2>
		 <SearchButton />
	   </div>
	 </div>
   </>
  );
}

export default WeatherPage;
