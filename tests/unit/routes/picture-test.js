import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | picture', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:picture');
    assert.ok(route);
  });
});
