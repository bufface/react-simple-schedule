import React from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'
import dayjs from 'dayjs'

const Container = style.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(7, minmax(30px, 100px));
  grid-template-rows: 1fr;
  grid-auto-rows: 100px;
  justify-items: center;
`

const Day = style.div`
  background-color: ${props => props.color || 'white'};
  width: 100%;
  text-align: right;
`

const printDaysName = () =>
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
    <span key={day}>{day}</span>
  ))

const DrawDays = date => {
  const monthSelected = date.month()
  const startOfMonth = dayjs(date).startOf('month')
  const endOfMonth = dayjs().endOf('month')
  let day = dayjs(startOfMonth).startOf('week')

  const html = []
  let grid, firstIteration
  grid = firstIteration = 35
  while (grid) {
    let colorBg = 'white'

    if (grid !== firstIteration) day = day.add(1, 'day')

    // Disabled days (before today)
    if ((day.isBefore(date) && day.isAfter(startOfMonth)) || day.isSame(startOfMonth))
      colorBg = 'lightgrey'

    // Enabled days (same or after today)
    const sameDay = date.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
    if ((day.isAfter(date) || sameDay) && day.isBefore(endOfMonth)) colorBg = 'lightblue'

    html.push(
      <Day color={colorBg} key={grid}>
        {day.format('D')}
      </Day>
    )
    grid--
  }

  return html
}

const Schedule = ({ date }) => (
  <Container>
    {printDaysName()}
    {DrawDays(date)}
  </Container>
)

Schedule.propTypes = {
  date: PropTypes.object
}

Schedule.defaultProps = {
  date: dayjs()
}

export default Schedule
