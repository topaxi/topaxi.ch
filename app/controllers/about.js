import Controller from 'ember-controller'
import moment     from 'moment'

export default Controller.extend({
  get myAge() {
    let today    = moment()
    let birthday = moment('1989-12-17')
    let age      = today.year() - birthday.year()
    let m        = today.month() - birthday.month()

    if (m < 0 || m === 0 && today.date() < birthday.date()) {
      return --age
    }

    return age
  }
})
