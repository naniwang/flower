import React,{Component} from "react";
import {Link} from "react-router-dom";
// import $ from "jquery";
import {WingBlank,NavBar,Icon,WhiteSpace,Flex, Checkbox,Button} from "antd-mobile"

var active ={ background:'red',color:"white",height:'54px'};
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}><Link style={{color:"red"}} to="/login">账号密码登陆</Link></div>
  );
 
const AgreeItem = Checkbox.AgreeItem;
class loginPhone extends Component{
    constructor(props){
        super(props)
        this.state={
            dis:"none",
            dis1:"none"
        }
    }
    render(){
        return(
            <div> 

                {/* 导航头 */}
                <NavBar
                    style={active}
                    mode={""}
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >手机验证码登陆</NavBar>
                
                {/* 手机号输入框 */}
                <WhiteSpace />
                    <Flex justify="end">
                        <PlaceHolder style={{marginTop:'11px',marginRight:'16px',fontSize:"14px"}} />
                    </Flex>
                <WhiteSpace />
                <div style={{padding:"15px 0"}}>
                    <WhiteSpace/>
                    <WingBlank><input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="请输入手机号码"></input></WingBlank>
                </div>

                {/* 手机验证码  */} 
                <WingBlank style={{padding:"0 0 15px 0"}}>
                    <Flex justify="between">
                        <Flex.Item > 
                            <input style={{paddingLeft:"10px",width:"70%",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="输入短信验证码"/>
                        </Flex.Item>
                        <Flex.Item > 
                            <input style={{background:"#ffad0c",color:"white",width:"100%",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="button" value="获取验证码"/>
                        </Flex.Item>
                    </Flex>
                    {/* 手机验证码判断 */}
                    <p style={{display:this.state.dis}}>短信验证码不能为空</p>
                    <p style={{display:this.state.dis1}}>短信验证码不能为空</p>
                </WingBlank>


                {/* 登陆 */}
                <Flex>
                    <Flex.Item>
                        <WingBlank> 
                            <Button style={{background:"red"}} onClick={()=>{this.props.history.push("/home")}} type="warning">登陆</Button>
                        </WingBlank>
                    </Flex.Item>
                </Flex>

                {/* 免费注册;忘记密码 */}
                <WingBlank style={{marginTop:"15px"}}>
                    <Flex justify="center"> 
                        <Flex.Item><Link style={{color:"black"}} to="/register">免费注册</Link></Flex.Item>
                        <Flex.Item><Link style={{color:"black",float:'right'}} to="/forgetpassword">忘记密码？</Link></Flex.Item> 
                    </Flex>
                </WingBlank>
            </div>
        )
    } 
}

export default loginPhone;