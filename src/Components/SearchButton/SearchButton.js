import React, {useState} from 'react';
import "./SearchButton.css"

function SearchButton (props) {
  const [climbingData, setClimbingData] = useState("");
  // console.log("WHAT IS PROPS: ", props);

  function handleClick () {
	props.setLocationHandler(climbingData);
	// console.log("Click!", query);
  }

  return (
   <span className="search-button">
      <h2>Click here to find the perfect climbing spot!</h2>

      <button
	   onClick={handleClick}
	   type="button">
        Go Climbing!
      </button>
    </span>
  );
};

export default SearchButton;