import React,{Component} from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
// import qs from "qs"
import {WingBlank,NavBar,Icon,WhiteSpace,Flex, Checkbox,Button,Toast} from "antd-mobile"

var active ={ background:'red',color:"white",height:'54px'};
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}><Link style={{color:"red"}} to="/register">您正在通过手机验证重置密码</Link></div>
  );
 
 

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            dis:"none",
            dis1:"none",
            dis2:"none",
            pho:null,
            psd:null,
            yzxx:null
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
                >手机号注册</NavBar>
                
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
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} ref="ph" onBlur={this.ph.bind(this)} onChange={this.phc.bind(this)} type="text" placeholder="请输入手机号码"></input>
                        <p style={{display:this.state.dis}}>请输入有效手机号</p>
                        </WingBlank>
                </div>


                {/* 请设置6-20位字母和数字登录密码 */}
                
                <WhiteSpace />
                <div style={{padding:"0 0 10px 0"}}>
                    <WhiteSpace/>
                    <WingBlank>
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} ref="ps" onBlur={this.ps.bind(this)} onChange={this.psw.bind(this)} type="text" placeholder="请设置6-20位字母和数字登录密码"></input>
                        <p style={{display:this.state.dis1}}>请设置6-20位字母和数字登录密码</p>
                        </WingBlank>
                </div>

                 {/* 手机验证码  */} 
                 <WingBlank style={{padding:"0 0 15px 0"}}>
                    <Flex justify="between">
                        <Flex.Item > 
                            <input style={{paddingLeft:"10px",width:"70%",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} onChange={this.yxx.bind(this)} onBlur={this.yx.bind(this)} onFocus={this.xx.bind(this)}  ref="xx" type="text" placeholder="输入短信验证码"/>
                        </Flex.Item>
                        <Flex.Item > 
                            <input style={{background:"#ffad0c",color:"white",width:"100%",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} onClick={this.send.bind(this)}  type="button" value="获取验证码"/>
                        </Flex.Item>
                    </Flex>
                    <p style={{display:this.state.dis2}}>请输入有效验证码</p>
                </WingBlank>
                
                
                {/* 登陆 */}
                <Flex>
                    <Flex.Item>
                        <WingBlank> 
                            <Button style={{background:"red"}} onClick={()=>{this.props.history.push("/login")}} type="warning">提交注册</Button>
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
    // 手机号失去焦点正则验证
    ph(){ 
        // 手机号正则验证 
        var reg=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        if(reg.test(this.refs.ph.value) || this.refs.ph.value.length == 0){
            this.setState({pho:true,dis:"none"}) 
        } else { 
            this.setState({dis:"block"}) 
        } 
    }
    // 手机号文本框val值实时获取
    phc(){   
        if(this.refs.ph.value.length == 0 || this.refs.ph.value.length == 11){
            this.setState({dis:"none"})
          }
    }

    //密码正则验证
    ps(){ 
        // 手机号正则验证 
        var reg=/^[0-9A-Za-z]{6,20}$/
        if(reg.test(this.refs.ps.value) || this.refs.ps.value.length == 0){
            this.setState({psd:true,dis1:"none"}) 
        } else { 
            this.setState({dis1:"block"}) 
        } 
    }
    //密码框实时获取
    psw(){
        if(this.refs.ps.value.length == 0 || this.refs.ps.value.length > 5){
            this.setState({dis1:"none"})
          } 
    }

    //手机验证信息框获取焦点
    xx(){
        if(this.refs.ph.value.length==0){
            this.setState({dis1:"block"}) 
        }
        if(this.refs.xx.value.length != 6){
            this.setState({dis2:"block"})
        }
    }

    //手机验证信息框失去焦点
    yx(){
        if(this.refs.xx.value.length == 0 || this.refs.xx.value.length == 6){
            this.setState({dis2:"none"})
          }
    }
    //手机验证信息实时获取
    yxx(){
        if(this.refs.xx.value.length == 0 || this.refs.xx.value.length == 6){
            this.setState({dis2:"none"})
          }
    }
    //点击发送验证码
    send(){
        console.log("发送验证码")
        // var _this = this 
        // console.log(this.state.pho)
        // if(this.state.pho){
        //     axios({
        //         method:"post",
        //         url:"http://123.56.9.184:8081/girl/sms/sendmsg.do",
        //         data:qs.stringify({phone:_this.refs.ph.value})
        //     }).then((data)=>{   

        //     })
        // }
    }
    //点击登陆按钮时候进行判断
    successToast(){ 
        // var _this = this
        // axios({
        //     method:"get",
        //     url:"http://123.56.9.184:8081/girl/user/checkphone.do",
        //     params:qs.stringify({phone:_this.refs.ph.value})
        // }).then((data)=>{
        //     axios({
        //         method:"post",
        //         url:"http://123.56.9.184:8081/girl/sms/checkcode.do",
        //         data:qs.stringify({phone:_this.refs.ph.value,code:_this.refs.xx.value})
        //     }).then((data)=>{
        //         _this.setState({yzxx:true,dis2:"none"})
        //     }).catch((data)=>{
        //         _this.setState({dsi2:"block"})
        //     })
        //     if(this.state.pho && this.state.psd && this.state.yzxx){
        //         axios({
        //             method:"post",
        //             url:"http://123.56.9.184:8081/girl/user/register.do",
        //             data:qs.stringify({phone:_this.refs.ph.value,password:_this.refs.ps.value})
        //         }).then((data)=>{
        //             _this.props.history.push("/index")
        //         })
        //     }
        // }).catch((data)=>{
        //     console.log("The phonenumber already exit")
    //      })
    }
}

export default Register