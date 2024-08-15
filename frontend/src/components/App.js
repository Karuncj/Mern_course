import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor () {
    super()
    this.state = {
      user: ''
    }
    this.handlePost = this.handlePost.bind(this)
  }

  handlePost () {
    axios.post('http://localhost/v1/users', { user: 'tom', city: 'toronto'})
    .then(response => console.log(response))
  }

  render () {
    return (
      <div className='button_container'>
        <button className='button' onClick={this.handlePost}>
          Post request
        </button>
      </div>
    )
  }
}
export default App
