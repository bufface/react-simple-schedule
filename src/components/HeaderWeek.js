import React from 'react'

import { Context } from './Provider'

export default () => (
  <Context.Consumer>
    {({state: { listOfDays }}) => listOfDays.map(day => <span key={day}>{day}</span>)}
  </Context.Consumer>
)
