import React from 'react'
import style from 'styled-components'

import { Context } from './Provider'

const DayName = style.span`
  margin: 5px 0;
  text-align: center;
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
`

export default () => (
  <Context.Consumer>
    {({state: { listOfDays }}) => listOfDays.map(day => <DayName key={day}>{day}</DayName>)}
  </Context.Consumer>
)
