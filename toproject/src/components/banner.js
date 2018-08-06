import React from "react";
import 'antd/dist/antd.css'
import { Carousel } from 'antd';
import banner1 from "../images/banner1.jpg"
import banner2 from "../images/banner2.jpg"
import banner3 from "../images/banner3.jpg"
import banner4 from "../images/banner4.jpg"

class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="banner">
                    <Carousel autoplay>
                        <div><img src={banner1} /></div>
                        <div><img src={banner2} /></div>
                        <div><img src={banner3} /></div>
                        <div><img src={banner4} /></div>
                    </Carousel>
                </div>
                
            </div>
        )
    }
}
export default Banner;