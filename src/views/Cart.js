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
		this.props.history.go(-1);
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
			},
			jia:{
				width:"20px",height:"20px",display:"block",float:"left",lineHeight:"20px",textAlign:"center",border:"1px solid #cecece"
			},
			jian:{
				width:"20px",height:"20px",lineHeight:"20px",display:"block",float:"left",textAlign:"center",border:"1px solid #cecece"
			},
			num:{
				width:"40px",height:"20px",float:"left",lineHeight:"20px",textAlign:"center",border:"none",border:"1px solid #cecece"
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
										<div style={{float:"left",marginRight:'10px'}}>
									        <span style={styleComponent.jian} onClick={(e)=>{this.jian(e,item.id,i)}}>-</span>
											<input style={styleComponent.num} type="number" value={item.pnum} ref="val" />
											<span style={styleComponent.jia} onClick={(e)=>{this.add(e,item.pid,i)}}>+</span>
										</div>
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
						<p>合计:￥<strong ref="zong">{this.state.totalPrice}</strong></p>
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
				_this.SumPrice()
			}
		});
	}
	//减
	jian=(e,id,i)=> {
        this.setState({
            arr: this.state.cartList.map((ele, index) => {
                if (index == i) {
                    if(ele.pnum<=1){
                        ele.pnum = 1
                        return ele
                    }else{
                        ele.pnum = ele.pnum*1-1
                        $.ajax({
                        	type:"get",
                        	url:"http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                        	data:{uid:10741,pid:id,pnum:ele.pnum},
                        	async:true,
                        	dataType:'json',
                        	success:function(data){
                        		return ele
                        	}
                        });
                    }
                } else {
                    return ele
                }
            })
        })
        this.SumPrice()
    }
	//加
	add=(e,id,i)=>{
        this.setState({
            arr:this.state.cartList.map((ele,index)=>{
                if(index==i){
                    ele.pnum=ele.pnum*1+1
                    $.ajax({
                        	type:"get",
                        	url:"http://jx.xuzhixiang.top/ap/api/cart-update-num.php",
                        	data:{uid:10741,pid:id,pnum:ele.pnum},
                        	async:true,
                        	dataType:'json',
                        	success:function(data){
                        		console.log(ele.pnum)
                        		return ele
                        	}
                        });
                }else {
                    return ele
                }
            })
        })
        this.SumPrice()
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
				_this.SumPrice()
			}
		})
	}
	//计算总价
	 SumPrice=()=>{
        var sum=0
        this.state.cartList.forEach((ele,index)=>{
            sum+=ele.pnum*ele.pprice
        })
        this.setState({
            totalPrice:sum
        })
    }
}
export default Cart;