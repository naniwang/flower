import React,{Component} from "react";
import Foot from "../components/Foot"
import {NavBar,Icon,WingBlank} from "antd-mobile"
import {Link} from "react-router-dom";

var active ={ background:'red',color:"white",height:'54px',marginBottom:"15px"};

  
  
  class Grxx extends Component{
    
    render(){
          
        return(
            <div className="container">

                <NavBar
                    style={active}
                    mode={""}
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >个人资料管理</NavBar>  

            <section>
                <div style={{width:"100%",height:"105px",borderTop:'1px solid #cecece',borderBottom:'1px solid #cecece',marginBottom:"20px"}}> 
                    <Link to="/grzl" style={{color:"#333"}}>
                        <WingBlank style={{height:"52px",lineHeight:"52px",borderBottom:"1px solid #cecece"}}>
                            <span>个人资料管理</span>
                        </WingBlank> 
                    </Link>
                    <Link to="/myflow" style={{color:"#333"}}>
                        <WingBlank style={{height:"52px",lineHeight:"52px"}}>
                            <span>收花人地址管理</span>
                        </WingBlank>
                    </Link>
                </div>

                <div style={{width:"100%",height:"160px",borderTop:'1px solid #cecece',borderBottom:'1px solid #cecece',marginBottom:"20px"}}> 
                    <Link to="/" style={{color:"#333"}}>
                        <WingBlank style={{height:"53px",lineHeight:"52px",borderBottom:"1px solid #cecece"}}>
                            <span>修改手机号</span>
                        </WingBlank> 
                    </Link>
                    <Link to="/" style={{color:"#333"}}>
                        <WingBlank style={{height:"53px",lineHeight:"52px",borderBottom:"1px solid #cecece"}}>
                            <span>修改密码</span>
                        </WingBlank> 
                    </Link>
                    <Link to="/" style={{color:"#333"}}>    
                        <WingBlank style={{height:"52px",lineHeight:"52px"}}>
                            <span>重置密码(忘记原密码)</span>
                        </WingBlank>
                    </Link>
                </div> 
            </section>
                <Foot style={{position:"fixed",left:0,bottom:0}}/> 
            </div>
        )
    }
}
export default Grxx;