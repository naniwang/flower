import React from "react";
import {NavLink} from "react-router-dom";
import { Carousel, WingBlank } from 'antd-mobile';
import $ from "jquery";
import flower from "../img/flower.png";
import plant from "../img/plant.png";
import more from "../img/more.png";
import youyi from "../img/youyi.png";
import aiqing from "../img/aiqing.png";
import ganen from "../img/ganen.png";
import remen from "../img/remen.png";
import home from "../css/Home.module.css";
import Foot from "../components/Foot";

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data: [],
    		imgHeight: 176,
    		list:[]
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
				{/*轮播图*/}
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
			      	{/*分类*/}
			      	<div className={home.fenlei}>
			      		<ul>
			      			<li>
			      				<NavLink to="flowerList">
				      				<img src={flower} alt="鲜花"/>
				      				<p>鲜花</p>
			      				</NavLink>
			      			</li>
			      			<li>
			      				<NavLink to="/liheList">
				      				<img src={plant} alt="礼盒"/>
				      				<p>礼盒</p>
			      				</NavLink>
			      			</li>
			      			<li>
				      			<NavLink to="/yshList">
				      				<img src={flower} alt="永生花"/>
				      				<p>永生花</p>
				      			</NavLink>	
			      			</li>
			      			<li>
				      			<NavLink to="/plantList">
				      				<img src={plant} alt="绿植"/>
				      				<p>绿植花卉</p>
			      				</NavLink>
			      			</li>
			      			<li>
				      			<NavLink to="/flower">
				      				<img src={more} alt="更多"/>
				      				<p>更多分类</p>
			      				</NavLink>
			      			</li>
			      		</ul>
			      	</div>
			      	{/*分类选择*/}
			      	<div className={home.choose}>
			      		<div>
			      			<dl>
			      				<dt><NavLink to="/flowerList"><img src={aiqing} alt="爱情"/></NavLink></dt>
			      				<dd>
			      					<NavLink to="/flowerList">送恋人</NavLink>
			      					<NavLink to="/flowerList">老婆</NavLink>
			      					<NavLink to="/flowerList">送女友</NavLink>
			      					<NavLink to="/flowerList">爱人</NavLink>
			      				</dd>
			      			</dl>
			      			<dl>
			      				<dt><NavLink to="/flowerList"><img src={youyi} alt="友谊"/></NavLink></dt>
			      				<dd>
			      					<NavLink to="/flowerList">送恋人</NavLink>
			      					<NavLink to="/flowerList">老婆</NavLink>
			      					<NavLink to="/flowerList">送女友</NavLink>
			      					<NavLink to="/flowerList">爱人</NavLink>
			      				</dd>
			      			</dl>
			      		</div>
			      		<div>
			      			<dl>
			      				<dt><NavLink to="/flowerList"><img src={ganen} alt="感恩"/></NavLink></dt>
			      				<dd>
			      					<NavLink to="/flowerList">送恋人</NavLink>
			      					<NavLink to="/flowerList">老婆</NavLink>
			      					<NavLink to="/flowerList">送女友</NavLink>
			      					<NavLink to="/flowerList">爱人</NavLink>
			      				</dd>
			      			</dl>
			      			<dl>
			      				<dt><NavLink to="/flowerList"><img src={remen} alt="热门"/></NavLink></dt>
			      				<dd>
			      					<NavLink to="/flowerList">送恋人</NavLink>
			      					<NavLink to="/flowerList">老婆</NavLink>
			      					<NavLink to="/flowerList">送女友</NavLink>
			      					<NavLink to="/flowerList">爱人</NavLink>
			      				</dd>
			      			</dl>
			      		</div>
			      	</div>
			      	<div className={home.list}>
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
}
export default Home;