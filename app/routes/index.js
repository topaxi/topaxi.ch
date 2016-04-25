import Route         from 'ember-route'
import injectService from 'ember-service/inject'
import ENV           from '../config/environment'

export default Route.extend({
  ajax: injectService(),

  model() {
    return this.get('ajax')
      .request(`${ENV['topaxi.codes'].url}/ghost/api/v0.1/posts/`, {
        data: {
          limit:         1,
          include:       'tags,author',
          client_id:     ENV['topaxi.codes'].clientId,
          client_secret: ENV['topaxi.codes'].clientSecret
        }
      })
      .then(data => data.posts[0])
  }
})
