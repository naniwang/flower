import React from "react";
import {NavLink} from "react-router-dom";
import { Carousel, WingBlank } from 'antd-mobile';
import $ from "jquery";
import flower from "../img/flower.png";
import plant from "../img/plant.png";
import more from "../img/more.png";
import home from "../css/Home.module.css";

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data: [],
    		imgHeight: 176,
		}
	}
	componentDidMount() {
		var _this=this;
		$.ajax({
			type:"get",
			url:" http://jx.xuzhixiang.top/ap/api/bannerlist.php",
			data:{uid:1153},
			dataType:'json',
			async:true,
			success:function(data){
//				console.log(data.data.slice(0,4))
				setTimeout(() => {
			      _this.setState({data:data.data.slice(0,4)});
			    }, 100);
			}
		});
  	}
	render(){
		const styleComponent={
			header:{
				fontSize:'18px',
				color:'#fff',
				lineHeight:'45px',
				paddingLeft:'20px'
			}
		}
		return(
			<div className="container">
				<header style={styleComponent.header}>花礼佳缘</header>
				<section>
				 	<WingBlank>
				        <Carousel className="space-carousel"
				          frameOverflow="hidden"
				          dots={true}
				          autoplay
				          infinite
				        >
			          	{this.state.data.map((val, index) => (
				            <a
				              key={val}
				              href="http://www.alipay.com"
				              style={{
				                display: 'block',
				                position: 'relative',
				                top: this.state.slideIndex === index ? -10 : 0,
				                height: this.state.imgHeight,
				                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
				              }}
				            >
				              <img
				                src={val.banner_img_url}
				                alt=""
				                style={{ width: '100%', verticalAlign: 'top' ,height:'180px'}}
				                onLoad={() => {
				                  // fire window resize event to change height
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({ imgHeight: 'auto' });
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
			      	</WingBlank>
			      	<div className={home.fenlei}>
			      		<ul>
			      			<li>
			      				<NavLink to="flowerList">
				      				<img src={flower}/>
				      				<p>鲜花</p>
			      				</NavLink>
			      			</li>
			      			<li>
			      				<NavLink to="/liheList">
				      				<img src={plant}/>
				      				<p>礼盒</p>
			      				</NavLink>
			      			</li>
			      			<li>
				      			<NavLink to="/yshList">
				      				<img src={flower}/>
				      				<p>永生花</p>
				      			</NavLink>	
			      			</li>
			      			<li>
				      			<NavLink to="/plantList">
				      				<img src={plant}/>
				      				<p>绿植花卉</p>
			      				</NavLink>
			      			</li>
			      			<li>
				      			<NavLink to="/flower">
				      				<img src={more}/>
				      				<p>更多分类</p>
			      				</NavLink>
			      			</li>
			      		</ul>
			      	</div>
				</section>
				<footer className="foot">
					<NavLink to="/home" className="col">首页</NavLink>
					<NavLink to="/flower" className="col">鲜花分类</NavLink>
					<NavLink to="/cart" className="col">购物车</NavLink>
					<NavLink to="/personal" className="col">个人中心</NavLink>
				</footer>
			</div>
		)
	}
}
export default Home;