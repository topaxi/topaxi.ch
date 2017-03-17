/* global FontFaceObserver */
/* eslint-disable spaced-comment, max-len */
import $ from 'jquery'

// Only loading always needed fonts, italic,
// some bold versions etc. might be invisible until loaded.
const FONTS = [
  //{ family: 'Lora', weight: 700, style: 'italic' },
  //{ family: 'Lora', weight: 700, style: 'normal' },

  //{ family: 'Lora', weight: 'normal', style: 'italic' },
  { family: 'Lora', weight: 'normal', style: 'normal', class: 'font-serif--loaded' },

  //{ family: 'PT Sans', weight: 700, style: 'italic' },
  { family: 'PT Sans', weight: 700, style: 'normal', class: 'font-sans--loaded' },

  { family: 'PT Sans Caption', weight: 700, style: 'normal', class: 'font-heading--loaded' },
  //{ family: 'PT Sans Caption', weight: 'normal', style: 'normal' },

  //{ family: 'PT Sans', weight: 'normal', style: 'italic' },
  //{ family: 'PT Sans', weight: 'normal', style: 'normal' },

  //{ family: 'PT Sans Narrow', weight: 700, style: 'normal' },
  //{ family: 'PT Sans Narrow', weight: 'normal', style: 'normal' },

  //{ family: 'PT Sans', weight: 'normal', style: 'normal' }
]

export function loadFonts() {
  FONTS.forEach(font => {
    let observer = new FontFaceObserver(font.family, font)

    observer.check().then(() => {
      $('html').addClass(font.class)
    })
  })
}

export default {
  name: 'font-initializer',
  initialize: loadFonts
}
