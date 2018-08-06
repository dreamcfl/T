
import React from "react"

import "../css/footer_c.css"
class Footer_c extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
           <div>
              <div id="footer_c_wrap">
				  <div id="footer_c_xian">
					<div id="footer_c">
						<div id="footer_c_left">
						<p></p>
						</div>
						
						<div id="footer_c_zhong">
						<p>
							<a href="">关于我们</a> |
							<a href="">品牌解读 </a> |
							<a href="">联系我们</a> |
							<a href="">媒体报道 </a> |
							<a href="">运营资质</a>
							
						</p>
						<p>
						客服专线：400-010-6003 <mark>(工作时间：早9点 - 晚7点)</mark> 传真：010-64738808
						
						
						</p>
						<p>
						
						地址：北京市朝阳区望京阜通东大街1号院望京SOHO塔2-B单元0803室
						</p>
						
						
						</div>
						<div id="footer_c_right">
						<p></p>
						
						
						</div>
					</div>
				  </div>
				</div>
              
              <div id="footer_d_wrap">
              		<div id="footer_d">
              			<p>
              			Copyright©2018　6renyou.com　北京六人游国际旅行社股份有限公司　版权所有　京ICP备14027237号　京公网安备11010502026387号　经营许可证:京ICP证140690号　安全联盟
              			</p>
              			<p>
              			
              			
              			
              			</p>
              			
              		
              		</div>
              </div>
           </div>
       )
   }
}

export default Footer_c;