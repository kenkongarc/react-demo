import state from "./state"
import {fromJS} from "immutable"
import {GET_BANNER_INFO} from "./const"
const reducer = (prevState=fromJS(state),action)=>{
    switch(action.type){
        case GET_BANNER_INFO:
            return prevState.set("banners",action.banners).set("contents",action.contents)
        // case GET_CONTENT_INFO:
        //     return prevState.set("contents",action.contents)
        default:
            return prevState;
    }
}
export default reducer;