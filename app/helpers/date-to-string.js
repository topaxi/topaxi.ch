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
  return n < 10 ? '0' + n : n;
}

export function dateToString(args) {
  let date = new Date(args[0])

  return `${pad(date.getDate())} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

export default Ember.Helper.helper(dateToString);
