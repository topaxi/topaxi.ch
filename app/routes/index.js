import $             from 'jquery'
import Route         from 'ember-route'
import injectService from 'ember-service/inject'

export default Route.extend({
  ajax: injectService(),

  model() {
    return this.get('ajax')
      .request('https://topaxi.codes/', { dataType: 'html' })
      .then(data      => data.replace(/href="\//g, 'href="https://topaxi.codes/'))
      .then(data      => $(data))
      .then($data     => $data.find('article'))
      .then($articles => $articles.get(0))
  }
})
