import { helper } from 'ember-helper'

export function excerpt([ html ], { words }) {
  let ex

  // Strip inline and bottom footnotes
  ex = html.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '')
  ex = ex.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '')
  // Strip other html
  ex = ex.replace(/<\/?[^>]+>/gi, '')
  ex = ex.replace(/(\r\n|\n|\r)+/gm, ' ')

  return ex.split(/\s+/).slice(0, words).join(' ')
}

export default helper(excerpt)
