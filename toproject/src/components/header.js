
import React from "react"


class Header extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
           <div>
               <ul>
                   <li>首页</li>
                   <li>定制行程</li>
                   <li>目的地</li>
                   <li>客户评价</li>
                   <li>度假&别墅</li>
                   <li>商务考察</li>
                   <li>
                       <span></span>
                       <span>我的订单</span>
                       <span></span>
                   </li>

                   <li>
                       <span></span>
                       <span>400-010-6003</span>
                       <span></span>
                   </li>
               </ul>
           </div>
       )
   }
}

export default Header;