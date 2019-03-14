import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import api from '@/api/home';
import '@/components/component/Searchstyle.scss'
// import creatHistory from 'history/createHashHistory';

// const history = creatHistory();

class Search extends Component {
  state = {
    searchdata: ''
  }

  componentDidMount () {
    let path = this.props.location.pathname.slice(8),
    info = path.slice(path.indexOf('=') + 1)
    this.setState({
      searches: localStorage.searches ? JSON.parse(localStorage.searches) : []
    })
    api.requestData().then(data => {
      let arr = []
      if (path[0] === 'k') {
        Object.values(data).map((item, index) => {
          if (item.class.find(n => n === info) === undefined) {
            return arr
          } else {
            return arr = [...arr, item]
          }
        })
      } else if (path[0] === 's') {
        Object.values(data).map((item, index) => {
          if (item.title.indexOf(info) === -1) {
            return arr
          } else {
            return arr = [...arr, item]
          }
        })
      }
      console.log(arr)
      this.setState({
        searchdata: arr
      })
    })
  }

  // componentDidUpdate () {
  //   this.addCart = (item) => {
  //     // console.log(item)
  //     let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  //     if (cart === []) {
  //       cart.push({data: item, num: 1})
  //     } else {
  //       for (let i = 0; i < cart.length; i++) {
  //         if (cart[i].data.id === item.id) {
  //           cart[i].num -= -1
  //           localStorage.setItem('cart', JSON.stringify(cart))
  //           return
  //         }
  //       }
  //     }
  //     cart.push({data: this.state.detaildata, num: this.state.num})
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //   }
  // }

  render () {
    return (
      <>
        {/* <Icon type="left" onClick = {() => history.goBack()}/> */}
        <SearchBar placeholder="Search" maxLength={8} onSubmit={ value => this.props.history.push({pathname:`/search/search=${value}`}) }/>
        <div className= 'content'>
          {
            Object.values(this.state.searchdata).map((item, index) => {
              return (
                <Link to = { '/detail/' + item.id } key = { item.id }>
                  <div className="bookimg">
                    <img src={ item.image } alt={ item.alt } />
                  </div>
                  <div className="info-m">
                    <h3>{ item.title }</h3>
                    <p>{ item.author }</p>
                    <div className='info-b'>
                      <h2>{ item.price }</h2>
                      {/* <span className="iconfont icon-gouwuche" onClick = { this.addCart(item) }></span> */}
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default Search
