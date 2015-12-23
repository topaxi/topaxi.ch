import Component from 'ember-component'
import computed  from 'ember-computed'

const MATCH_CAMELCASE = /([a-z])([A-Z])/g

export default Component.extend({
  componentType: computed('gh.type', function() {
    let type          = this.get('gh.type')
    let componentType = type.replace(MATCH_CAMELCASE, '$1-$2').toLowerCase()

    return `github-event/${componentType}`
  })
})
