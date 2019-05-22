import React from "react";
import {HashRouter as Router,Route,Switch,NavLink} from "react-router-dom";

class Foot extends React.Component{
	render(){
		return(
			<div>
				<Router>
					<Switch>
						<NavLink to="/home" className="col">首页</NavLink>
						<NavLink to="/flower" className="col">鲜花分类</NavLink>
						<NavLink to="/cart" className="col">购物车</NavLink>
						<NavLink to="/personal" className="col">个人中心</NavLink>
					</Switch>
				</Router>
			</div>
		)
	}
}
export default Foot;