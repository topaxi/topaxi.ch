import { helper } from 'ember-helper'

export function eq([ a, b ]) {
  return a === b
}

export default helper(eq)
