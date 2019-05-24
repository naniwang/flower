import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid, Flex, WhiteSpace,} from 'antd-mobile';
import Foot from "../components/Foot";
import Img from "../img/11.jpg"

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
				<section> 
						<Flex>
							<Flex.Item>
								<img style={{width:'100%',height:'230px'}} src={Img}/>
								<div>
								
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