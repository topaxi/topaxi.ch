import Ember from 'ember'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function pad(n) {
  return n < 10 ? '0' + n : n // eslint-disable-line
}

export function dateToString(args) {
  let date = new Date(args[0])
  let day = pad(date.getDate())
  let month = MONTHS[date.getMonth()]
  let year = date.getFullYear()

  return `${day} ${month} ${year}`
}

export default Ember.Helper.helper(dateToString);
