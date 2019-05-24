import React,{Component} from "react";
import {Link} from "react-router-dom";
import {WingBlank,NavBar,Icon,Button,WhiteSpace} from "antd-mobile"

var active ={ background:'red',color:"white",height:'54px'};

//name 商品名 （唯一）； value 商品值 ； n 天数
function setCookie(name, value, n) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + n);
	document.cookie = name + "=" + value + ";expires" + oDate;
}


class myFlow extends Component{
    constructor(props){
        super(props)
        this.state ={
            arr :[],
            arr1:[]
        }
    }
    save(){
        this.state.arr.push(this.refs.username.value)
        this.state.arr.push(this.refs.phone.value)
        this.state.arr.push(this.refs.detail.value)
        this.state.arr.push(this.refs.code.value)    
        this.state.arr1.push(this.state.arr)
        setCookie("myflow1",this.state.arr1,90)
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
                >我的收花</NavBar>

             {/* 已存在地址遍历 */} 
            
            <WingBlank style={{marginTop:"10px"}}>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>收花人姓名:</span>
                    <input ref="username" style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>收花人性别:</span>
                    <input style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>收花人电话:</span>
                    <input ref="phone" style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>收花人地区:</span>
                    <input style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>详细地址:</span>
                    <input ref="detail" style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>邮政编码:</span>
                    <input ref="code" style={{height:'40px',width:"%",border:"none"}} type="text"></input>
                </div>
                <div style={{paddingLeft:"10px",width:"97%",hieght:'40px',border:"1px solid #cecece",lineHeight:"40px",borderBottom:"none"}}>
                    <span>默认地址:</span>
                    <input style={{height:'40px',width:"50%",border:"none"}} type="text"></input>
                </div>
                
                <Button onClick={this.save.bind(this)} style={{background:"red",color:"white",marginTop:"15pxs"}} type="warning">保存信息</Button><WhiteSpace />
            </WingBlank>
            </div>
        )
    }
}


export default myFlow