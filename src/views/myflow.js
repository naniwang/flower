import React,{Component} from "react";
import {Link} from "react-router-dom";
import {WingBlank,NavBar,Icon,WhiteSpace} from "antd-mobile"

var active ={ background:'red',color:"white",height:'54px'};

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


class myFlow extends Component{
    constructor(props) {
      super(props)
      this.state = {
        arr : [],
        arr1:[]
      }  
    }
    componentWillMount(){
        console.log(getCookie("myflow1"))
        this.state.arr.push(getCookie("myflow1"))
        this.setState({arr1:this.state.arr})
    }
    render(){
        console.log(this.state.arr1)
        return(
            <div>
                {/* 导航头 */}
                <NavBar
                    style={active}
                    mode={""}
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                >我的收花</NavBar>
            
            <WingBlank>
                {/* 遍历新地址 */}
                <ul>
                    <li>
                        {
                            this.state.arr.map(function(item){
                                return(
                                    <div>{item}</div>
                                )
                            })
                        }
                    </li>
                </ul>

                 <WhiteSpace/>
                 <Link to="/myflow1"  >
                    <div style={{border:"1px solid orange",color:"orange",width:"100%",height:"20px",lineHeight:"20px",textAlign:"center"}}>
                        +添加收货地址
                    </div>
                 </Link>
            </WingBlank>



            </div>
        )
    }
}


export default myFlow