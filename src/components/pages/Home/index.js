import React,{Component} from "react"
import "./index.scss";
import Banner from "./Banner/index"
import Content from "./Content/index"
class Home extends Component{
    render(){
        return (
            <div>
                Home
                <Banner/>
                <Content/>
                {/* <div className ="goBacktop">
                    <a href="#bannerTop">Top</a>
                </div>
                */}
            </div>
            
        )
    }
}
export default Home;