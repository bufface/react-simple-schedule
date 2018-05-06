import React from 'react'
import PropTypes from 'prop-types'
import style from 'styled-components'
import dayjs from 'dayjs'

import Provider from './components/Provider'
import Header from './components/Header'
import HeaderWeek from './components/HeaderWeek'
import Calendar from './components/Calendar'

const Container = style.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(30px, 100px));
  grid-template-rows: 1fr 1fr;
  grid-auto-rows: 100px;
  justify-items: center;
  border: 1px solid lightgrey;
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
  selectedDate: PropTypes.object,
  listOfDays: PropTypes.arrayOf(PropTypes.string)
}

Schedule.defaultProps = {
  selectedDate: dayjs(),
  listOfDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

export default Schedule
