import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Userheadstyle.scss';

class UserHead extends Component {
  state = {
    user: ''
  }

  componentDidMount () {
    this.setState({
      user: localStorage.user
    })
  }
  render () {
    return (
      <div className = 'userhead'>
        <div className = 'img'>
          <img src="//static.winxuancdn.com/goods/def_comment.png" alt="" />
          <p>您好，来自文轩网的{ this.state.user }</p>
        </div>
        <div className = 'collection'>
          <div>
            <p>0</p>
            <p>我的收藏</p>
          </div>
          <div>
            <p>0</p>
            <p>我的足迹</p>
          </div>
        </div>
        <Link to = '/user/info'>
          <span className = 'iconfont icon-shezhi'></span>
        </Link>
      </div>
    )
  }
}

export default UserHead
