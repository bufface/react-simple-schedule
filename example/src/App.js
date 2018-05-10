import React, { Component } from 'react'
import Schedule from 'react-simple-schedule'
import style from 'styled-components'

import dates from './mock'

const Div = style.div`
  background: red;
`

export default class App extends Component {
  render () {
    const parsedDates = dates.map(date => ({
      date: date.fecha.split('/').reverse().join('-'),
      component: <Div>Testing</Div>
    }))

    return (
      <div>
        <Schedule dates={parsedDates} />
      </div>
    )
  }
}
