import Component from 'ember-component'
import computed  from 'ember-computed'

export default Component.extend({
  commitLimit: 2,

  showMore: computed('gh.payload.size', 'commitLimit', function() {
    return this.get('gh.payload.size') > this.get('commitLimit')
  }),

  commits: computed('gh.payload.commits', 'commitLimit', function() {
    return this.get('gh.payload.commits').slice(0, this.get('commitLimit'))
  })
})
