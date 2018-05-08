import React from 'react'
import dayjs from 'dayjs'
import style from 'styled-components'

import { Context } from './Provider'
import highlightDays from '../helpers/highlightDays'

const Day = style.div`
  text-align: right;
  padding: 5px;
  background-color: ${props => props.colorBg || 'white'};
`

const renderCalendar = (selectedDate, highlight) => {
  const today = dayjs()
  let day = selectedDate.startOf('month').startOf('week')

  const html = []
  let grid, firstIteration
  grid = firstIteration = 42
  while (grid) {
    if (grid !== firstIteration) day = day.add(1, 'day')

    let props = {}
    if (highlight) props = highlightDays(selectedDate)

    html.push(
      <Day { ...props } key={grid}>
        {day.format('D')}
      </Day>
    )
    grid--
  }

  return html
}

export default () => (
  <Context.Consumer>
    {({ state: { selectedDate, highlight }}) => renderCalendar(selectedDate, highlight)}
  </Context.Consumer>
)
