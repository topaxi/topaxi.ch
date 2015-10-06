import Ember from 'ember'
import config from './config/environment'

const { on } = Ember

const Router = Ember.Router.extend({
  location: config.locationType,

  notifyGoogleAnalytics: on('didTransition', function() {
    if (window.ga) {
      let url = this.get('url')

      return window.ga('send', 'pageview', {
        page:  url,
        title: url
      })
    }
  })
})

Router.map(function() {
  this.route('index', { path: '/' })
  this.route('about')
  this.route('portfolio', function() {
    this.route('project', { path: '/:slug' })
  })
  this.route('notfound', { path: '/*path' })
})

export default Router
