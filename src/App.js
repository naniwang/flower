import React from 'react';
import './App.css';
import {Route,HashRouter as Router,Switch,Redirect} from "react-router-dom";
import 'antd-mobile/lib/date-picker/style/css';
import Home from "./views/Home";
import Flower from "./views/Flower";
import Cart from "./views/Cart";
import Personal from "./views/Personal";
import flowerList from "./views/flowerList";
import liheList from "./views/liheList";
import yshList from "./views/yshList";
import plantList from "./views/plantList";

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
		    		<Route path="/flowerList" component={flowerList}></Route>
		    		<Route path="/liheList" component={liheList}></Route>
		    		<Route path="/yshList" component={yshList}></Route>
		    		<Route path="/plantList" component={plantList}></Route>
		    		<Redirect to="/home"/>
	    		</Switch>
    		</div>
    	</Router>
    </div>
  );
}

export default App;
