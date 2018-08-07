import React from "react"
import Header from "./header";
import "../css/mdd.css"
import mdd_img_1 from "../images/52969ecfc4865.jpg"
import mdd_img_2 from "../images/2016_1_29_1454061845478394873.jpg"
import mdd_img_3 from "../images/dz-bg.jpg"
import mdd_img_4 from "../images/wx-code-bg.jpg"
import Footer_b from "./footer_b";
import Footer_c from "./footer_c";
class Mdd extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var arr=[1,2,3,4,5,6,7,8,9,10]
        return(
            <div>
               <Header/>
               <div className="mdd_wrap">
                    <div className="mdd">
                    <div className="mdd_top">
                    <h4>首页 > 目的地</h4>
                    <div className="mdd_top_box">
                        <div className="mdd_top_box_a">
                            <h2>美国</h2>
                            <p className='mdd_top_box_a_p'>united state</p>
                            <p className='mdd_top_box_a_p1'>共有<span>30</span>个推荐玩法</p>
                        </div>
                        <div className="mdd_top_box_b">
                            <img src={mdd_img_1} />
                        </div>
                    </div>
                    </div>
                    <div className="mdd_center">
                    <div className="mdd_center_left">
                      {
                          arr.map(function(Item,i){
                              return (
                                <div className="mdd_center_left_box" key={i}>
                                <div className="mdd_center_left_box_a">
                                <img src={mdd_img_2} />
                                <div className="mdd_center_left_box_a_position1"></div>
                                <div className="mdd_center_left_box_a_position2">
                                <p>行驶最美海天公路，嬉戏美国最南端碧海蓝天；</p>
                                </div>
                                </div>
                                <div className="mdd_center_left_box_b">
                                <h3>
                                    <a href="">【美国佛州8晚10天 亲子私享】重温旧日时光，感受南方惬意舒适</a>
                                </h3>
                                <p><span>行程天数：10天</span><strong>目的地：迈阿密 奥兰多 基韦斯特</strong></p>
                                <div>
                                    <span>D1</span><strong>北京 - 奥兰多</strong>
                                </div>
                                <div>
                                    <span>D2</span><strong>奥兰多</strong>
                                    <mark>迪士尼魔法世界</mark>
                                </div>
                                <div>
                                    <span>D3</span><strong>奥兰多</strong>
                                    <mark>迪士尼未来世界</mark>
                                </div>
                                <div>
                                    <span>D4</span><strong>奥兰多</strong>
                                    <mark>迪士尼好莱坞影城</mark>
                                </div>
                                <span>﹀</span>
                                <div className="mdd_button">
                                    <button>
                                        咨询顾问
                                    </button>
                                    <button>
                                        查看详情
                                    </button>
                                </div>
                                </div>
                            </div>
                              )
                          })
                      }
                      <div className="mdd_center_left_fen"></div>
                    </div>
                    <div className="mdd_center_right">
                            <div className="mdd_center_right_a">

                            </div>
                            <div className="mdd_center_right_b">
                            <div className="mdd_center_right_b_box">
                                <h3>想要个属于自己的行程吗？</h3>
                                <p>让1对1旅行管家为你定制</p>
                                <button>立即定制</button>
                            </div>
                                <img src={mdd_img_3}/>
                                <img src={mdd_img_4}/>
                            </div>
                    </div>
                    </div>
                    </div>
               </div>
               <div>
                    <Footer_b/>
                    <Footer_c/>
               </div>
            </div>
        )
    }
}
export default Mdd;