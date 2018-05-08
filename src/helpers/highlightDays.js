import dayjs from 'dayjs'

export default (selectedDate, day) => {
  const today = dayjs()
  const props = {}
  const currentMonth = selectedDate.format('YYYY-MM') === day.format('YYYY-MM')

  if (currentMonth) {
    // Disabled days (before today)
    if (day.isBefore(today)) props.before = true

    // Enabled days (same or after selectedDate)
    const sameDay = today.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
    if ((day.isAfter(today) || sameDay)) props.active = true
  }

  return props;
}
