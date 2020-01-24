'use strict';

define("address-book/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('models/address.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/address.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });
});
define("address-book/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('address-book/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'address-book/templates/application.hbs should pass TemplateLint.\n\naddress-book/templates/application.hbs\n  6:4  error  Incorrect indentation for `READ:\n    Addresses:\n    ` beginning at L6:C4. Expected `READ:\n    Addresses:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:4  error  Incorrect indentation for `<ul>` beginning at L7:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:8  error  Incorrect indentation for `{{! Model is an array (or collection) of addresses records, so in order to work with an array, we need to iterate over it. \n        Ember has a special helper for the template called each . Inside of the each helper, we\u2019re working with a single address record, and so we can display the adddress.     }}` beginning at L8:C8. Expected `{{! Model is an array (or collection) of addresses records, so in order to work with an array, we need to iterate over it. \n        Ember has a special helper for the template called each . Inside of the each helper, we\u2019re working with a single address record, and so we can display the adddress.     }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `{{#each}}` beginning at L11:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  12:8  error  Incorrect indentation for `<li>` beginning at L12:C8. Expected `<li>` to be at an indentation of 10 but was found at 8.  block-indentation\n  13:72  error  Incorrect indentation for `li` beginning at L12:C8. Expected `</li>` ending at L13:C72 to be at an indentation of 8 but was found at 67.  block-indentation\n  12:12  error  Incorrect indentation for `ID ` beginning at L12:C12. Expected `ID ` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `{{address.city}}` beginning at L13:C12. Expected `{{address.city}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:4  error  Incorrect indentation for `READ: Read Address with Id #1\n    ` beginning at L19:C4. Expected `READ: Read Address with Id #1\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  20:4  error  Incorrect indentation for `<button>` beginning at L20:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `CREATE:\n    ` beginning at L24:C4. Expected `CREATE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `{{! special Ember text inputs that will create a form field }}` beginning at L25:C4. Expected `{{! special Ember text inputs that will create a form field }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `{{input}}` beginning at L26:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  27:4  error  Incorrect indentation for `{{input}}` beginning at L27:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `{{input}}` beginning at L28:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:4  error  Incorrect indentation for `{{input}}` beginning at L29:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  30:4  error  Incorrect indentation for `{{input}}` beginning at L30:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  32:4  error  Incorrect indentation for `<button>` beginning at L32:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  36:4  error  Incorrect indentation for `READ:\n    ` beginning at L36:C4. Expected `READ:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  37:4  error  Incorrect indentation for `{{input}}` beginning at L37:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  38:4  error  Incorrect indentation for `<button>` beginning at L38:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  42:4  error  Incorrect indentation for `UPDATE:\n    ` beginning at L42:C4. Expected `UPDATE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  43:4  error  Incorrect indentation for `{{input}}` beginning at L43:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  44:4  error  Incorrect indentation for `<button>` beginning at L44:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  48:4  error  Incorrect indentation for `DELETE:\n    ` beginning at L48:C4. Expected `DELETE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  49:4  error  Incorrect indentation for `{{input}}` beginning at L49:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  50:4  error  Incorrect indentation for `<button>` beginning at L50:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:5  error  elements cannot have inline styles  no-inline-styles\n  20:21  error  you must use double quotes in templates  quotes\n  32:21  error  you must use double quotes in templates  quotes\n  38:21  error  you must use double quotes in templates  quotes\n  44:21  error  you must use double quotes in templates  quotes\n  50:21  error  you must use double quotes in templates  quotes\n  26:61  error  Self-closing a void element is redundant  self-closing-void-elements\n  27:59  error  Self-closing a void element is redundant  self-closing-void-elements\n  28:46  error  Self-closing a void element is redundant  self-closing-void-elements\n  29:48  error  Self-closing a void element is redundant  self-closing-void-elements\n  30:53  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
});
define("address-book/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/address-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/address-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define("address-book/tests/test-helper", ["address-book/app", "address-book/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("address-book/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("address-book/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define("address-book/tests/unit/models/address-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | address', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('address', {});
      assert.ok(model);
    });
  });
});
define("address-book/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("address-book/tests/unit/serializers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('application');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('application', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define('address-book/config/environment', [], function() {
  var prefix = 'address-book';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('address-book/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
