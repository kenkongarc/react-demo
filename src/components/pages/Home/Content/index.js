import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../modules/group"
class Content extends Component{

    renderContent(){
        let {contents} = this.props;
        if(!contents) return "";
        console.log("1313" ,this.props)
        return contents.map((item,index)=>{
            return (
                <div className="item" key={index}>
                    <div className = "imgBox">
                        <div className="hindexCommodityTip">
                            <div className="hindexCommodityTipBox">
                                {item.mobile_tag_txt}
                            </div>
                        </div>                  
                                        
                        <div className = "pradelogo">
                            <img src={item.brand_url} alt=""/>
                        </div>
                        <div className = "productPic">
                            <img  src={item.item_image} alt={item.conts_title_nm}/>
                        </div>
                    </div>
                    <div className = "contentBox">
                        <div className="title">{item.conts_title_nm}</div>
                        <div className="hmoneytipBox">
                            <div className="hzhekouBox">{item.co_dc}折</div>
                            <div className="hmoney">
                               <span>￥</span>{item.sale_price}<del>￥{item.cust_price}</del>
                            </div>

                        </div>
                    </div>
                    
                </div>
            )
        })
        

    }
    render(){
        return(
            
           <div className="productItem">
                Content
                {this.renderContent()}
           </div>
            
        )
    }
}

export default GroupState(Content,{
    reducer:"home",
    states:["contents"]
})