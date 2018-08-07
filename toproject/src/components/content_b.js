
import React from "react"
import "../css/content_b.css"
import { Carousel } from 'antd';
import img_content_b_1 from "../images/2018_4_13_1523585683230202731.jpg"
import $ from "jquery"

class Content_b extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
        $(".hov").hover(function(){
            $(this).parent().find(".content_b_c_bottom_box1").stop().animate({top:'0px'},1000)
        })
        $(".content_b_c_bottom_box1").hover(function(){},function(){
            $(this).stop().animate({top:'320px'},1000)
        })
    }
   render(){
     var  arr=[1,2,3,4,5,6]
       return(
           <div className="content_b">
                <div className="content_b_c">
                     <h2>旅行顾问</h2>
                     <p>— 专业旅行顾问量身定制行程 —</p>
                     <div className="content_b_c_bottom">
                     
  <Carousel>
   {
       arr.map(function(ietm,i){
           return( <div key={i}>
            <div className='content_b_c_bottom_box'>
                <div>
                    <img src={img_content_b_1} />
                    <h4>徐婉贞</h4>
                    <p>旅行顾问</p>
                    <span>_____</span>
                    <p>南美洲</p>
                    <strong className="hov">
                    看看她的介绍
                    </strong>
                    <div className="content_b_c_bottom_box1">
                    <h3>顾问介绍</h3>
                    <span>_____</span>
                    <p>重度旅游发烧友，旅游体验师，探访过20多个国家，擅长北美南美的特殊高难度行程设计，把客户的每一次出行都当作自己出行去对待！</p>
                    </div>
                </div>
                 <div>
                 <img src={img_content_b_1} />
                    <h4>徐婉贞</h4>
                    <p>旅行顾问</p>
                    <span>_____</span>
                    <p>南美洲</p>
                    <strong className="hov">
                    看看她的介绍
                    </strong>
                    <div className="content_b_c_bottom_box1">
                    <h3>顾问介绍</h3>
                    <span>_____</span>
                    <p>重度旅游发烧友，旅游体验师，探访过20多个国家，擅长北美南美的特殊高难度行程设计，把客户的每一次出行都当作自己出行去对待！</p>
                    </div>
                </div>
                <div>
                <img src={img_content_b_1} />
                    <h4>徐婉贞</h4>
                    <p>旅行顾问</p>
                    <span>_____</span>
                    <p>南美洲</p>
                    <strong className="hov">
                    看看她的介绍
                    </strong>
                    <div className="content_b_c_bottom_box1">
                    <h3>顾问介绍</h3>
                    <span>_____</span>
                    <p>重度旅游发烧友，旅游体验师，探访过20多个国家，擅长北美南美的特殊高难度行程设计，把客户的每一次出行都当作自己出行去对待！</p>
                    </div>
                    </div>
                     <div>
                     <img src={img_content_b_1} />
                    <h4>徐婉贞</h4>
                    <p>旅行顾问</p>
                    <span>_____</span>
                    <p>南美洲</p>
                    <strong className="hov">
                    看看她的介绍
                    </strong>
                    <div className="content_b_c_bottom_box1">
                    <h3>顾问介绍</h3>
                    <span>_____</span>
                    <p>重度旅游发烧友，旅游体验师，探访过20多个国家，擅长北美南美的特殊高难度行程设计，把客户的每一次出行都当作自己出行去对待！</p>
                    </div>
                    </div>
            </div>
        </div>)
       })
   }
   
  </Carousel>
                     
                     </div>
                </div>
               
           </div>
       )
   }
}

export default Content_b;