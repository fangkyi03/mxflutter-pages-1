import React, { Component } from 'react'
import apiTool from '../command/apiTool';
import Header from 'next/head'

export default class Error extends Component {

  componentDidMount() {
    apiTool.jumpRouter('404')
  }
  
  render() {
    return (
      <div
      >
        <Header>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"> 
          </script> 
        </Header>
      </div>
    )
  }
}
