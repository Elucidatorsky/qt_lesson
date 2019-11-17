import React, {
  Component
} from 'react';
import axios from './axios';
import { Pagination } from 'antd';
import { Spin } from 'antd';
import {Link} from 'react-router-dom';
import './App.css';

const perSize = 40;
const tabMap = {
  'ask': '问答',
  'job': '招聘',
  'share': '分享',
  'good': '精华',
  'all': '全部'
}
class Home extends Component {
  state = {
    current: 1,
    tab: 'all',
    limit: perSize,
    list: [],
    isLoding: false
  }
  componentDidMount() {
    this.handleRequestList();
  }
  handleRequestList = () => {
    this.setState({
      isLoding: true
    })
    const { tab, limit,
       current} = this.state;
    axios.get(`/topics?tab=${tab}&limit=${limit}&page=${current}`)
    .then(res => {
      console.log(res.data);
      this.setState({
        list: res.data,
        isLoding: false
      })
    })
  }
  handleChangetab = (key) => {
    // onClick
    return (e) => {
      this.setState({
        tab: key
      }, () => {
        this.handleRequestList();
      })
    }
  }
  onChange = page => {
    this.setState({
      current: page
    }, () => {
      this.handleRequestList();
    })
  }
  render() {
    const { list, tab, isLoding } = this.state;
    return (
      <div>
        Home
        <ul>
          {
            Object.keys(tabMap).map(
              (key, i) => {
                return (
                  <li
                  style={{
                    color: tab === key ? 'red' : ''
                  }}
                  onClick={this.handleChangetab(key)}
                  >{tabMap[key]}</li>
                )
            })
          }
        </ul>
        <Spin spinning={isLoding}>
          {/* title: "Node 12 值得关注的新特性",
last_reply_at: "2019-11-14T03:26:25.525Z",
good: false,
top: true,
reply_count: 77,
visit_count: 250348,
create_at: "2019-04-24T03:36:12.582Z",
author: {
loginname: "atian25",
avatar_url: "https://avatars2.githubusercontent.com/u/227713?v=4&s=120"
} */}
          {
            list.data && list.data.map((dis, i) => {
              return (
                <Link to={`/topic/${dis.id}`}>
                <li key={`dis${i}`}>
                  <img src={dis.author.avatar_url} alt=""/>
                  <span>{dis.author.loginname}</span>
                  <h2>{dis.title}</h2>
                </li>
                </Link>
              )
            })
          }
        </Spin>
        <Pagination 
         current={this.state.current}
         onChange={this.onChange} 
         total={50} />
      </div>
    )
  }
}
export default Home;
