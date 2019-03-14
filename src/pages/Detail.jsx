import React, {Component} from 'react';
import { Button } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import Header from '@/components/component/Header.jsx';
import '@/components/detail/Detailstyle.scss';
import api from '@/api/home';

class Detail extends Component{
  state = {
    detaildata: '',
    num: '1'
  }

  componentDidMount () {
    let path = this.props.location.pathname.slice(8);
    api.requestData().then(data => {
      this.setState({
        detaildata: data.find(n => n.id === path)
      })
    })
  }

  componentDidUpdate () {
    if (this.state.num < 1 || this.state.num === '') {
      this.setState({
        num: '1'
      })
    } else if (this.state.num > 99) {
      this.setState({
        num: '99'
      })
    }
  }

  numChange = event => {
    this.setState({
      num: event.target.value
    })
  }

  addnumClick = () => {
    this.setState({
      num: this.state.num - (-1)
    })
  }

  rednumClick = () => {
    this.setState({
      num: this.state.num - 1
    })
  }

  addCart = () => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    // let flag = Object.values(cart).findindex(n => n.data.id = this.state.detaildata.id)
    // cart === [] ? cart.push({data: this.state.detaildata, num: this.state.num}) :
    // flag ? cart[flag].data.num -= (-this.state.num) : cart.push({data: this.state.detaildata, num: this.state.num})
    if (cart === []) {
      cart.push({data: this.state.detaildata, num: this.state.num, checked: false})
    } else {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].data.id === this.state.detaildata.id) {
          cart[i].num -= -this.state.num
          localStorage.setItem('cart', JSON.stringify(cart))
          return
        }
      }
    }
    cart.push({data: this.state.detaildata, num: this.state.num})
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  
  render(){
    console.log(this.state.detaildata)
    return (
      <>
        <Header />
        <div className='content'>
          <div className='detailbox'>
            <div className='detailimg'>
              <img src={ this.state.detaildata.image } alt=""/> 
            </div>
            <div className='info'>
              <h3>{ this.state.detaildata.title }</h3>
              <h2>￥{ this.state.detaildata.price }</h2>
              <p>作者：{ this.state.detaildata.author }</p>
              <p>出版社：{ this.state.detaildata.press }</p>
            </div>
            <div className = 'detailinfo'>
              <ul>
                <li>
                  <span>数量：</span>
                  <div className= 'sum'>
                    <Button type="primary" size='small' inline='true' onClick = { this.rednumClick } >-</Button>
                    <input type="text" value={ this.state.num } pattern="[0-9]*" onChange = { this.numChange } />
                    <Button type="primary" size='small' inline='true' onClick = { this.addnumClick } >+</Button>
                  </div>
                </li>
                <li>
                  <h3>商品评价</h3>
                  <span>查看评价></span>
                </li>
                <li>
                  <h3>商品详情</h3>
                  <span>查看详情></span>
                </li>
              </ul>
            </div>
            <div className='explain'>
              <h3>价格说明</h3>
              <p>
                  划线价：
              商品展示的划横线价格为出版社全国统一定价；
              </p>
              <p>
                  折扣价：
              页面显示的折扣数（如6.0折），是以定价为基础的价格折扣；
              受系统缓存影响，商品的最终售价以订单结算页价格为准
              </p>
            </div>
            <div className='explain'>
              <h3>关于广告的说明</h3>
              <p>
              新广告法规定所有页面不得出现绝对化用词和功能性用词。本店非常支持新广告法，但为了不影响消费者正常购买，页面明显区域本店已在排查修改，对于不明显区域也将会逐步排查并修改，我们在此郑重声明：<span className='hs'>本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。</span>因极限用词引起的任何形式的商品赔付，本店不接受且不妥协。希望消费者理解并欢迎联系客服帮助完善，也请职业打假人士高抬贵手。
              </p>
            </div>
          </div>
        </div>
        <div className ='detailfooter'>
          <div className ='detailfooter-l'>
            <NavLink className='footernav' to = "/home">
              <span className="iconfont icon-shouye"></span>
              <p>首页</p>
            </NavLink >
            <NavLink className='footernav' to = "/kind">
              <span className="iconfont icon-search"></span>
              <p>收藏</p>
            </NavLink >
            <NavLink className='footernav' to = "/cart">
              <span className="iconfont icon-gouwuche"></span>
              <p>购物车</p>
            </NavLink >
          </div>
          <div className ='detailfooter-r'>
            <div className = 'red' onClick = { this.addCart } >加入购物车</div>
            <div>立即购买</div>
          </div>
        </div>
      </>
    )
  }
} 

export default Detail
