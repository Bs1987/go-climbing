import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from "./Components/TopMenu/TopMenu";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import SignUp from "./Pages/SignUp/SignUp";
import WeatherPage from "./Pages/ClimbingWeather/ClimbingWeather";


function App() {
  return (
   <Router>
     <div className="container">
       <TopMenu />

       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/signup">
           <SignUp />
         </Route>
         <Route path="/weather">
           <WeatherPage />
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
