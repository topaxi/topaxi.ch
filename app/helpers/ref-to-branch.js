import Ember from 'ember'

export function refToBranch([ ref ]) {
  return ref.split('/').slice(2).join('/')
}

export default Ember.Helper.helper(refToBranch)
