
import React from "react"
import "../css/nav.css"

class Nav extends React.Component{
    constructor(props){
        super(props)
    }

   render(){
       return(
           <div>
              <div className="h_ban">
                    <ul className="h_b_l">

                        <li>
                            <span>陪父母</span>
                            <span>To Parents</span>
                        </li>

                        <li>
                            <span>带孩子</span>
                            <span>With children</span>
                        </li>

                        <li>
                            <span>和朋友</span>
                            <span>With Friends</span>
                        </li>

                        <li>
                            <span>客户评价</span>
                            <span>User Rating</span>
                        </li>


                    </ul>
                </div>
              
           </div>
       )
   }
}

export default Nav;