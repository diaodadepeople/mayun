import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Icon, InputItem, Button } from 'antd-mobile';
import api from '@/api/reg';

class Reg extends Component {
  state = {
    phone : '',
    password : '',
    regflag: true
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
    // console.log(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value))
  }

  passChange = value => {
    this.setState({
      password: value
    })
    if (/^(\w){6,20}$/.test(value) === true) {
      this.setState({
        regflag: false
      })
    } else {
      this.setState({
        regflag: true
      })
    }
    // console.log(/^(\w){6,20}$/.test(value))
  }

  reg = () => {
    api.regDb({tel: this.state.phone.replace(/\s*/g,""), password: this.state.password}).then(data => {
      if (data.data === 0) {
        console.log('该手机号已被注册')
      } else if (data.data === 1) {
        // api.reqCapt(this.phone).then(data => {
        //   console.log(data)
        //   // if (data === 1) {
        //   //   Toast('该手机号已被注册')
        //   // } else
        //   if (data === 2) {
        //     console.log('获取验证码失败')
        //   } else {
        //     this.veriCode = data.code
        //   }
        // })
        // this.props.history.push({pathname:'/user',state:{value: this.state.phone}});
        this.props.history.push({pathname:'/login'});
      }
    })
  }

  render () {
    return (
      <>
        <div className = "content">
        <NavBar
          mode="light"
          icon={<Link to= '/home'><Icon type="left" /></Link>}
          // onLeftClick={() => console.log('onLeftClick')}
          style={{margin: '0 0 .2rem 0'}}
        >注册</NavBar>
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
          <Button type="primary" disabled={this.state.regflag} style={{margin: '.2rem'}} onClick = {this.reg}>注册</Button>
          <Link to= '/login' style={{ color:'blue' }}>已有账号去登录</Link>
        </div>
      </>
    )
  }
}

export default Reg
