
import React from "react" 

import "../css/content_c.css"
import $ from 'jquery'

import content_t1 from "../images/2018_6_25_1529894528757201598.jpg"
import content_t2 from "../images/cmmt-quote.png"
import content_t3 from "../images/2018_6_26_1529991701650634338.jpg"

class Content_c extends React.Component{
    constructor(props){
        super(props)
    }

	componentDidMount(){
		$("#content_c_gengduo").find("p").hover(
			function(){
				$(this).css({"color":"#3eb166"})
			},
			function(){
				$(this).css({"color":"#000"})
			}
		)
	}

	tap(){
		console.log("aaa")
		//this.props.history.push("/khpj")
		
	}

   render(){
       return(
           <div>
           <div id="content_c_wrap">
              <div id="content_c">
			<div id="content_c_t">
			
				<p>客户评价</p>
				<fieldset>
					<legend>来自用户的真实出游评价</legend>
				</fieldset>
			</div>
			
			<div id="content_c_x">
				<div className="content_c_xm content_c_x_left">
					<img src={content_t1} />
					<div className="content_c_xgeren">
						<p>【日本私属定制】东京箱根6日之旅</p>
						<p>
							<span>李女士</span>
							<span></span>
							<span>2018年05月</span>
						</p>
					</div>
					<div className="content_c_xganx">
						<p>
							<img src={content_t2}/>
						</p>
						<p>
							这次和姥姥的旅行很开心，感谢导游王姐和旅行顾问崔吉的服务，旅途很愉快，再次谢谢你们各位。
						</p>
						
					</div>
				</div>
				
				<div className="content_c_xm content_c_x_right">
					<img src={content_t3} />
					<div className="content_c_xgeren">
						<p>【巴西阿根廷美国】深度体验之旅</p>
						<p>
							<span>姜女士</span>
							<span></span>
							<span>2018年05月</span>
						</p>
					</div>
					<div className="content_c_xganx">
						<p>
							<img src={content_t2}/>
						</p>
						<p>
							这次我们一行10人为期22天三国之旅。旅行顾问胡健历经数月对我们的行程做了非常认真仔细的安排，每到一处，导游接待热情，服务周到，全体团员都感觉这是一次非常愉快的，收获多多的旅行。非常感谢！期待下次的合作！
						</p>
						
					</div>
				</div>
				
			</div>
			
		</div>
		
              <div id="content_c_gengduo">
				<p onClick={this.tap.bind(this)}>查看更多</p>
			</div>
		  </div>	
        </div>
       )
   }
}

export default Content_c;