import React from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'
import dayjs from 'dayjs'

import Provider from './components/Provider'
import Header from './components/Header'
import HeaderWeek from './components/HeaderWeek'
import Calendar from './components/Calendar'

const Container = style.div`
  font-family: sans-serif;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, minmax(30px, 1fr));
  grid-gap: 5px;
  grid-template-rows: auto auto;
  grid-auto-rows: minmax(30px, 1fr);
`

const Schedule = (props) => (
  <Provider data={ props }>
    <Container>
      <Header />
      <HeaderWeek />
      <Calendar />
    </Container>
  </Provider>
)

Schedule.propTypes = {
  highlight: PropTypes.bool,
  selectedDate: PropTypes.object,
  listOfDays: PropTypes.arrayOf(PropTypes.string)
}

Schedule.defaultProps = {
  highlight: false,
  selectedDate: dayjs(),
  listOfDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

export default Schedule
