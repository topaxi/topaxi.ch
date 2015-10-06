import Route from 'ember-route'

const projects = [
  {
    name: 'Adfinis Sygroup AG CSS Framework',
    slug: 'adcssy',
    year: 2015,
    screenshot: {
      alt:         'Screenshot of the generated styleguide',
      description: 'Screenshot of the generated styleguide at <a href="https://adfinis-sygroup.github.io/adcssy">adfinis-sygroup.github.io/adcssy</a>',
      width:       1280,
      height:       947
    },
    description: 'Responsive flexbox CSS framework using the Adfinis SyGroup AG CI colors and fonts.',
    technologies: [ 'CSS3', 'cssnext' ]
  },
  {
    name: 'Gameswelt Relaunch',
    slug: 'gameswelt_relaunch',
    year: 2014,
    screenshot: {
      alt:         'Screenshot of gameswelt.de',
      description: 'Screenshot of <a href="http://www.gameswelt.de/">gameswelt.de</a>',
      width:       1280,
      height:       947
    },
    description: 'Complete frontend rewrite in PHP and realization of given layout in HTML5 and CSS3',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP'
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
      'CSS3', 'HTML5', 'JavaScript', 'PHP'
    ]
  },
  {
    name: 'Gameswelt Artikel Admin',
    slug: 'gameswelt_article_admin',
    year: 2014,
    screenshot: {
      alt:         'Screenshot of gameswelt.de',
      description: 'Screenshot of <a href="http://www.gameswelt.de/">gameswelt.de</a>',
      width:       1280,
      height:       947
    },
    description: 'Rewrite of the gameswelt article admin, merging different, but very similar, article types into one unified type.',
    technologies: [
      'CSS3', 'HTML5', 'JavaScript', 'PHP'
    ]
  }
]

export default Route.extend({
  model() {
    return projects
  }
})
