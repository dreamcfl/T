import React from "react";
import Header from "./header";
import Banner from "./banner";
import Nav from "./nav";
import Footer_c from "./footer_c";
import Footer_b from "./footer_b";
import Footer_a from "./footer_a";
import Content_a from "./content_a";
import Content_b from "./content_b";
import Content_c from "./content_c";
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <header>
                    <Header/>
                </header>
                <section>
                    <Banner/>
                    <Nav/>
                    <Content_a/>
                    <Content_b/>
                    <Content_c/>
                </section>
                <footer>
                    <Footer_a/>
                    <Footer_b/>
                    <Footer_c/>
                </footer>

            </div>
        )
    }
}
export default Home;