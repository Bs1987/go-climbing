import React from "react";
import NavButton from "../NavButton/NavButton";
import "./TopMenu.css"

function TopMenu(props) {
  return (
   <div className="topMenuContainer">
	 <nav className="navContainer">
	   <NavButton exact target="/" text="Home" />
	   <NavButton target="signup" text="Sign up!" />
	   <NavButton target="/login" text="Login" />
	   <NavButton target="about" text="About" />
	   <NavButton target="Weather" text="Go climbing!" />
	 </nav>
   </div>
  );
}

export default TopMenu;
