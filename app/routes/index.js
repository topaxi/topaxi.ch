import RSVP          from 'rsvp'
import Route         from 'ember-route'
import injectService from 'ember-service/inject'
import ENV           from '../config/environment'

const GITHUB_EVENTS = [ 'PushEvent', 'PullRequestEvent' ]

export default Route.extend({
  ajax:   injectService(),
  github: injectService(),

  getGithubEvents() {
    let gh = this.get('github')
    return gh.request('/users/topaxi/events/public', { data: { 'per_page': 5 } })
             .then(events => events.filter(e => GITHUB_EVENTS.includes(e.type)))
  },

  getLatestBlogPost() {
    return this.get('ajax')
      .request(`${ENV['topaxi.codes'].url}/ghost/api/v0.1/posts/`, {
        data: {
          'limit':         1,
          'include':       'tags,author',
          'client_id':     ENV['topaxi.codes'].clientId,
          'client_secret': ENV['topaxi.codes'].clientSecret
        }
      })
      .then(data => data.posts[0])
  },

  model() {
    return RSVP.hash({
      blog:   this.getLatestBlogPost(),
      github: this.getGithubEvents()
    })
  }
})
