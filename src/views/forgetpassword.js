import React,{Component} from "react";
import {Link} from "react-router-dom";
// import $ from "jquery";
import {WingBlank,NavBar,Icon,WhiteSpace,Flex, Checkbox,Button} from "antd-mobile"

var active ={ background:'red',color:"white",height:'54px'};
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}><Link style={{color:"red"}} to="">您正在通过手机验证重置密码</Link></div>
  );
 
const AgreeItem = Checkbox.AgreeItem;
class forgetPassword extends Component{
    constructor(props){
        super(props)
        this.state={
            dis:"none",
            pas:"none",
            pas1:"none",
            pas2:"none"
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
                >重置密码</NavBar>
                
                {/* 手机号输入框 */}
                <WhiteSpace />
                    <WingBlank>
                        <Flex justify="start">
                            <PlaceHolder style={{marginTop:'11px',marginRight:'16px',fontSize:"14px"}} />
                        </Flex>
                    </WingBlank>
                <WhiteSpace />


                <div>
                    <WhiteSpace/>
                    <WingBlank>
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="请输入手机号码" />
                        {/* 文本判断 */}
                        <p style={{display:this.state.dis}}>确认手机不能小于11个字符</p>
                        </WingBlank>
                </div>
                {/* 请重新输入登陆密码 */}
                 
                <WhiteSpace />
                <div>
                    <WhiteSpace/>
                    <WingBlank>
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="请重新输入登陆密码"></input>
                        {/* 文本判断 */}
                         <p style={{display:this.state.pas}}>密码长度不能少于6位</p>                  
                    </WingBlank>
                </div>
                {/* 请再次输入新密码 */}
                
                <WhiteSpace />
                <div style={{padding:"0 0 10px 0"}}>
                    <WhiteSpace/>
                    <WingBlank>
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="请再次输入新密码"></input>
                        {/* 文本判断 */}
                        <p style={{display:this.state.pas1}}>Please enter the same value again</p>                
                        <p style={{display:this.state.pas2}}>请再次输入密码</p>                
                        </WingBlank>
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
                </WingBlank>
                
                
                {/* 登陆 */}
                <Flex>
                    <Flex.Item>
                        <WingBlank> 
                            <Button style={{background:"red"}} onClick={this.login.bind(this)} type="warning">登陆</Button>
                        </WingBlank>
                    </Flex.Item>
                </Flex>

                {/* 免费注册;忘记密码 */}
                <WingBlank style={{marginTop:"15px"}}>
                    <Flex justify="center"> 
                        <Flex.Item></Flex.Item>
                        <Flex.Item><Link style={{color:"black",float:'right'}} to="/login">登陆</Link></Flex.Item> 
                    </Flex>
                </WingBlank>
            </div>
        )
    }  
    login(){
        this.props.history.push("/login")
    }
}
export default forgetPassword;