import React from 'react';
import './App.css';
import {Route,HashRouter as Router,Switch,Redirect} from "react-router-dom";
import Home from "./views/Home";
import Flower from "./views/Flower";
import Cart from "./views/Cart";
import Personal from "./views/Personal";

function App() {
  return (
    <div className="App">
    	<Router>
	    	<div>
		    	<Switch>
		    		<Route path="/home" component={Home}></Route>
		    		<Route path="/flower" component={Flower}></Route>
		    		<Route path="/cart" component={Cart}></Route>
		    		<Route path="/personal" component={Personal}></Route>
		    		<Redirect to="/home"/>
	    		</Switch>
    		</div>
    	</Router>
    </div>
  );
}

export default App;
