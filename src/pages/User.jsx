import React, { Component } from 'react';
import Footer from '@/components/component/Footer.jsx';
import Userhead from '@/components/user/Userhead.jsx';
import Userbody from '@/components/user/Userbody.jsx';

class User extends Component {

  // goPageFn (type) {
  //   console.log(this)
  //   this.props.history.push(type)
  // }

  componentWillMount () {
    let log = localStorage.islogin ? localStorage.islogin : ''
    if (log !== 'e10adc3949ba59abbe56e057f20f883e') {
      this.props.history.push({pathname: '/login'})
    }
  }

  render () {
    return (
      <>
        <div className = "content">
          <Userhead />
          <Userbody />
        </div>
        <Footer />
      </>
    )
  }

}

export default User
