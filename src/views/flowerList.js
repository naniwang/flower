import React from "react";
import {NavLink} from "react-router-dom";
import { Icon, Grid } from 'antd-mobile';
import Foot from "../components/Foot";
import $ from "jquery";
import fList from "../css/flowerList.module.css";

class flowerList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
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
				<h4 style={styleComponent.h4}>鲜花分类</h4>
			</header>
			<section>
				<div className={fList.list}>
			      		<ul>
			      			{
			      				this.state.list.map((item,i)=>(
			      					<li key={i}>
				      					<NavLink to={'/detail/'+item.pid}>
				      						<img src={item.pimg} alt="鲜花"/>
				      						<p>{item.pdesc}</p>
				      						<p style={{color:'red'}}>￥{item.pprice}</p>
			      						</NavLink>
			      					</li>
			      				))
			      			}
			      		</ul>
			      	</div>
			</section>
			<footer>
				<Foot/>
			</footer>
			</div>
		)
	}
	componentDidMount() {
		var _this=this;
		$.ajax({
			type:'get',
			url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
			data:{uid:10741},
			dataType:'json',
			success:function(data){
//				console.log(data.data)
				_this.setState({list:data.data})
			}
		})
  	}
}
export default flowerList;