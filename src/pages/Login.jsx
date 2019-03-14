import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Icon, InputItem, Button } from 'antd-mobile';
import api from '@/api/reg';

class Login extends Component {
  state = {
    phone : '',
    password : '',
    loginflag: true
  }

  phoneChange = value => {
    this.setState({
      phone: value
    })
    // if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value) === true) {
    //   this.setState({
    //     regflag: false
    //   })
    // } else {
    //   this.setState({
    //     regflag: true
    //   })
    // }
    console.log(this.state.phone)
  }

  passChange = value => {
    this.setState({
      password: value
    })
    if (/^(\w){6,20}$/.test(value) === true) {
      this.setState({
        loginflag: false
      })
    } else {
      this.setState({
        loginflag: true
      })
    }
    // console.log(/^(\w){6,20}$/.test(value))
  }

  login = () => {
    api.reqUser(this.state.phone.replace(/\s*/g,"")).then(data => {
      console.log(data)
      if (data.data === 0) {
        console.log('用户名或密码错误')
      } else if (data.data[0].password === 'e10adc3949ba59abbe56e057f20f883e') {
        localStorage.setItem('user', this.state.phone.replace(/\s*/g,""))
        localStorage.setItem('islogin', 'e10adc3949ba59abbe56e057f20f883e')
        this.props.history.push({pathname:'/user'});
      } else {
        console.log('用户名或密码错误')
      }
    })
  }
  
  render () {
    return (
      <div className = "content">
        <NavBar
          mode="light"
          icon={<Link to= '/home'><Icon type="left" /></Link>}
          // onLeftClick={() => console.log('onLeftClick')}
          style={{margin: '0 0 .2rem 0'}}
        >登录</NavBar>
          <InputItem
            onChange = {this.phoneChange}
            type="phone"
            placeholder="请输入手机号"
          >手机号码</InputItem>
          <InputItem
            onChange = {this.passChange}
            type="password"
            placeholder="请输入密码"
          >密码</InputItem>
          <Button type="primary" disabled={this.state.loginflag} style={{margin: '.2rem'}} onClick = {this.login}>登录</Button>
          <Link to= '/register' style={{ color:'blue' }}>没有账号去注册?</Link>
      </div>
    )
  }

}

export default Login
