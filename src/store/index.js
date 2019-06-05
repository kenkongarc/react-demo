import {createStore,applyMiddleware} from "redux"
import reducer from './reducer'
import thunk from "redux-thunk" //增强 action ==> reducer  异步操作
const store = createStore(reducer,applyMiddleware(thunk))
export default store;