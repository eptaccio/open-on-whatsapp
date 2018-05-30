import React, { Component } from 'react'
import './App.css'

import {
  WiredButton,
  WiredInput
} from 'react-wired'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      number: ''
    }
  }

  openWpp = number => window.open(`https://api.whatsapp.com/send?phone=${number}`)

  render () {
    return (
      <div className='App'>
        <h1 className='App-title'>Enter the number</h1>
        <WiredInput placeholder='ex: 554499678542' onChange={event => this.setState({ number: event.target.value })} />
        <WiredButton text='Call on whatsapp' onClick={() => this.openWpp(this.state.number)} />
      </div>
    )
  }
}

export default App
