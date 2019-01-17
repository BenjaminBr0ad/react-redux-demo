import React, { Component } from 'react'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import Cart from './components/Cart'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <NavBar/>
        </div>
        <div className="row">
          <div className="col-8">
            <BookList/>
          </div>
          <div className="col-4">
            <Cart/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
