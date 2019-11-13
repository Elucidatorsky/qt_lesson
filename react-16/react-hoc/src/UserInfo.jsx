import React, { Component } from 'react'
import WithLogin from './WithLogin'
class UserInfo extends Component {
    // state = {
    //     isLogin: false
    // }
    // render() {
    //     const { isLogin } = this.state;
    //     if (isLogin) {
    //         return (
    //             <p>usename</p>
    //         )
    //     }
    //     return (
    //         <button onClick={() => {this.setState({isLogin: true})}}>login!!!</button> // onClick必须接收一个函数
    //     )
    // }
    render() {
        return (
            <p>name</p>
        )
    }
}
export default WithLogin(UserInfo)