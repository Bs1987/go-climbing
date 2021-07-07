import React from "react";
import { useHistory } from "react-router-dom";
import "./NavButton.css"

function NavButton (props) {
  const history = useHistory();

  function handleClick () {
	history.push(props.target);
  }

  return (
   <div>
	 <button className="navButton"
			 type="button"
			 onClick={handleClick}
	 >{props.text}
	 </button>
   </div>
  );
}

export default NavButton;
