import Controller from 'ember-controller'
import computed   from 'ember-computed'

export default Controller.extend({
  year: computed(() => new Date().getFullYear()).volatile()
})
