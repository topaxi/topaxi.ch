import Route         from 'ember-route'
import injectService from 'ember-service/inject'

const NOT_FOUND = 404

export default Route.extend({
  fastboot: injectService(),

  model() {
    let isFastBoot = this.get('fastboot.isFastBoot')

    if (isFastBoot) {
      this.set('fastboot.response.statusCode', NOT_FOUND)
    }
  }
})
