import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,

  notifyGoogleAnalytics: function() {
    if (window.ga) {
      let url = this.get('url')

      window.ga('send', 'pageview', {
        page:  url,
        title: url
      })
    }
  }.on('didTransition')
})

Router.map(function() {
  this.route('index', { path: '/' })
  this.route('about')
  this.route('notfound', { path: '/*path' })
})

export default Router
