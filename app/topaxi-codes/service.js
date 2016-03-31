import AjaxService from 'ember-ajax/services/ajax'
import ENV         from '../config/environment'

let {
  api,
  host,
  clientId,
  clientSecret
} = ENV['topaxi.codes']

export default AjaxService.extend({
  host,
  namespace: api,

  options(...args) {
    let options = this._super(...args)

    options.url  = `${options.url}/`
    options.data = options.data || {}
    options.data.client_id     = clientId
    options.data.client_secret = clientSecret

    return options
  }
})
