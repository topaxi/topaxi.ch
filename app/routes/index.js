import RSVP          from 'rsvp'
import Route         from 'ember-route'
import injectService from 'ember-service/inject'

const GITHUB_EVENTS = [
  'PushEvent',
  'PullRequestEvent',
  'CreateEvent',
  'ForkEvent'
]

export default Route.extend({
  github:      injectService(),
  topaxiCodes: injectService(),

  getGithubEvents() {
    let gh = this.get('github')
    return gh.request('/users/topaxi/events/public', { data: { 'per_page': 15 } })
             .then(events => events.filter(e => GITHUB_EVENTS.includes(e.type)))
             .then(events => events.slice(0, 5))
  },

  getLatestBlogPost() {
    let topaxiCodes = this.get('topaxiCodes')
    return topaxiCodes.request('/posts/', {
        data: {
          limit:   1,
          include: 'tags,author'
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
