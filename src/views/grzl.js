import React,{Component} from "react"
import {NavBar,Icon,WingBlank,Flex,Button,WhiteSpace,} from "antd-mobile"
import $ from "jquery"
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
var active ={ background:'red',color:"white",height:'54px',marginBottom:"15px"};



class Grzl extends Component{
    constructor(props){
        super(props)
        this.state={
            token:null,
            username:""
        }
    }
    render(){
        return(
            <div>
                 <NavBar
                    style={active}
                    mode={""}
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >个人资料</NavBar>  
                <WingBlank>  
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item style={{width:"30%"}}>&nbsp;&nbsp;&nbsp;&nbsp;您的昵称:</Flex.Item>
                            <Flex.Item>{this.state.token}</Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex> 
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;您的姓名:</Flex.Item>
                            <Flex.Item><input style={{height:"50px",border:"none"}} ref="username" type="text"/></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;您的性别:</Flex.Item>
                            <Flex.Item><input type="checkbox" name="1"/>未设置&nbsp;<input type="checkbox" name="1"/>男&nbsp;<input type="checkbox" name="1"/>女</Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;您的生日:</Flex.Item>
                            <Flex.Item><input style={{height:"50px",border:"none"}} type="text"/></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;所在地区:</Flex.Item>
                            <Flex.Item> </Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece",borderBottom:"none"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;您的微信:</Flex.Item>
                            <Flex.Item><input style={{height:"50px",border:"none"}} type="text"/></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex> 
                        <Flex style={{width:"100%",height:"50px",border:"1px solid #cecece"}}>
                            <Flex.Item>&nbsp;&nbsp;&nbsp;&nbsp;您的QQ:</Flex.Item>
                            <Flex.Item><input style={{height:"50px",border:"none"}} type="text"/></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                        <Button style={{background:"red",marginTop:'15px',color:"white"}} onClick={this.successToast.bind(this)}>马上修改</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
    componentDidMount(){
        this.setState({token:getCookie("username")})
    }
    successToast(){
       this.props.history.push("/home")
    }
}

export default Grzl;