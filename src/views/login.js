import React,{Component} from "react";
import {Link} from "react-router-dom";
import {WingBlank,NavBar,Icon,WhiteSpace,Flex, Checkbox,Button} from "antd-mobile"


var active ={ background:'red',color:"white",height:'54px'};
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}><Link style={{color:"red"}} to="/phoneLogin">使用手机验证登陆</Link></div>
  );
function random(a){
    let cont = ""
    for(let i = 0;i< 4;i++){
      cont += parseInt(Math.random()*10)
    }
    a.innerText=cont
}
const AgreeItem = Checkbox.AgreeItem;

//  1.增加cookie并设置cookie存在时间
//name 商品名 （唯一）； value 商品值 ； n 天数
function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires" + oDate;
}

//  2.获取cookie中商品名所对应的值
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
//  3.删除cookie 
// name  要删除cookie名字
function removeCookie(name) {
	setCookie(name, 1, -1);
}


class Login extends Component{ 
    render(){
        return(
            <div> 
                {/* 导航头 */}
                <NavBar
                    style={active}
                    mode={""}
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >会员登录</NavBar>
 
                {/* 手机号输入框 */}
                <WhiteSpace />
                    <Flex justify="end">
                        <PlaceHolder style={{marginTop:'11px',marginRight:'16px',fontSize:"14px"}} />
                    </Flex>
                <WhiteSpace />
                <div style={{padding:"15px 0"}}>
                    <WhiteSpace/>
                    <WingBlank><input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} ref = "ph" type="text" placeholder="请输入手机号码"></input></WingBlank>
                </div>

                {/* 密码输入框 */}
                <div style={{paddingBottom:"7px 0 15px 0"}}>
                    <WhiteSpace/>
                    <WingBlank>
                        <input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="请输入登录密码"></input>
                    </WingBlank>
                </div>

                {/*验证码 */}
                <div style={{padding:"7px 0 15px 0",width:"37%",float:'left'}}>
                    <WhiteSpace/>
                    <WingBlank><input style={{width:"96.5%",paddingLeft:"10px",height:"46px",fontSizre:"14px",border:'none',border:"1px solid #cecece"}} type="text" placeholder="验证码"></input></WingBlank>
                </div>
                <div ref="random" style={{width:'28%',height:"44px",float:'left',background:"#cecece",marginTop:"21px",fontSize:"26px",textAlign:"center",lineHeight:"44px",marginRight:"10px"}}></div>
                <div style={{marginTop:'33px'}} onClick={this.random.bind(this)}>换一张</div>
                
                {/* 一个月免登陆 */}
                <div>
                    <Flex style={{width:"100%"}}>
                        <Flex.Item >
                            <AgreeItem style={{width:'100%'}} data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                一个月内免登陆 
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>
                </div>

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
                        <Flex.Item><Link style={{color:"black"}} to="/register">免费注册</Link></Flex.Item>
                        <Flex.Item><Link style={{color:"black",float:'right'}} to="/forgetpassword">忘记密码？</Link></Flex.Item> 
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    random(){
        random(this.refs.random)
    } 
    login(){
        console.log(this.refs.ph.value)
        setCookie('username',this.refs.ph.value,30)
        this.props.history.push("/home")
    }

    componentDidMount(){
        random(this.refs.random)
        // axios({
        //     method:"",
        //     url:"",

        // }).then(function(data){
            
        // })
    }

}

export default Login;