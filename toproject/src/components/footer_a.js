
import React from "react"
import $ from 'jquery'

import "../css/footer_a.css"

import footer_a_t1 from "../images/why-icon.png"




class Footer_a extends React.Component{
    constructor(props){
        super(props)
    }

	componentDidMount(){
		$(".footer_a_lei").hover(
			function(){
				$(this).find("span").css({"color":"#a0c418"})
			},
			function(){
				$(this).find("span").css({"color":"#000"})
			})
			
		$(".footer_a_lei").hover(
			function(){
				$(this).find("p").css({"background-position-y":"-82px"})
			},
			function(){
				$(this).find("p").css({"background-position-y":"0px"})
			}
		)
	}
	

   render(){
       return(
           <div>
             <div id="footer_a_wrap">
           		<div id="footer_a">
					<p></p>
					<ul>
						<li class="footer_a_lei">
							<p></p>
							<span>不和陌生人拼团</span>
						</li>
						<li class="footer_a_xiexian"></li>
						<li class="footer_a_lei">
							<p></p>
							<span>零操心，何必自助</span>
						</li>
						<li class="footer_a_xiexian"></li>
						<li class="footer_a_lei">
							<p></p>
							<span>贴身管家，有问必答</span>
						</li>
						<li class="footer_a_xiexian"></li>
						<li class="footer_a_lei">
							<p></p>
							<span>独家资源，高性价比</span>
						</li>
					</ul>	
		</div>
			</div>
           </div>
       )
   }
}

export default Footer_a;