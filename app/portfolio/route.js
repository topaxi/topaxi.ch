import Route from 'ember-route'

const technologies = {
  'ember': {
    name: 'Ember.js',
    link: 'http://emberjs.com/'
  },
  'nodejs': {
    name: 'Node.js',
    link: 'http://nodejs.org/'
  },
  'django': {
    name: 'Django',
    link: 'http://djangoproject.com/'
  },
  'jsonapi': {
    name: 'JSON:API',
    link: 'http://jsonapi.org/'
  },
  'cssnext': {
    name: 'cssnext',
    link: 'http://cssnext.io/'
  },
  'php': {
    name: 'PHP',
    link: null
  },
  'javascript': {
    name: 'JavaScript',
    link: null
  },
  'css': {
    name: 'CSS',
    link: null
  },
  'css3': {
    name: 'CSS3',
    link: null
  },
  'html5': {
    name: 'HTML5',
    link: null
  },
  'xhtml11': {
    name: 'XHTML 1.1',
    link: null
  },
  'python': {
    name: 'Python',
    link: null
  },
  'mysql': {
    name: 'MySQL',
    link: null
  },
  'pgsql': {
    name: 'Postgres SQL',
    link: null
  },
  'redis': {
    name: 'Redis',
    link: null
  },
  'postcss': {
    name: 'PostCSS',
    link: null
  },
  'broccolijs': {
    name: 'Broccoli.js',
    link: null
  },
  'closurecompiler': {
    name: 'Closure Compiler',
    link: null
  }
}

const projects = [
  {
    name: 'TCS Cardispo2',
    slug: 'tcs-cardispo2',
    year: '2015-2016',
    description: 'Complete rewrite and modernization of an existing Perl application for TCS Switzerland.',
    technologies: [
      technologies.ember,
      technologies.javascript,
      technologies.css3,
      technologies.html5,
      technologies.python,
      technologies.django,
      technologies.jsonapi,
      technologies.pgsql
    ]
  },
  {
    name: 'Ember SyMon',
    slug: 'ember-symon',
    year: 2015,
    description: 'A prototype GUI for our existing monitoring solution, built with Ember.js and our own CSS Framework.',
    technologies: [
      technologies.ember,
      technologies.javascript,
      technologies.css3,
      technologies.html5
    ]
  },
  {
    name: 'Adfinis SyGroup Customer Center',
    slug: 'adsycc',
    year: 2015,
    description: 'Customer center for Adfinis SyGroup AG, showing customer created tickets, bug tracker issues and timetracking.',
    technologies: [
      technologies.ember,
      technologies.nodejs,
      technologies.javascript,
      technologies.css3,
      technologies.html5,
      technologies.pgsql,
      technologies.redis
    ]
  },
  {
    name: 'Adfinis SyGroup CSS Framework',
    slug: 'adcssy',
    year: 2015,
    screenshot: {
      alt:         'Screenshot of the generated styleguide',
      description: 'Screenshot of the generated styleguide at <a class="break-all" href="https://adfinis-sygroup.github.io/adcssy">adfinis-sygroup.github.io/adcssy</a>',
      width:       1280,
      height:       947
    },
    description: 'Responsive flexbox CSS framework using the Adfinis SyGroup AG CI colors and fonts.',
    technologies: [
      technologies.css3,
      technologies.cssnext,
      technologies.postcss,
      technologies.broccolijs
    ]
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
    description: 'Complete frontend rewrite in PHP and realization of given layout in HTML5 and CSS3.',
    technologies: [
      technologies.css3,
      technologies.html5,
      technologies.javascript,
      technologies.php,
      technologies.mysql
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
      technologies.css3,
      technologies.html5,
      technologies.javascript,
      technologies.php,
      technologies.mysql
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
      technologies.css3,
      technologies.html5,
      technologies.javascript,
      technologies.php,
      technologies.mysql
    ]
  },
  {
    name: 'easyCOMM General Assembly Tool',
    slug: 'easycomm-ga-tool',
    year: '2010-2015',
    screenshot: {
      alt:    '',
      width:  1280,
      height:  947
    },
    description: 'A JavaScript heavy web application with realtime communication made for <a href="http://www.easycomm.ch/">easyCOMM</a> to aid in general assemblies of big companies and banks.',
    technologies: [
      technologies.css3,
      technologies.html5,
      technologies.javascript,
      technologies.closurecompiler,
      technologies.php,
      technologies.mysql
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
      technologies.css3,
      technologies.xhtml11,
      technologies.javascript,
      technologies.php,
      technologies.mysql
    ]
  },
  {
    name: 'Gameswelt',
    slug: 'gameswelt',
    year: '2008-2015',
    screenshot: {
      alt:    'Screenshot of gameswelt.de in 2013',
      width:  1280,
      height:  947
    },
    description: 'Maintenance, development and performance tuning of one of the biggest german game online magazines.',
    technologies: [
      technologies.css3,
      technologies.xhtml11,
      technologies.javascript,
      technologies.php,
      technologies.mysql
    ]
  }
]

export default Route.extend({
  model() {
    return projects
  }
})
