import React from 'react';
import { connect } from 'react-redux'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChage = (e) => {
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    // console.log(this.props)
    const { todolist } = this.props;
    return (
      <div>
        {/* key父节点下面 唯一就行 */}
        {
          todolist.map((item, i) => {
            return (
              <li key={i}>
                {item.content}
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChage}/>
          <button onClick={()=>{
            console.log(this.state.inputText)
            this.props.addTodo(this.state.inputText)
            // store.dispatch
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// state 映射到 props
const mapStatetoProps = (state) =>{
  console.log(state);
  return {
    todolist: state
  }
}
// dispatch 映射到 props
//  <App a={1} b={2}></App>
// payload 载荷
const mapDispatchToProps = (dispatch) => {
  return{
    addTodo(content) { // 传给组件的props
      dispatch({ // 发送dispatch参数 提交的时候要发送dispatch
        type: 'ADD_TODO', // 对象字面量
        content
      })
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
