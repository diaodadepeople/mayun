import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import api from '@/api/home';
import Footer from '@/components/component/Footer';
import Kindbody from '@/components/kind/Kindbody';
// import store from '@/reducers';
import '@/components/component/Searchesstyle.scss'

class Kind extends Component {
  state = {
    searches : [],
    value: '',
    kindlist: []
  }

  // shouldComponentUpdate () {
  //   this.setState({
  //     searches: localStorage.searches ? JSON.parse(localStorage.searches) : []
  //   })
  // }
  componentDidMount () {
    this.setState({
      searches: localStorage.searches ? JSON.parse(localStorage.searches) : []
    })
    api.requestData().then(data => {
      let arr = []
      Object.values(data).map((item, index) => {
        arr = [...arr, ...item.class]
        return true
      })
      this.setState({
        kindlist: [...new Set(arr)]
      })
    })
  }

  // onSubmit = value => {
  //   if (this.state.searches === []) {
  //     this.state.searches.push({value})
  //   } else {
  //     for (let i = 0; i < this.state.searches.length; i++) {
  //       if (this.state.searches[i].value === value) {
  //         return
  //       }
  //     }
  //     this.state.searches.push({value})
  //   }
  //   localStorage.setItem('searches', JSON.stringify(this.state.searches));
  //   this.props.history.push({pathname:`/search/search=${value}`});
  // }

  render () {
    return (
      <>
        <SearchBar placeholder="Search" maxLength={8} onSubmit={ value => this.props.history.push({pathname:`/search/search=${value}`}) }/>
        {/* <div className = 'searches'>
          {
            Object.values(this.state.searches).map((item, index) => {
              return (
                <span key={ index } >{ item.value }</span>
              )
            })
          }
        </div> */}
        <Kindbody kindlist = { this.state.kindlist }/>
        <Footer />
      </>
    )
  }

}

export default Kind
