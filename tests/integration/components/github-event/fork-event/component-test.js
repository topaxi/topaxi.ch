import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-event/fork-event', 'Integration | Component | github event/fork event', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{github-event/fork-event}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#github-event/fork-event}}
      template block text
    {{/github-event/fork-event}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
