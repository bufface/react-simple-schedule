import React from 'react'
import style, { css } from 'styled-components'
import dayjs from 'dayjs'

import { Context } from './Provider'
import highlightDays from '../helpers/highlightDays'

const Day = style.div`
  font-size: 13px;
  padding: 3px;
  text-align: right;
  background-color: white;
  border: 1px solid lightslategray;

  ${props => props.before && css`
    color: white;
    background-color: lightgrey;
    border: none;
  `}

  ${props => props.active && css`
    color: white;
    background-color: lightblue;
    border: none;
  `}

  ${props => props.disabled && css`color: lightgrey;`}
`

const renderCalendar = (selectedDate, dates, highlight) => {
  const html = []
  let day = selectedDate.startOf('month').startOf('week')
  let grid, firstIteration

  grid = firstIteration = 42
  while (grid) {
    if (grid !== firstIteration) day = day.add(1, 'day')

    let props = {}
    if (highlight) props = highlightDays(selectedDate, day)

    const currentMonth = selectedDate.format('YYYY-MM') === day.format('YYYY-MM')
    if (!currentMonth) props.disabled = true;

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
    {({ state: { selectedDate, dates, highlight }}) => renderCalendar(selectedDate, dates, highlight)}
  </Context.Consumer>
)
