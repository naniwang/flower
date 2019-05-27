import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import Foot from "../components/Foot";

class liheList extends React.Component{
	back(){
		this.props.history.go(-1);
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
				<h4 style={styleComponent.h4}>礼盒分类</h4>
			</header>
			<section></section>
			<footer>
				<Foot/>
			</footer>
			</div>
		)
	}
}
export default liheList;