import React from 'react'
import dayjs from 'dayjs'
import style from 'styled-components'

import { Context } from './Provider'
import { FullWidth } from '../styles/commons'

const MonthName = style.h4`
  margin: 0;
`

export default () =>(
  <Context.Consumer>
    {({ prevMonth, nextMonth, state: { selectedDate }}) => (
      <FullWidth>
        <button onClick={ prevMonth }>Back</button>
        <MonthName>{ selectedDate.format('MMM / YYYY') }</MonthName>
        <button onClick={ nextMonth }>Next</button>
      </FullWidth>
    )}
  </Context.Consumer>
)
