import React from "react";
import {NavLink,Link} from "react-router-dom";
import { Icon, Grid,WingBlank ,Flex} from 'antd-mobile';
import Foot from "../components/Foot";
import flower from "../img/flower.png";
import plant from "../img/plant.png";
import Flo from "../css/Flower.module.css";

class Flower extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
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
					<h4 style={styleComponent.h4}>全部分类</h4>
				</header>
				<section>


					<WingBlank style={{padding:"30px 25px 20px 25px",margin:"0"}}>
						<Flex>
							<Flex.Item>
								<NavLink to="flowerList">
									<img src={flower} alt="鲜花"/>
									<p style={{padding:"5px 0 0 5px"}}>鲜花</p>
								</NavLink>
							</Flex.Item>
							<Flex.Item>
								<NavLink to="/liheList">
									<img src={plant} alt="礼盒"/>
									<p style={{padding:"5px 0 0 3px"}}>礼盒</p>
								</NavLink>
							</Flex.Item>
							<Flex.Item>
								<NavLink to="/yshList">
									<img src={flower} alt="永生花"/>
									<p style={{padding:"5px 0 0 3px"}}>永生花</p>
								</NavLink>
							</Flex.Item>
							<Flex.Item>
								<NavLink to="/plantList">
									<img style={{float:"right"}} src={plant} alt="绿植"/>
									<p style={{padding:"5px 0 0 0",float:"right"}}>绿植花卉</p>
								</NavLink>
							</Flex.Item>
						</Flex> 
					</WingBlank>


					<WingBlank> 
							<Flex className={Flo.sp} style={{marginBottom:"15px",borderBottom:"1px solid #cecece"}}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>鲜花</h4>
								</Flex.Item>
							</Flex>

							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按用途选花</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">爱情鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">友情鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">生日鲜花</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">问候长辈</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">回报老师</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">祝福祝贺</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">婚庆鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">探病慰问</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">生子祝贺</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">道歉鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">家具鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">哀思鲜花</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"red"}} to="/flowerList">开业花篮</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">会议鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">礼仪鲜花</Link></Flex.Item>
							</Flex>   



							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按花材选购</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
							<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">红玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">粉玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">白玫瑰</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
							<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">香槟玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">紫玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">蓝玫瑰</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">黄玫瑰</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">康乃馨</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">郁金香</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">百合</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">扶郎</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">马蹄莲</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">向日葵</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">绣球</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">枯梗</Link></Flex.Item>
							</Flex> 



							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按颜色</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>红色</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>粉色</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>白色</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>黄色</Link></Flex.Item> 
								<Flex.Item></Flex.Item> 
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>紫色</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>111</span>蓝色</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList"><span>11</span>浅黄色</Link></Flex.Item> 
								<Flex.Item></Flex.Item> 
								<Flex.Item></Flex.Item> 
							</Flex> 



							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按支数</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">9枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">11枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">12枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">13枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">16枝</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">19枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">21枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">29枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">33枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">36枝</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">50枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">66枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">99枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">365枝</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div> 
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">666枝以上</Link></Flex.Item>
							</Flex>  



							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按价格</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">199元以下</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">200-399元</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">400-599元</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								
							</Flex> 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">600-999元</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">1000-2999元</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">3000元以上</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								
							</Flex> 


							<Flex className={Flo.sp}>
								<Flex.Item>
									<h4 style={{marginLeft:"15px"}}>按类别选购</h4>
								</Flex.Item>
							</Flex>
			 
							<Flex className={Flo.sp}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">传情花束</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">鲜花礼盒</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">瓶插画</Link></Flex.Item>
							</Flex> 
							<Flex className={Flo.sp} style={{border:"1px solid #cecece",marginBottom:"10px"}}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">鲜花礼篮</Link></Flex.Item> 
								<Flex.Item></Flex.Item>
								<Flex.Item ></Flex.Item>
							</Flex> 


							<Flex className={Flo.sp} style={{border:"1px solid #cecece",marginBottom:"10px"}}>
								<Flex.Item>
									<h3 style={{marginLeft:"15px",color:"red"}}>商务鲜花</h3>
								</Flex.Item>
							</Flex>
							<Flex className={Flo.sp} style={{border:"1px solid #cecece",marginBottom:"10px"}}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">开业花篮</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">会议鲜花</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">礼仪鲜花</Link></Flex.Item>
							</Flex>

							<Flex className={Flo.sp} style={{border:"1px solid #cecece",marginBottom:"10px"}}>
								<Flex.Item>
									<h3 style={{marginLeft:"15px",color:"red"}}>绿植花卉</h3>
								</Flex.Item>
							</Flex>
							<Flex className={Flo.sp} style={{border:"1px solid #cecece",marginBottom:"10px"}}>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">绿色植物</Link></Flex.Item><div style={{border:"1px solid #cecece",height:"10px"}}></div>
								<Flex.Item className={Flo.spa}><Link style={{color:"#101010"}} to="/flowerList">盆栽花卉</Link></Flex.Item> 
								<Flex.Item className={Flo.spa}></Flex.Item>
							</Flex>
					</WingBlank>
				</section>
				<footer>
					<Foot/>
				</footer>
			</div>
		)
	}
}
export default Flower;