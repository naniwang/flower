import React from "react";
import {NavLink} from "react-router-dom";

class Home extends React.Component{
	render(){
		const styleComponent={
			header:{
				fontSize:'18px',
				color:'#fff',
				lineHeight:'45px',
				paddingLeft:'20px'
			}
		}
		return(
			<div className="container">
				<header style={styleComponent.header}>花礼佳缘</header>
				<section></section>
				<footer className="foot">
					<NavLink to="/home" className="col">首页</NavLink>
					<NavLink to="/flower" className="col">鲜花分类</NavLink>
					<NavLink to="/cart" className="col">购物车</NavLink>
					<NavLink to="/personal" className="col">个人中心</NavLink>
				</footer>
			</div>
		)
	}
}
export default Home;