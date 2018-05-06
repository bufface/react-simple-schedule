import React from 'react'
import style from 'styled-components'

import { Context } from './Provider'

const DayName = style.span`
  text-align: center;
  border-top: 1px solid lightgrey;
`

export default () => (
  <Context.Consumer>
    {({state: { listOfDays }}) => listOfDays.map(day => <DayName key={day}>{day}</DayName>)}
  </Context.Consumer>
)
