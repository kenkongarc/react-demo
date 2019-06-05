import axios from "axios"
import qs from "querystring"
let data = {
    "client_id": 180100031051,
    "channel_id": 0,
    "webp": 1,
    "product_id": 10000131
}
// let config = {
//     headers:{
//         Cookie:"xmuuid=XMGUEST-8F7DC110-43AC-11E9-93E0-69915DFB3463; mstuid=1552274404130_5467; OUTFOX_SEARCH_USER_ID_NCOO=1875312309.9874222; XM_agreement=0; Hm_lvt_183aed755f0fd3efc9912dbf6550ec49=1557306785,1557452884,1558353294,1558408838; ___rl__test__cookies=1558408839337; log_code=aa6b36fbc8a2bd55-27143984435007ef|https%3A%2F%2Fm.mi.com%2F; hd_log_code=31waphomegallery001001%23t%3Dad%26act%3Dproduct%26page%3Dhome%26pid%3D10000131%26page_id%3D26%26bid%3D3000164.1%26adp%3D2682%26adm%3D12295; pageid=38e6c4aa6892690f; mstz=||629098448.10|||; xm_vistor=1552274404130_5467_1558408831278-1558408847136; msttime=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000131; msttime1=https%3A%2F%2Fm.mi.com%2Fcommodity%2Fdetail%2F10000131; Hm_lpvt_183aed755f0fd3efc9912dbf6550ec49=1558408854"
//     }
// }
//发送ajax请求
axios.post("/xm/v1/miproduct/recommend",qs.stringify(data)).then(res=>{
    console.log(res)
})

