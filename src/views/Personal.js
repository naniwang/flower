import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid, Flex, WhiteSpace,} from 'antd-mobile';
import Foot from "../components/Foot";
import Img from "../img/11.jpg";
import bacImg from "../img/11.jpg";
import personal from "../css/Personal.module.css";

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
			},
			bac:{
				width:'100%',
				height:'200px',
				backgroundImage:`url(${bacImg})`
			}
		}
		return(
			<div className="container">
				<header>
					<Icon type="left" color="#fff" style={styleComponent.tubiao} onClick={this.back.bind(this)}/>
					<h4 style={styleComponent.h4}>个人中心</h4>
				</header>
				<section> 
						<Flex>
							<Flex.Item>
								<div style={styleComponent.bac}>
									<div>
										<i className="iconfont icon-touxiang" style={{width:'40px',height:'40px',fontSize:'40px'}}></i>
										<p></p>
									</div>
								</div>
								<div className={personal.order}>
									<ul>
										<li>
											<NavLink to="/grxx">
												<i className="iconfont icon-ziyuan"></i>
												<span>代付款</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-chulizhong"></i>
												<span>处理中</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-icon-delivery"></i>
												<span>代配送</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-quanbudingdan"></i>
												<span>全部订单</span>
											</NavLink>
										</li>
									</ul>
								</div>
								<div className={personal.orderList}>
									<ul>
										<li>
											<NavLink to="/grxx">
												<i className="iconfont icon-bianji"></i>
												<span>个人资料</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="/myflow">
												<i className="iconfont icon-icon-38"></i>
												<span>收花地址</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="/cart">
												<i className="iconfont icon-qicheqianlian-1-copy"></i>
												<span>购物车</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-youhuiquan"></i>
												<span>优惠券</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-xiaofei-copy"></i>
												<span>消费</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-wodezuji"></i>
												<span>我的足迹</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-zaixianfukuan"></i>
												<span>在线付款</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-tanhao"></i>
												<span>购物流程</span>
											</NavLink>
										</li>
										<li>
											<NavLink to="">
												<i className="iconfont icon-tanhao"></i>
												<span>常见问题</span>
											</NavLink>
										</li>
									</ul>
								</div>
							</Flex.Item> 
						</Flex>
						<WhiteSpace size="lg"/> 		
				</section>
				<footer>
					<Foot/>
				</footer>
			</div>
		)
	}
}
export default Personal;