import Component from 'ember-component'
import computed  from 'ember-computed'

const ICON_MAP = {
  'branch': 'git-branch',
  'repo':   'repo',
  'tag':    'tag'
}

export default Component.extend({
  classNames: [ 'simple' ],

  icon: computed('gh.payload.ref_type', function() {
    return ICON_MAP[this.get('gh.payload.ref_type')]
  })
})
