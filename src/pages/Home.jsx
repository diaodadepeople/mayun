import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import api from '@/api/home';
import Carousels from '@/components/home/Carousel';
import Navbox from '@/components/home/Navbox.jsx';
import List from '@/components/home/List.jsx';
import Footer from '@/components/component/Footer.jsx';
// import store from '@/reducers';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listdata: [],
      bannerdata: []
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data)
      // let arr = []
      // Object.values(data).map((item, index) => {
      //   arr = [...arr, ...item.class]
      //   return true
      // })
      // store.dispath({type: "KIND_DATA", data: [...new Set(arr)]})
      // store.dispath({type: 'BOOK_DATA', data})
      this.setState({
        listdata: data
      })
    })
    api.requestBannerData().then(data => {
      // store.dispath({type: 'BANNER_DATA', data})
      this.setState({
        bannerdata: data
      })
    })
  }

  render () {
    return (
      <>
        <SearchBar placeholder="Search" maxLength={8} onSubmit={ value => this.props.history.push({pathname:`/search/search=${value}`}) }/>
        <div className = "content">
          <Carousels bannerdata = { this.state.bannerdata }/>
          <Navbox />
          <List list = { this.state.listdata }/>
        </div>
        <Footer />
      </>
    )
  }

}

export default Home
