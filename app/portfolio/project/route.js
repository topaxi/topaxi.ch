import Route from 'ember-route'

export default Route.extend({
  model({ slug }) {
    return this.modelFor('portfolio').find(project => project.slug === slug)
  }
})
