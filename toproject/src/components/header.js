
import React from "react"
import $ from "jquery"
import { BrowserRouter as Router,Link,Route,Redirect,Switch} from "react-router-dom"
import "../css/header.css"
import h_logo from "../images/h_logo.jpg"
import {Icon} from "antd" 
class Header extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
           <div>
                <header>
                        <div className="h_list">
                            <p><Link to="/home" ><img src={h_logo} /></Link></p>
                            <ul className="h_l">
                                <li><Link to="/home" activeStyle={{ color: 'green' }}>首页</Link></li>
                                <li><Link to="/dzxc" activeStyle={{ color: 'green' }}>定制行程</Link></li>
                                <li><Link to="/mdd" activeStyle={{ color: 'green' }}>目的地</Link></li>
                                <li><Link to="/khpj" activeStyle={{ color: 'green' }}>客户评价</Link></li>
                                <li><Link to="/swkc" activeStyle={{ color: 'green' }}>商务考察</Link></li>
                                <li><Link to="/dujia" activeStyle={{ color: 'green' }}>度假&别墅</Link></li>
                            </ul>
                            <div>   
                                <div>
                                    <span><Icon type="file-text" /></span>
                                    <span><Link to="/dingdan">我的订单</Link></span>
                                    <span><Icon type="message" /></span>
                                </div>
                                <div>
                                    <span><Icon type="phone" /></span>
                                    <span><Link to="/">400-010-6003</Link></span>
                                    <span><Icon type="smile" /></span>
                                </div>
                            </div>
                            
                        </div>
                </header>
           </div>
       )
   }
}

export default Header;