import React, {
    Component
} from 'react' ;
import WithLogin from './WithLogin'
//@WithLogin // @ 装饰器
class OrderList extends Component {
    // state = {
    //     isLogin: false
    // }
    // render() {
    //     const { isLogin } = this.state;
    //     if (isLogin) {
    //         return (
    //             <ul>
    //                 <li>Ipad</li>
    //                 <li>MAC</li>
    //             </ul>
    //         )
    //     }
    //     return (
    //         <button onClick={() => {
    //             this.setState({ isLogin: true })
    //         }}>login</button>
    //     )
    // }
    render(){
        return(
            <ul>
                <li>ipad</li>
            </ul>
        )
    }
}
export default OrderList