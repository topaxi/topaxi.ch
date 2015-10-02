import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('index', { path: '/' })
  this.route('about')
  this.route('notfound', { path: '/*path' })
})

export default Router
