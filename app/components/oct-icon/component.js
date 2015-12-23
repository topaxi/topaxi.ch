import Component from 'ember-component'
import computed  from 'ember-computed'

const OctIcon = Component.extend({
  tagName: 'span',

  classNames: [ 'octicon' ],
  classNameBindings: [ 'iconClass' ],

  iconClass: computed('icon', function() {
    let icon = this.get('icon')

    return `octicon-${icon}`
  })
})

OctIcon.reopenClass({
  positionalParams: [ 'icon' ]
})

export default OctIcon
