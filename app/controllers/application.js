import Controller from 'ember-controller'
import computed   from 'ember-computed'

export default Controller.extend({
  year: computed(function() {
    return (new Date).getFullYear()
  }).volatile()
})
