import React from "react"
import Header from "./header"
import Content_c from "./content_c"

import "../css/khpj.css"
import k_o from "../images/k_o.jpg"
import k_t from "../images/k_t.jpg"
import k_th from "../images/k_th.jpg"
import k_f from "../images/k_f.jpg"
import k_fi from "../images/k_fi.jpg"
import k_s from "../images/k_s.jpg"
import D_ban from "../images/d_banner.jpg"
class Khpj extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>
                    <Header/>
                    <div className="D_ban">
                        <span>93517</span>
                        <span>个家庭</span>
                    </div>
                    <div className="k_t">
                        <span></span>
                        <h3>客户评价</h3>
                        <span></span>
                    </div>

                    <div className="k_list">
                        <dl>
                            <dt><img src={k_o} /></dt>
                            <dd>
                                <h3>【日本私属定制】东京箱根6日之旅</h3>
                                <span>李女士 | 2018年05月</span>
                                <p>这次和姥姥的旅行很开心，感谢导游王姐和旅行顾问崔吉的服务，旅途很愉快，再次谢谢你们各位。</p>
                            </dd>                       
                        </dl>

                        <dl>
                            <dt><img src={k_t} /></dt>
                            <dd>
                                <h3>【巴西阿根廷美国】深度体验之旅</h3>
                                <span>姜女士 | 2018年05月</span>
                                <p>这次我们一行10人为期22天三国之旅。旅行顾问胡健历经数月对我们的行程做
                                    了非常认真仔细的安排，每到一处，导游接待热情，服务周到，全体团员都感觉
                                    这是一次非常愉快的，收获多多的旅行。非常感谢！期待下次的合作！</p>
                            </dd>                       
                        </dl>

                        <dl>
                            <dt><img src={k_th} /></dt>
                            <dd>
                                <h3>【日本本州定制】9日寻梦之旅</h3>
                                <span>张女士 | 2018年05月</span>
                                <p>顾问一级棒！有问必答！关西地陪一级棒！有求必应！</p>
                            </dd>                       
                        </dl>

                        <dl>
                            <dt><img src={k_f} /></dt>
                            <dd>
                                <h3>【新西兰8晚10日】中土世纪之旅</h3>
                                <span>杨女士 | 2018年05月</span>
                                <p>一切顺利~给满分！</p>
                            </dd>                       
                        </dl>


                        <dl>
                            <dt><img src={k_fi} /></dt>
                            <dd>
                                <h3>【亲子度假嗨翻天】新加坡4晚5日</h3>
                                <span>冯女士 | 2018年05月</span>
                                <p>一次快乐的妈咪带娃出游，特别谢谢Susie美女热心细致的回复&随时让我们无比安心的出游
                                    ，非常感谢6人游的服务团队高效服务,贴心周到！下次出游我们也会再请6人游团队的细致定制~</p>
                            </dd>                       
                        </dl>


                        <dl>
                            <dt><img src={k_s} /></dt>
                            <dd>
                                <h3>【马尔代夫8日6晚】奢华之旅</h3>
                                <span>李先生 | 2018年04月</span>
                                <p>感觉霸占了一个岛，相当给力~</p>
                            </dd>                       
                        </dl>
                    </div>

                </div>
            </div>
        )
    }
}
export default Khpj;