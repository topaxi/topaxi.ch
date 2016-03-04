import $             from 'jquery'
import Route         from 'ember-route'
import injectService from 'ember-service/inject'

const isFastboot = typeof najax !== 'undefined'

export default Route.extend({
  ajax: isFastboot ? null : injectService(),

  model() {
    if (isFastboot) {
      return
    }

    return this.get('ajax')
      .request('https://topaxi.codes/', { dataType: 'html' })
      .then(data      => data.replace(/href="\//g, 'href="https://topaxi.codes/'))
      .then(data      => $(data))
      .then($data     => $data.find('article'))
      .then($articles => $articles.get(0))
  }
})
