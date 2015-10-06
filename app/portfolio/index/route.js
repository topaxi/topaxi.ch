import Route from 'ember-route'

export default Route.extend({
  beforeModel() {
    let [ first ] = this.modelFor('portfolio')
    this.transitionTo('portfolio.project', first)
  }
})
