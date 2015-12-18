import Controller from 'ember-controller'

export default Controller.extend({
  get myAge() {
    let today    = new Date
    let birthday = new Date('1989-12-17')
    let age      = today.getFullYear() - birthday.getFullYear()
    let m        = today.getMonth() - birthday.getMonth()

    if (m < 0 || m === 0 && today.getDate() < birthday.getDate()) {
      return --age
    }

    return age
  }
})
