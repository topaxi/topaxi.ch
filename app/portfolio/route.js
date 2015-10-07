import Route from 'ember-route'

const projects = [
  {
    name: 'Adfinis SyGroup AG CSS Framework',
    slug: 'adcssy',
    year: 2015,
    screenshot: {
      alt:         'Screenshot of the generated styleguide',
      description: 'Screenshot of the generated styleguide at <a class="break-all" href="https://adfinis-sygroup.github.io/adcssy">adfinis-sygroup.github.io/adcssy</a>',
      width:       1280,
      height:       947
    },
    description: 'Responsive flexbox CSS framework using the Adfinis SyGroup AG CI colors and fonts.',
    technologies: [ 'CSS3', 'cssnext' ]
  },
  {
    name: 'Gameswelt Relaunch',
    slug: 'gameswelt-relaunch',
    year: 2014,
    screenshot: {
      alt:         'Screenshot of gameswelt.de',
      description: 'Screenshot of <a href="http://www.gameswelt.de/">gameswelt.de</a>',
      width:       1280,
      height:       947
    },
    description: 'Complete frontend rewrite in PHP and realization of given layout in HTML5 and CSS3',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'
    ]
  },
  {
    name: 'Mann TV',
    slug: 'manntv',
    year: 2013,
    screenshot: {
      alt:         'Screenshot of mann.tv',
      description: 'Screenshot of <a href="http://ch.mann.tv/">mann.tv</a>',
      width:       1280,
      height:       947
    },
    description: 'Backend integration into gameswelt.de, complete frontend implementation in PHP and realization of given layout in HTML5 and CSS3',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'
    ]
  },
  {
    name: 'Gameswelt Artikel Admin',
    slug: 'gameswelt-article-admin',
    year: 2013,
    screenshot: {
      alt:         'Screenshot of gameswelt.de',
      description: 'Screenshot of <a href="http://www.gameswelt.de/">gameswelt.de</a>',
      width:       1280,
      height:       947
    },
    description: 'Rewrite of the gameswelt article admin, merging different, but very similar, article types into one unified type.',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'
    ]
  },
  {
    name: 'easyCOMM General Assembly Tool',
    slug: 'easycomm-ga-tool',
    year: '2010-2015',
    screenshot: {
      alt:         '',
      width:       1280,
      height:       947
    },
    description: 'A JavaScript heavy web application with realtime communication made for <a href="http://www.easycomm.ch/">easyCOMM</a> to aid in general assemblies of big companies and banks.',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'
    ]
  },
  {
    name: 'neuhier.ch',
    slug: 'neuhier',
    year: '2009-2010',
    screenshot: {
      alt: 'Screenshot of neuhier.ch in 2009'
    },
    description: 'Swiss portal of service providers in Zurich.',
    technologies: [
      'CSS', 'XHTML 1.1', 'JavaScript', 'PHP', 'MySQL'
    ]
  },
  {
    name: 'Gameswelt',
    slug: 'gameswelt',
    year: '2008-2015',
    screenshot: {
      alt:         'Screenshot of gameswelt.de in 2013',
      width:       1280,
      height:       947
    },
    description: 'Maintenance, development and performance tuning of one of the biggest german game online magazines.',
    technologies: [
      'CSS', 'XHTML 1.1', 'JavaScript', 'PHP', 'MySQL'
    ]
  }
]

export default Route.extend({
  model() {
    return projects
  }
})
