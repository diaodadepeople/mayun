import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footerstyle.scss'

const Footer = () => {
  return (
    <footer className = "footer">
      <NavLink className='footernav' to = "/home">
        <span className="iconfont icon-shouye"></span>
        <p>首页</p>
      </NavLink >
      <NavLink className='footernav' to = "/kind">
        <span className="iconfont icon-search"></span>
        <p>分类搜索</p>
      </NavLink >
      <NavLink className='footernav' to = "/cart">
        <span className="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </NavLink >
      <NavLink className='footernav' to = "/user">
        <span className="iconfont icon-profile"></span>
        <p>我的文轩</p>
      </NavLink >
    </footer>
  )
}

export default Footer
