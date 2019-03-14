import React, { Component } from 'react';
import { Icon, Button } from 'antd-mobile';
import Header from '@/components/component/Header.jsx';
import  './Userinfostyle.scss';

class Userinfo extends Component {
  state = {
    user: ''
  }

  componentDidMount () {
    let log = localStorage.islogin ? localStorage.islogin : ''
    if (log !== 'e10adc3949ba59abbe56e057f20f883e') {
      this.props.history.push({pathname: '/login'})
    }
    this.setState({
      user: localStorage.user
    })
  }

  logout = () => {
    localStorage.setItem('islogin', '')
    localStorage.setItem('user', '')
    this.props.history.push({pathname:'/home'});
  }

  render () {
    return (
      <>
        <Header />
        <ul className = 'userinfo'>
          <li>
            <span>用户名</span>
            <span>{ this.state.user }</span>
          </li>
          <li>
            <span>个人信息</span>
            <Icon type="right" />
          </li>
          <li>
            <span>我的收货地址</span>
            <Icon type="right" />
          </li>
          <li>
            <span>安全中心</span>
            <Icon type="right" />
          </li>
          <li>
            <span>账号与绑定设置</span>
            <Icon type="right" />
          </li>
        </ul>
        <Button className='logout' type="warning" style={{margin: '.2rem'}} onClick={this.logout}>退出当前账户</Button>
      </>
    )
  }
}

export default Userinfo
