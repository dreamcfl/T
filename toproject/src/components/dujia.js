import React from "react"
import "../css/dujia.css"
import Header from "./header"

import { Carousel } from 'antd';
import dzxc_t1 from "../images/2017_4_18_1492482823211455634.jpg"
import dzxc_t2 from "../images/2017_4_18_1492487968295602995.jpg"
import dzxc_t3 from "../images/2018_7_19_1531991328482675182.jpg"
class Dujia extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            	<Header/>
               <div id="dujia_lb">
               	  <Carousel autoplay>
				    <div><h3><img src={dzxc_t1}/></h3></div>
				    <div><h3><img src={dzxc_t2}/></h3></div>
				    <div><h3><img src={dzxc_t3}/></h3></div>
				  </Carousel>
                </div>
               <div id="dujia_nav">
                   
               
               
               
               
               </div>
               
               
            </div>
        )
    }
}
export default Dujia;