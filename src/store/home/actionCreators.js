import{Get} from "../../modules/axios-util"
import {GET_BANNER_INFO,} from "./const"

export default {
    getBannerInfo(callback){
        return dispatch=>{
            Get({
                url:"api/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num=10",
            }).then(res=>{
                // console.log(res.data[2].setList[0].contentList);
                let banners = res.data[0].setList[0].contentList;
                let contents = res.data[2].setList[0].contentList;
                dispatch(
                    {type:GET_BANNER_INFO,banners,contents}
                    
                    )

                callback && callback();//dispatch完毕后再去实例化
            })
        }

    },
    // getContentInfo(callback){
    //     return dispatch=>{
    //         Get({
    //             url:"api/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num=10",
    //         }).then(res=>{
    //             // console.log("1313",res.data[2].setList[0].contentList);
    //             let contents = res.data[0].setList[0].contentList;
    //             dispatch({type:GET_CONTENT_INFO,contents})

    //             callback && callback();//dispatch完毕后再去实例化
    //         })
    //     }

    // }
}