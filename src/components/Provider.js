import React from 'react'
import dayjs from 'dayjs'

export const Context = React.createContext()
class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.data}
  }

  prevMonth = () => this.setState({selectedDate: this.state.selectedDate.subtract(1, 'month')})
  nextMonth = () => this.setState({selectedDate: this.state.selectedDate.add(1, 'month')})

  render = () => <Context.Provider value={{
    state: this.state,
    prevMonth: this.prevMonth,
    nextMonth: this.nextMonth
  }}>{ this.props.children }</Context.Provider>
}

export default Provider
