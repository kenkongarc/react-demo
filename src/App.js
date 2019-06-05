import React,{Component} from 'react';
import {
  Home,
  List,
  Mine,
  Buycar,
  Findnew
} from "./components/pages"
import {Route,Switch,withRouter} from "react-router-dom"
import AppFooter from "./components/commons/AppFooter"
class App extends Component{
  constructor(){
    super()
    this.state = {
      hasFooter:true
    }
  }
  //app组件被withRouter包裹后，就可以监听到路由的变化了
  componentWillReceiveProps(props){
    if(props.location.pathname==="/mine"){
      this.setState({hasFooter:false})
    }else{
      this.setState({hasFooter:true})
    }
  }
  renderRoute(){
    let {navs} = this.props;
    return (
      <Switch>
        {
          navs.map(item=>{
            return <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
          })
        }
      </Switch>
    )
  }
  render(){
    // console.log("App.js",this)
    let {hasFooter} = this.state;
    return (
      <div className="App">
        {this.renderRoute()}
        {!hasFooter || <AppFooter/>}
      </div>
    )
  }
}
App.defaultProps = {
  navs:[
    {id:1,path:"/",component:Home,exact:true},
    {id:2,path:"/list",component:List},
    {id:3,path:"/findnew",component:Findnew},
    {id:4,path:"/buycar",component:Buycar},
    {id:5,path:"/mine",component:Mine}
  ]
}

export default withRouter(App);
