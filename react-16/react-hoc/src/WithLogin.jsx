import React, { Component } from 'react'
export default function (Com) { // 用户传一个组件出来
    class WithLogin extends Component{
        state = {
            isLogin: false
        }
        render() {
            const { isLogin } = this.state
            if (isLogin) {
                return (
                    <Com></Com>
                )
            }
            return (
                <button onClick={ () => {
                    this.setState({
                        isLogin: true
                    })
                }}>登录</button>
            )
        }
    }
    return WithLogin;
}

// function add(a, b) {
//     return a + b
// }
// add(5, 10)
// // 函数是一等公民
// function addAsync(a,b,cb) {
//     setTimeout(() => {
//          cb(a + b)
//     });
// }