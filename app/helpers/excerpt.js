import { helper } from 'ember-helper'

export function excerpt([ html ], { words }) {
  // Strip inline and bottom footnotes
  let excerpt = html.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '')
  excerpt = excerpt.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '')
  // Strip other html
  excerpt = excerpt.replace(/<\/?[^>]+>/gi, '')
  excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ')

  return excerpt.split(/\s+/).slice(0, words).join(' ')
}

export default helper(excerpt)
