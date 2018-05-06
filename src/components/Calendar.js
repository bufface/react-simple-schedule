import React from 'react'
import dayjs from 'dayjs'
import style from 'styled-components'

import { Context } from './Provider'

const Day = style.div`
  width: 100%;
  text-align: right;
  pading: 5px;
  background-color: ${props => props.color || 'white'};
`

const renderCalendar = (selectedDate) => {
  const today = dayjs()
  const monthSelected = selectedDate.month()
  const startOfMonth = selectedDate.startOf('month')
  const endOfMonth = dayjs().endOf('month')
  let day = startOfMonth.startOf('week')

  const html = []
  let grid, firstIteration
  grid = firstIteration = 35
  while (grid) {
    let colorBg = ''

    if (grid !== firstIteration) day = day.add(1, 'day')

    const currentMonth = selectedDate.format('YYYY-MM') === day.format('YYYY-MM')
    if (currentMonth) {
      // Disabled days (before today)
      if (day.isBefore(today)) colorBg = 'lightgrey'

      // Enabled days (same or after selectedDate)
      const sameDay = selectedDate.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
      if ((day.isAfter(today) || sameDay)) colorBg = 'lightblue'
    }

    html.push(
      <Day color={colorBg} key={grid}>
        {day.format('D')}
      </Day>
    )
    grid--
  }

  return html
}

export default () => (
  <Context.Consumer>
    {({ state: { selectedDate }}) => (
      <React.Fragment>
        { renderCalendar(selectedDate) }
      </React.Fragment>
    )}
  </Context.Consumer>
)
