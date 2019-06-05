
//是一个纯函数  固定输入必须固定输出  不能更改之前的状态 不能进行io 不能返回值不确定的数（random Date）
//只能做同步操作！  新状态的地址与之前状态地址不一样，就是认为返回新状态
import state from "./state"
const reducer = (prevState=state,action)=>{
    const new_state = {...prevState}
    switch (action.type) {
        default:
            break;
    }
    return new_state
}
export default reducer;