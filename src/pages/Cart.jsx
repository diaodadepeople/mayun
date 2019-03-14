import React, { Component } from 'react'
import Footer from '@/components/component/Footer.jsx';
import { NavBar, Icon, Button, Checkbox } from 'antd-mobile';
import '@/components/cart/Cartstyle.scss';
import creatHistory from 'history/createHashHistory';

const history = creatHistory();
const CheckboxItem = Checkbox.CheckboxItem;

class Cart extends Component {
  state = {
    cartdata: [],
    total: 0
  }

  componentWillMount () {
    let log = localStorage.islogin ? localStorage.islogin : ''
    if (log !== 'e10adc3949ba59abbe56e057f20f883e') {
      this.props.history.push({pathname: '/login'})
    }
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    this.setState({
      cartdata: cart
    })
  }

  numChange = (e, i) => {
    this.setState({
      cartdata: this.state.cartdata.map((item, index) => {
        if (index === i) {
          item.num = e.target.value
          if (item.num === '') {
            item.num = 1
          } else if (item.num > 99) {
            item.num = 99
          }
          return item
        } else {
          return item
        }
      })
    })
    this.totalPrice()
  }

  rednumClick = (e, i) => {
    this.setState({
      cartdata: this.state.cartdata.map((item, index) => {
        if (index === i) {
          item.num -= 1
          if (item.num < 1) {
            item.num = 1
          }
          return item
        } else {
          return item
        }
      })
    })
    this.totalPrice()
  }

  addnumClick = (e, i) => {
    this.setState({
      cartdata: this.state.cartdata.map((item, index) => {
        if (index === i) {
          item.num -= -1
          if (item.num > 99) {
            item.num = 99
          }
          return item
        } else {
          return item
        }
      })
    })
    this.totalPrice()
  }

  totalPrice = () => {
    let sum = 0
    this.state.cartdata.forEach((item, index) => {
      if (item.checked === true) {
        sum += item.num * item.data.price 
      }
    })
    this.setState({
      total: sum.toFixed(2)
    })
    localStorage.setItem('cart', JSON.stringify(this.state.cartdata))
  }

  checkAll = (e) => {
    if (e.target.checked === true) {
      this.setState({
        cartdata: this.state.cartdata.map(item => {
          item.checked = true
          return item
        })
      })
    } else {
      this.setState({
        cartdata: this.state.cartdata.map(item => {
          item.checked = false
          return item
        })
      })
    }
    this.totalPrice()
  }

  checkChange = (e, i) => {
    this.setState({
      cartdata: this.state.cartdata.map((item, index) => {
        if (index === i) {
          item.checked = !item.checked
        }
        return item
      })
    })
    let cartFlag = this.state.cartdata.every((item, index) => {
      if (item.checked === false) {
        return false
      } else {
        return true
      }
    })
    this.refs.checkAll.checked = cartFlag
    // console.log(this.refs.checkAll.checked)
    this.totalPrice()
  }

  settle = () => {
    let arr = []
    this.state.cartdata.forEach(item => {
      if (item.checked !== true) {
        arr.push(item)
      }
    })
    this.setState({
      cartdata: arr
    })
    localStorage.setItem('cart', JSON.stringify(arr))
    this.setState({
      total: 0
    })
  }

  render () {
    return (
      <>
        <NavBar
          mode="light"
          icon={<Icon type="left" onClick = {() => history.goBack()}/>}
          // onLeftClick={() => console.log('onLeftClick')}
          // rightContent={[
          //   <span style={{ marginRight: '16px' }}>编辑</span>,
          //   <span>客服</span>,
          // ]}
        >购物车</NavBar>
        <div className = "content">
          {
            this.state.cartdata.map((item, index) => {
              return (
                <div className='cartbox' key={ index }>
                  <CheckboxItem checked={item.checked} onChange={(e) => { this.checkChange(e, index) }}/>
                  <div className="bookimg">
                    <img src={ item.data.image } alt={ item.alt } />
                  </div>
                  <div className="info-m">
                    <h3>{ item.data.title }</h3>
                    <span className='red'>{ item.data.price }</span>
                    <div className= 'sum'>
                      <Button type="primary" size='small' inline='true' onClick = {e => this.rednumClick(e, index) } >-</Button>
                      <input type="text" value={ item.num } ref='nums' pattern="[0-9]*" onChange = {e => this.numChange(e, index) }/>
                      <Button type="primary" size='small' inline='true' onClick = {e => this.addnumClick(e, index) } >+</Button>
                      小计：<span className='red'>{ (item.num * item.data.price).toFixed(2) }</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className= 'cart-b'>
          <div className= 'total'>
            <input type='checkbox' ref='checkAll'  onChange = { (e) => this.checkAll(e) }/>
            <p>合计：<span>￥{ this.state.total }</span></p>
          </div>
          <div className= 'settle' onClick= { this.settle }>结算</div>
        </div>
        <Footer />
      </>
    )
  }

}

export default Cart
