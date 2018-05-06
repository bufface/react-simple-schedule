import React from 'react'
import dayjs from 'dayjs'
import style from 'styled-components'

import { Context } from './Provider'

const MonthName = style.span`
  grid-column: span 5;
  text-align: center;
`

export default () =>(
  <Context.Consumer>
    {({ prevMonth, nextMonth, state: { selectedDate }}) => (
      <React.Fragment>
        <button onClick={ prevMonth }>Back</button>
        <MonthName>{ selectedDate.format('MMM / YYYY') }</MonthName>
        <button onClick={ nextMonth }>Next</button>
      </React.Fragment>
    )}
  </Context.Consumer>
)
