import React from "react";
import {NavLink} from "react-router-dom";
import $ from "jquery";
import { Icon, Grid } from 'antd-mobile';
import Foot from "../components/Foot";
import cart from "../css/Cart.module.css";
import { List, Stepper } from 'antd-mobile';

class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			cartList:[],
			val: 1,
			totalPrice:0 //计算商品总价
		}
	}
	back(){
		this.props.history.push('/home');
	}
	//更新购物车商品数量
	onChange(id,i){
		var _this=this;
    	$.ajax({
    		type:'get',
    		url:'http://jx.xuzhixiang.top/ap/api/cart-update-num.php',
    		data:{uid:10741,pid:id,pnum:_this.state.val},
    		dataType:'json',
    		success:function(data){
    			console.log(data)
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
					<h4 style={styleComponent.h4}>购物车</h4>
				</header>
				<section>
					<div style={{height:'40px',display:'flex',color:'#666',alignItems:'center',paddingLeft:'10px'}}>
						<p style={{width:'25%'}}>商品图片</p>
						<p style={{width:'60%'}}>商品信息</p>
						<p style={{width:'15%'}}>操作</p>
					</div>
					<ul className={cart.ul}>
						{
							this.state.cartList.map((item,i)=>(
								<li key={i}>
									<img src={item.pimg}/>
									<div className={cart.cen}>
										<p>{item.pdesc}</p>
								          <Stepper
								            style={{ width: '50%', minWidth: '60px',marginRight:'10px'}}
								            showNumber
								            min={1}
								            value={item.pnum}
              								onChange={this.onChange.bind(this,item.pid,i)}
								          />
										<span><i>￥</i>{item.pprice*item.pnum}</span>
									</div>
									<div onClick={this.del.bind(this,item.pid,i)}>X</div>
								</li>
							))
						}
					</ul>
					<div className={cart.ulBot}>
						<NavLink to="/home">>>继续购物</NavLink>
						<p>共{this.state.cartList.length}件商品</p>
					</div>
				</section>
				<footer>
					<div className={cart.footer}>
						<p>合计:<strong ref="zong">{this.state.totalPrice}</strong></p>
						<button>支付</button>
					</div>
				</footer>
			</div>
		)
	}
	componentDidMount(){
		var _this=this;
		//购物车商品展示
		$.ajax({
			type:"get",
			url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
			data:{id:10741},
			dataType:'json',
			async:true,
			success:function(data){
//				console.log(data.data)
				_this.setState({cartList:data.data})
			}
		});
		/*totalP(){
			var totalprice=0;
			var arr=this.state.cartList;
			arr.map((item,i)=>{
				totalprice+=item.pprice*item.pnum;
			})
			this.setState({totalPrice:totalprice})
		}
		this.totalP();*/
	}
	//删除
	del(id,i){
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/cart-delete.php',
			data:{uid:10741,pid:id},
			dataType:'json',
			success:function(data){
//				console.log(data)
				var arr=_this.state.cartList;
				arr.splice(i,1);
				_this.setState({cartList:arr})
			}
		})
	}
}
export default Cart;