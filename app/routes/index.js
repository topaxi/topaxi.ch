import Route         from 'ember-route'
import injectService from 'ember-service/inject'
import computed      from 'ember-computed'
import ENV           from '../config/environment'

export default Route.extend({
  ajax: injectService(),
  fastboot: injectService(),
  firstVisit: true,
  post: computed({
    get() {
      return this.get('fastboot.shoebox').retrieve('codes-store')
    },
    set(key, value) {
      if (this.get('fastboot.isFastBoot')) {
        this.get('fastboot.shoebox').put('codes-store', value)
      }

      return value
    }
  }),
  fetchData: computed('fastboot.isFastBoot', 'firstVisit', 'post',
    function() {
      return this.get('fastboot.isFastBoot') ||
        !this.get('post') ||
        !this.get('firstVisit')
    }
  ),

  model() {
    if (this.get('fetchData')) {
      return this.get('ajax')
        .request(`${ENV['topaxi.codes'].url}/ghost/api/v0.1/posts/`, {
          data: {
            limit:         1,
            include:       'tags,author',
            client_id:     ENV['topaxi.codes'].clientId, // eslint-disable-line
            client_secret: ENV['topaxi.codes'].clientSecret // eslint-disable-line
          }
        })
        .then(data => data.posts[0])
        .then(post =>
          ({
            url: post.url,
            title: post.title,
            html: post.html,
            author: {
              name:  post.author.name,
              image: post.author.image,
              slug:  post.author.slug
            },
            tags: post.tags.map(tag => ({
              slug: tag.slug,
              name: tag.name
            })),
            published_at: post.published_at // eslint-disable-line
          })
        )
        .then(post => {
          if (this.get('fastboot.isFastBoot')) {
            this.set('post', post)
          }

          return post
        })
    }

    let post = this.get('post')

    // Shoeboxed html have html entities
    post.html = decodeHTMLEntities(post.html)
    post.author.image = post.author.image.replace(/&amp;/g, '&')

    return post
  },
  activate() {
    this.set('firstVisit', false)
  }
})

function decodeHTMLEntities(html) {
  return parseHTML(html).documentElement.textContent
}

function parseHTML(html) {
  return new DOMParser().parseFromString(html, 'text/html')
}
