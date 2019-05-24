import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import Foot from "../components/Foot";
import cart from "../css/Cart.module.css";

class Cart extends React.Component{
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
					<h4 style={styleComponent.h4}>购物车</h4>
				</header>
				<section>
				
				</section>
				<footer className={cart.foot}>
					<p>合计:<strong></strong></p>
					<button>支付</button>
				</footer>
			</div>
		)
	}
}
export default Cart;