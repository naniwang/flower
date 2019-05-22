import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';

class Personal extends React.Component{
	back(){
		this.props.history.push('/home');
	}
	render(){
		const styleComponent={
			tubiao:{
				position:'absolute',
				left:'7px',
				top:'7px',
				height:'35px',
				width:'40px'
			},
			h4:{
				textAlign:'center',
				lineHeight:'45px',
				fontSize:'16px',
				color:'#fff'
			}
		}
		return(
			<div className="container">
				<header>
					<Icon type="left" color="#fff" style={styleComponent.tubiao} onClick={this.back.bind(this)}/>
					<h4 style={styleComponent.h4}>个人中心</h4>
				</header>
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
export default Personal;