import React from "react"
import "../css/dujia.css"
import Header from "./header"
import Footer_a from "./footer_a"
import Footer_b from "./footer_b"
import Footer_c from "./footer_c"
import { Carousel } from 'antd';
import dujia_t1 from "../images/2017_4_18_1492482823211455634.jpg"
import dujia_t2 from "../images/2017_4_18_1492487968295602995.jpg"
import dujia_t3 from "../images/2018_7_19_1531991328482675182.jpg"
import dujia_t4 from "../images/v-tp-1.jpg"
import dujia_t5 from "../images/v-tp-2.jpg"
import dujia_t6 from "../images/v-tp-3.jpg"
import dujia_t7 from "../images/v-tp-4.jpg"
import dujia_t8 from "../images/5a68735d858bb.jpg"
import dujia_t9 from "../images/5a687f2f8d8f1.jpg"
import dujia_t10 from "../images/5ad5aebaadea7.png"
import dujia_t11 from "../images/5a6965a9c7e1c.jpg"

class Dujia extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    	var arr = [1,2,3,4,5]
    	
    	
        return(
            <div>
            	<Header/>
               <div id="dujia_lb">
               	  <Carousel autoplay>
				    <div><img src={dujia_t1}/></div>
				    <div><img src={dujia_t2}/></div>
				    <div><img src={dujia_t3}/></div>
				  </Carousel>
                </div>
                
               <div id="dujia_nav">
                   <div id="dujia_nav_left">
                   <p>热门海岛</p>
                   <p>
                   		<span>全部别墅</span>
                   		<span>巴厘岛</span>
                   		<span>马尔代夫</span>
                   		<span>吉普岛</span>
                   		<span>毛里求斯</span>
                   		<span>苏梅岛</span>
                   </p>
                   </div>
               
                   <div id="dujia_nav_right">
                   
                   <div>
                   <span>甄选主题</span>
                   <p>
                   <a><img src={dujia_t1}/></a>
                   <a><img src={dujia_t2}/></a>
                   <a><img src={dujia_t3}/></a>
                   <a><img src={dujia_t4}/></a>
                   </p>
                   </div>
                   </div>
               
               </div>
               
               
               <div id="dujia_liebiao">
               		{
               			arr.map(function(item,i){
               				return(
               					<div className="dujia_liebiao_kuai" key={i}>
               <img src={dujia_t10}/>
               
               <div>
               	<p>
	               	<strong>
	               	中国　秦皇岛　北戴河
	               	</strong>
	               	<span>
	               	北戴河黄金海岸沙滩
	               	</span>
	               <span>
	               </span>
               	</p>
               	<p>
               	Golden Coast ClubMed Joyview
               	
               	</p>
               	<p>
               	<span>
               	
               	</span>
               	<strong>
               	河北省秦皇岛市昌黎县蒲河桥南一公里黄金海岸阿娜亚社区
               	</strong>
               	</p>
               <div>
               		<p>
               		别墅经理:Tfjdi Sfld	
               		</p>
               		<p>
               		<img src={dujia_t11}/>
               		<span>
               		"在秦皇岛顾客可以条也能到浪费加工费大概都得经过覅欧冠当时就否定欧风街热偶"
               		
               		
               		
               		</span>
               		
               		</p>
               
               
               </div>
               <div>
               		<p>
               		￥1520元<mark>/晚起</mark>
               		</p>
               		<p>
               		
               		</p>
               		
               		
               
               </div>
               
               
               
               </div>
               
               		</div>
               				)
               			})
               		}
               
               </div>
               <Footer_a/>
               <Footer_b/>
               <Footer_c/>
               
            </div>
        )
    }
}
export default Dujia;