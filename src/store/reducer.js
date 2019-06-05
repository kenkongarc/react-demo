import {combineReducers} from "redux-immutable"
import commons from "./commons/reducer"
import home from "./home/reducer"
const reducer = combineReducers({
    commons,   // state.commons    connect(state=>state.commons)(UI组件)
    home
})
export default reducer;