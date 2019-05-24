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
import Login from "./views/login";
import Register from "./views/register";
import phoneLogin from "./views/phoneLogin";
import forgetPassword from "./views/forgetpassword";
import Grxx from "./views/grxx"
import Grzl from "./views/grzl"
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
						{/* 登陆注册路由 */}
						<Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/phoneLogin" component={phoneLogin}/>
            <Route path="/forgetpassword" component={forgetPassword}/>
						<Route path="/grxx" component={Grxx}/>
						<Route path="/grzl" component={Grzl}/>
		    		<Redirect to="/home"/>
	    		</Switch>
    		</div>
    	</Router>
    </div>
  );
}

export default App;
