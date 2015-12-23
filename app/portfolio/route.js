import Route    from 'ember-route'
import projects from './projects'

export default Route.extend({
  model() {
    return projects
  }
})
