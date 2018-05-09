import React, { Component } from 'react'

import Schedule from 'react-simple-schedule'

export default class App extends Component {
  render () {
    return (
      <div style={{
      	height: '100vw',
				maxHeight: '100vh'
      }}>
        <Schedule/>
      </div>
    )
  }
}
