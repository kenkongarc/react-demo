import Post from "./Post"
import Get from "./Get"
import {Component} from "react"

//组件内部通过  this.$post 或者 this.$get 请求数据
Component.prototype.$post = Post;
Component.prototype.$get = Get;

//想在非组件里面请求数据   actionCreators里面请求
export {
    Get,Post
}
