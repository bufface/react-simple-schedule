import React from 'react'
import style from 'styled-components'

import { Context } from './Provider'
import { FullWidth } from '../styles/commons'

const DayName = style.span`
  text-align: center;
  width: 100%;
`

export default () => (
  <Context.Consumer>
    {({state: { listOfDays }}) => (
      <FullWidth>{listOfDays.map(day => <DayName key={day}>{day}</DayName>)}</FullWidth>
    )}
  </Context.Consumer>
)
