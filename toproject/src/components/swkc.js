import React from "react"
import Header from "./header";
import "../css/swkc.css"
import swkc_img_1 from "../images/bs-resource-list1.jpg"
import swkc_img_2 from "../images/bs-resource-list2.jpg"
import swkc_img_3 from "../images/2018_5_9_1525864138292692047.jpg"
import swkc_img_4 from "../images/2018_5_11_1526030291218708211.jpg"
import swkc_img_5 from "../images/icons-trip.png"
import Footer_b from "./footer_b";
import Footer_c from "./footer_c";
import $ from "jquery"
class Swkc extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        $(window).scroll(function () {
             		if ($(this).scrollTop() > 300) {
             			$(".swkc_scroll").fadeIn();
            		} else {
             			$(".swkc_scroll").fadeOut();
             		}
             	});
        $(".swkc_scroll").click(function () {
             		if ($(window).scrollTop() > 0) {
             			$("html,body").stop().animate({ scrollTop: 0 }, 1000);
             		}
             	});
    }
    render(){
        var arr=[1,2,3,4,5,6]
        var arr1=[1,2,3,4,5,6,,7,8,9,10,11,12]
        return(
            <div>
               <Header/>
               <div className="swkc">
                    <div className="swkc_banner">
                        <button>立即咨询</button>
                    </div>
                    <div className="swkc_con1">
                     <h2>资源优势</h2>
                     <p>— 甄选全球高品质资源，满足您的企业需求 —</p>
                     <div className="swkc_con1_pic">
                        <ul>
                            <li>
                                <img src={swkc_img_1}/>
                                <div></div>
                                <p>投资孵化</p>
                            </li>
                            <li>
                                <img src={swkc_img_2}/>
                                <div></div>
                                <p>创新企业</p>
                                </li>
                                <li>
                                <img src={swkc_img_1}/>
                                <div></div>
                                <p>投资孵化</p>
                            </li>
                            <li>
                                <img src={swkc_img_2}/>
                                <div></div>
                                <p>创新企业</p>
                                </li>
                                <li>
                                <img src={swkc_img_1}/>
                                <div></div>
                                <p>投资孵化</p>
                            </li>
                            <li>
                                <img src={swkc_img_2}/>
                                <div></div>
                                <p>创新企业</p>
                                </li>
                                <li>
                                <img src={swkc_img_1}/>
                                <div></div>
                                <p>投资孵化</p>
                            </li>
                            <li>
                                <img src={swkc_img_2}/>
                                <div></div>
                                <p>创新企业</p>
                                </li>
                        </ul>
                     </div>
                    </div>
                   <div className="swkc_con2">
                        <h2>考察案例</h2>
                        <p>— 企业客户考察实例，涵盖多样化主题 —</p>
                        <div className="swkc_con2_box">
                            {
                                arr.map(function(item,i){
                                    return(
                                        <dl key={i}>
                                            <dt><img src={swkc_img_3}/></dt>
                                            <dd>
                                                <h4>2018巴菲特股东大会</h4>
                                                <p>美国 · 奥马哈</p>
                                            </dd>
                                        </dl>
                                    )
                                })
                            }
                        </div>
                   </div>
                   <div className="swkc_con3">
                        <h2>全球网络</h2>
                        <p>— 全球知名企业参访，建立交流和启发灵感 —</p>
                        <div className="swkc_con3_box">
                            <ul>
                                {
                                    arr1.map(function(item,i){
                                        return (
                                            <li key={i}><a href=""><img src={swkc_img_4} /></a></li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                   </div>
                   <div className="swkc_con4">
                        
                   </div>
                   <div className="swkc_con5">
                        <p>专业顾问团队，竭诚为您服务！</p>
                        <button>专业咨询</button>
                        </div>
                        <div className="swkc_scroll">
                                <img src={swkc_img_5}/>
                                <p>TOP</p>
                        </div>
                        <footer>
                            <Footer_b/>
                            <Footer_c/>
                        </footer>
               </div>
            </div>
        )
    }
}
export default Swkc;