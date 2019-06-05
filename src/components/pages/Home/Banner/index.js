import React, {Component} from "react"
import GroupState from "../../../../modules/group"
import Swiper from "swiper"
import "./index.scss"
// import {Get} from "../../../../modules/axios-util"

class Banner extends Component{
    
//    constructor(){
//        super()
//        this.state = {
//            banners:null
//        }
//    }
    componentDidMount(){
        let {banners} = this.props;
        if(banners){
            this.initSwiper()
            return false;
        }
        //异步请求数据
        this.props.getBannerInfo(()=>{
            this.initSwiper()
        });
        // Get({
        //     url:"api/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num=10",
        // }).then(res=>{
        //     // console.log(res.data[0].setList[0].contentList);
        //     let banners = res.data[0].setList[0].contentList;
        //     this.setState({
        //         banners:banners
        //     })
        //     console.log(this.state.banners);
               
        // })
      
    }
    initSwiper(){
        this.swiper = new Swiper(".swiper-container",{
            slidesPerView :'auto',
            autoplay:true,
            loop:true,
            pagination:{
                el:".swiper-pagination"
            }

        })
    }
    renderSlide(){
        let {banners} = this.props;
        if(!banners) return "";
        console.log("1212",banners)
        return banners.map((item,index)=>{
            return (
                <div key={index} className="swiper-slide">
                   <img width="100%" src={item.item_image} alt={item.alt_desc}/>
                </div>
            )
        })
    }

    render(){
        return(
            <div className="home-navbar swiper-container" id="bannerTop"> 
                <div className="swiper-wrapper">
                    {this.renderSlide()}
                </div> 
                <div className="swiper-pagination"></div>
            </div>

        )
    }
}
export default GroupState(Banner,{
    reducer:"home",
    states:["banners"]
})