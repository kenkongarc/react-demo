import React,{Component} from "react"
import "./index.scss";
class Mine extends Component{ //beforeEach afterEach 
    // componentWillReceiveProps(props){
    //     console.log(props.location)
    // }

    render(){
        console.log("Mine.js",this)
        return (
            <div>
                Mine
            </div>
        )
    }
}
export default Mine;