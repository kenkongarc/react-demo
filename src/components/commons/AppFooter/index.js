import React,{Component} from "react"
import "./index.scss";
import {NavLink} from "react-router-dom"
class AppFooter extends Component{
    renderFooter(){
        let {navs} = this.props;
        return navs.map(item=>{
            return (
                <NavLink key={item.id} to={{pathname:item.path}} exact={item.exact}>
                    <i className={"fa fa-"+item.icon}></i>
                    <span>{item.title}</span>
                </NavLink>
            )
        })
    }
    render(){
        return (
            <div className="app-footer">
                {this.renderFooter()}
            </div>
        )
    }
}

AppFooter.defaultProps = {
    navs:[
        {id:1,title:"首页",icon:"home",path:"/",exact:true},
        {id:2,title:"分类",icon:"list",path:"/list"},
        {id:3,title:"发现",icon:"compass",path:"/findnew"},
        {id:4,title:"购物车",icon:"shopping-cart",path:"/buycar"},
        {id:5,title:"我的优选",icon:"user",path:"/mine"},
    ]
}
export default AppFooter;