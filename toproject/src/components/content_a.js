
import React from "react"
import "../css/content_a.css"
import img_content_a_1 from "../images/2018_1_5_1515145853769595982.jpg"

class Content_a extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
           <div className="content_a">
              <div className="content_a_c">
                <div className="content_a_c_left">
                <h2>当地热门目的地</h2>
                <p>旅行顾问推荐最好玩的地方</p>
                <h3>亚洲</h3>
                <ul>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                </ul>
                <h3>欧洲 美洲</h3>
                <ul>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹泰国</a></li>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹泰</a></li>
                </ul>
                <h3>澳新 中东非洲</h3>
                <ul>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                    <li><a href="">台湾</a></li>
                    <li><a href="">泰国</a></li>
                    <li><a href="">不丹</a></li>
                </ul>
                </div>
                <div className="content_a_c_right">
                <ul>
                    <li><a href=""><span>泰国</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>澳大利亚</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>挪威</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>美国</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>泰国</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>泰国</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>泰国</span><img src={img_content_a_1} /></a></li>
                    <li><a href=""><span>泰国</span><img src={img_content_a_1} /></a></li>
                </ul>
                </div>
              </div>
              
           </div>
       )
   }
}

export default Content_a;