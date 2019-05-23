import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';

class Detail extends React.Component{
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
					<h4 style={styleComponent.h4}>产品详情</h4>
				</header>
				<section></section>
				<footer>
					<button></button>
				</footer>
			</div>
		)
	}
}
export default Detail;