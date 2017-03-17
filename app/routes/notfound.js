import Route         from 'ember-route'
import injectService from 'ember-service/inject'

export default Route.extend({
  fastboot: injectService(),

  model() {
    let isFastBoot = this.get('fastboot.isFastBoot')

    if (isFastBoot) {
      this.set('fastboot.response.statusCode', 404)
    }
  }
})
