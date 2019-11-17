// // 节流
// let pre = 0;
// function fetch() {
//     let now = now
//     if (now - pre >= wait) {
//         console.log('214');
//     }
    
// }
// btn.mouseMove = fetch
// btn1.mouseMove = fetch1
// // 过程 抽象
// // 高阶函数
// function myThrotle(func) {
//     let pre = 0;
//     return function (...args) {
//         let now = now
//         if (now - pre >= ) {
//             func(...args)
//         }
//     }
// }
// function fetch1(a, b) { a + b }
// var aa = throttle(fetch1)
// aa(1, 2)  =>   undefined
import React, { Component } from 'react';
import { Spin } from 'antd'


// 组件之间有共同的逻辑
export default function (Com) {
 
    class withLoding extends Component {
        state = {
            isLoading: false
        }
        ref = React.createRef() // 获取上面的实例
        componentDidMount() {
            this.ref.current.initLoading()
            .then(data => {
                this.setState({
                    isLoading: false
                })
            })
            .catch(err => {
                this.setState({
                    isLoading: false
                })
            })
        }
        render() {
                // withRouter
                const props = this.props;
            return (
                <Spin 
                spinning={this.state.isLoading}>
                    <Com
                    from = "fromWithLoading"
                    ref={this.ref} {...props}
                    ></Com>
                </Spin>
            )
        }
    }
    return withLoding;
}