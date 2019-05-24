import React from "react";
import {HashRouter as Router,Route,Switch,NavLink} from "react-router-dom";

//name 为要获取商品值的商品名或id名
function getCookie(name) {
	var str = document.cookie //获取cookie数据 字符串形式   productId=1001; username=myself
	var arr = str.split("; ") //将字符串以（; ）隔开转化为数组  [productId=1001,username=myself]
	for(var i = 0; i < arr.length; i++) { //arr[i]   productId=1001和username=myself
		var arr1 = arr[i].split("="); //arr1 = [ productId,1001] 和 [username,myself]
		if(arr1[0] == name) {
			return arr1[1];
		}
	}
}
class Foot extends React.Component{
	constructor(props){
		super(props)
		this.state={
			val:null
		}
	}
	render(){
		return(
			<div className="foot">
				<NavLink to="/home" className="col">首页</NavLink>
				<NavLink to="/flower" className="col">鲜花分类</NavLink>
				<NavLink to="/cart" className="col">购物车</NavLink>
				<NavLink to={this.state.val} className="col">个人中心</NavLink>
			</div>
		)
	}
	componentWillMount(){
		if(getCookie('username')== undefined){
			this.setState({val:"/login"})
		} else {
			this.setState({val:"/personal"})
		}
	}
}
export default Foot;