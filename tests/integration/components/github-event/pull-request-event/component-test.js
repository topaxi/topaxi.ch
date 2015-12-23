import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-event/pull-request-event', 'Integration | Component | github event/pull request event', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{github-event/pull-request-event}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#github-event/pull-request-event}}
      template block text
    {{/github-event/pull-request-event}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
