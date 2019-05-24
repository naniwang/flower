import React from "react";
import {NavLink} from "react-router-dom";
import $ from "jquery";
import { Icon, Grid } from 'antd-mobile';
import detail from "../css/Detail.module.css";

class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			product:{}
		}
	}
	back(){
		this.props.history.go(-1);
	}
	purchas(id){
		this.props.history.push('/order/'+id);
	}
	componentDidMount(){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/detail.php',
			data:{id:_this.props.match.params.id},
			dataType:'json',
			success:function(data){
//				console.log(data.data)
				_this.setState({product:data.data})
			}
		})
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
				<section className={detail.sec}>
					<img src={this.state.product.pimg}/>
					<div className={detail.desc}>
						<p>{this.state.product.pdesc}</p>
						<button className={detail.buy}>立即购买</button>
					</div>
					<div className={detail.price}><i>￥</i>{this.state.product.pprice}<span>市场价￥{this.state.product.pprice*2}</span></div>
					<div className={detail.about}>
						<p><strong>鲜花花材: </strong>{this.state.product.pdesc}</p>
						<p><strong>鲜花花语: </strong>事业如日中天，恋人亲密无间，薪水成千上万，快乐无际无边，烦恼消散如烟，逍遥胜似神仙。</p>
					</div>
				</section>
				<footer className={detail.foot}>
					<button className={detail.collect}>收藏</button>
					<button className={detail.cart} onClick={this.cart.bind(this)}>购物车</button>
					<button className={detail.addCart} onClick={this.addCart.bind(this)}>加入购物车</button>
					<button className={detail.purchas} onClick={this.purchas.bind(this,this.state.product.pid)}>立即购买</button>
				</footer>
			</div>
		)
	}
	cart(){
		this.props.history.push("/cart");
	}
	addCart(){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/add-product.php',
			data:{uid:10741,pid:_this.props.match.params.id,pnum:1},
			dataType:'json',
			success:function(data){
//				console.log(data)
			}
		})
	}
}
export default Detail;