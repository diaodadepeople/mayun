import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '@/pages/Home';
import Kind from '@/pages/Kind';
import Cart from '@/pages/Cart';
import User from '@/pages/User';
import Detail from '@/pages/Detail';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Userinfo from '@/components/user/Userinfo';

class App extends Component {
  render () {
    return (
      <div className = "box">
        <Router>
          <Switch>
            <Route path="/home" component = { Home } />
            <Route path="/kind" component = { Kind } />
            <Route path="/cart" component = { Cart } />
            <Route path="/user" exact component = { User } />
            <Route path="/detail" component = { Detail } />
            <Route path="/login" component = { Login } />
            <Route path="/register" component = { Register } />
            <Route path="/search" component = { Search } />
            <Route path="/user/info" component = { Userinfo } />
            <Redirect path="/" to="/home" />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
