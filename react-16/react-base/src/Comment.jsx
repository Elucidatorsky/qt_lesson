import React, { Component } from 'react'

class Input extends Component {
    state = { // 静态属性
        value: '_(:з」∠)_'
    }
    // 箭头函数 考虑到 this 指向class
    handleChange = (event) => {
        console.log('event',event);
        const value = event.target.value;
        this.setState({
            value
        })
    }
    // 单项数据流
    // input 受控组件 完全受 state.value 影响
    handleSubmit = () => {
        const { value } = this.state;
        const { onReceive } = this.props;
        // 回调函数
        onReceive(value);
        console.log('Input value',value);
    }
    render() {
        const { value } = this.state;
        return(
        <>
        <input type="text" value={value} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>submit</button>
        </>
        )
    }
}
class CommontList extends Component { // 子组件
    render() {
        const { clist } = this.props;
        return(
            <>
                {
                    clist.map((list, index) => {
                        return (
                            <li key={index}>
                                {list.content}
                            </li>
                        )
                    })
                }
            </>
        )
    }
}
class Comment extends Component { // 父组件
    state = {
        clist: [
            {
                content: 'awsl'
            }
        ] // 评论列表
    }
    handleReceiveComment = (value) => { // 子组件传给父组件 将其当成回调函数 传回去
        console.log('父组件value', value);
        // 不可变数据
        // this.state.clist.push({ content: value })
        let clist = this.state.clist.slice(0);
        clist.push({ content: value })
        this.setState({
            clist
        })
    }
    render() {
        const { clist } = this.state;
        return(
        <>
        <Input onReceive={this.handleReceiveComment}></Input>
        <CommontList clist={clist}></CommontList>
        </>
        )
    }
}

export default Comment