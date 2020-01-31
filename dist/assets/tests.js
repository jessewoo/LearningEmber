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
  QUnit.test('controllers/form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/form.js should pass ESLint\n\n');
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
  QUnit.test('routes/form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/form.js should pass ESLint\n\n');
  });
  QUnit.test('routes/grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/grid.js should pass ESLint\n\n');
  });
  QUnit.test('routes/picture.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/picture.js should pass ESLint\n\n');
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
    assert.ok(true, 'address-book/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('address-book/templates/form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'address-book/templates/form.hbs should pass TemplateLint.\n\naddress-book/templates/form.hbs\n  5:4  error  Incorrect indentation for `READ:\n    Addresses:\n    ` beginning at L5:C4. Expected `READ:\n    Addresses:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<ul>` beginning at L6:C4. Expected `<ul>` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:8  error  Incorrect indentation for `{{! Model is an array (or collection) of addresses records, so in order to work with an array, we need to iterate over it. \n        Ember has a special helper for the template called each . Inside of the each helper, we\u2019re working with a single address record, and so we can display the adddress.     }}` beginning at L7:C8. Expected `{{! Model is an array (or collection) of addresses records, so in order to work with an array, we need to iterate over it. \n        Ember has a special helper for the template called each . Inside of the each helper, we\u2019re working with a single address record, and so we can display the adddress.     }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  10:8  error  Incorrect indentation for `{{#each}}` beginning at L10:C8. Expected `{{#each}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<li>` beginning at L11:C8. Expected `<li>` to be at an indentation of 10 but was found at 8.  block-indentation\n  12:72  error  Incorrect indentation for `li` beginning at L11:C8. Expected `</li>` ending at L12:C72 to be at an indentation of 8 but was found at 67.  block-indentation\n  11:12  error  Incorrect indentation for `ID ` beginning at L11:C12. Expected `ID ` to be at an indentation of 10 but was found at 12.  block-indentation\n  12:12  error  Incorrect indentation for `{{address.city}}` beginning at L12:C12. Expected `{{address.city}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  18:4  error  Incorrect indentation for `READ: Read Address with Id #1\n    ` beginning at L18:C4. Expected `READ: Read Address with Id #1\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  19:4  error  Incorrect indentation for `<button>` beginning at L19:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:4  error  Incorrect indentation for `CREATE:\n    ` beginning at L23:C4. Expected `CREATE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `{{! special Ember text inputs that will create a form field }}` beginning at L24:C4. Expected `{{! special Ember text inputs that will create a form field }}` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `{{input}}` beginning at L25:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `{{input}}` beginning at L26:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  27:4  error  Incorrect indentation for `{{input}}` beginning at L27:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `{{input}}` beginning at L28:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:4  error  Incorrect indentation for `{{input}}` beginning at L29:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  31:4  error  Incorrect indentation for `<button>` beginning at L31:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  35:4  error  Incorrect indentation for `READ:\n    ` beginning at L35:C4. Expected `READ:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  36:4  error  Incorrect indentation for `{{input}}` beginning at L36:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  37:4  error  Incorrect indentation for `<button>` beginning at L37:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  41:4  error  Incorrect indentation for `UPDATE:\n    ` beginning at L41:C4. Expected `UPDATE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  42:4  error  Incorrect indentation for `{{input}}` beginning at L42:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  43:4  error  Incorrect indentation for `<button>` beginning at L43:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  47:4  error  Incorrect indentation for `DELETE:\n    ` beginning at L47:C4. Expected `DELETE:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  48:4  error  Incorrect indentation for `{{input}}` beginning at L48:C4. Expected `{{input}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  49:4  error  Incorrect indentation for `<button>` beginning at L49:C4. Expected `<button>` to be at an indentation of 2 but was found at 4.  block-indentation\n  22:5  error  elements cannot have inline styles  no-inline-styles\n  19:21  error  you must use double quotes in templates  quotes\n  31:21  error  you must use double quotes in templates  quotes\n  37:21  error  you must use double quotes in templates  quotes\n  43:21  error  you must use double quotes in templates  quotes\n  49:21  error  you must use double quotes in templates  quotes\n  25:61  error  Self-closing a void element is redundant  self-closing-void-elements\n  26:59  error  Self-closing a void element is redundant  self-closing-void-elements\n  27:46  error  Self-closing a void element is redundant  self-closing-void-elements\n  28:48  error  Self-closing a void element is redundant  self-closing-void-elements\n  29:53  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });
  QUnit.test('address-book/templates/grid.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'address-book/templates/grid.hbs should pass TemplateLint.\n\naddress-book/templates/grid.hbs\n  5:4  error  Incorrect indentation for `<div>` beginning at L5:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:4  error  Incorrect indentation for `<div>` beginning at L6:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  7:4  error  Incorrect indentation for `<div>` beginning at L7:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:4  error  Incorrect indentation for `<div>` beginning at L8:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<div>` beginning at L13:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<div>` beginning at L14:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  15:4  error  Incorrect indentation for `<div>` beginning at L15:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<div>` beginning at L16:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  23:4  error  Incorrect indentation for `<li>` beginning at L23:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `<li>` beginning at L24:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `<li>` beginning at L25:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<li>` beginning at L26:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  27:4  error  Incorrect indentation for `<li>` beginning at L27:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `<li>` beginning at L28:C4. Expected `<li>` to be at an indentation of 2 but was found at 4.  block-indentation\n  33:72  error  Incorrect indentation for `p` beginning at L32:C0. Expected `</p>` ending at L33:C72 to be at an indentation of 0 but was found at 68.  block-indentation\n  32:3  error  Incorrect indentation for `We are creating two columns using the grid-template-columns property, and three rows using grid-template-rows\n    property. The repeat() function creates 3 rows with auto height.` beginning at L32:C3. Expected `We are creating two columns using the grid-template-columns property, and three rows using grid-template-rows\n    property. The repeat() function creates 3 rows with auto height.` to be at an indentation of 2 but was found at 3.  block-indentation\n  35:37  error  Incorrect indentation for `p` beginning at L34:C0. Expected `</p>` ending at L35:C37 to be at an indentation of 0 but was found at 33.  block-indentation\n  34:3  error  Incorrect indentation for `Then, inside the grid-items (header, main, aside, and footer) we define how much area those grid-items will cover\n    using the grid-area property.` beginning at L34:C3. Expected `Then, inside the grid-items (header, main, aside, and footer) we define how much area those grid-items will cover\n    using the grid-area property.` to be at an indentation of 2 but was found at 3.  block-indentation\n  37:4  error  Incorrect indentation for `<header>` beginning at L37:C4. Expected `<header>` to be at an indentation of 2 but was found at 4.  block-indentation\n  38:4  error  Incorrect indentation for `<main>` beginning at L38:C4. Expected `<main>` to be at an indentation of 2 but was found at 4.  block-indentation\n  39:4  error  Incorrect indentation for `<aside>` beginning at L39:C4. Expected `<aside>` to be at an indentation of 2 but was found at 4.  block-indentation\n  40:4  error  Incorrect indentation for `<footer>` beginning at L40:C4. Expected `<footer>` to be at an indentation of 2 but was found at 4.  block-indentation\n  46:4  error  Incorrect indentation for `<div>` beginning at L46:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  49:4  error  Incorrect indentation for `<div>` beginning at L49:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  54:4  error  Incorrect indentation for `<div>` beginning at L54:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  65:4  error  Incorrect indentation for `<div>` beginning at L65:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  68:4  error  Incorrect indentation for `<div>` beginning at L68:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  71:4  error  Incorrect indentation for `<div>` beginning at L71:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  74:4  error  Incorrect indentation for `<div>` beginning at L74:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  47:8  error  Incorrect indentation for `Lorem ipsum dolor sit.\n    ` beginning at L47:C8. Expected `Lorem ipsum dolor sit.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  52:8  error  Incorrect indentation for `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam libero excepturi cupiditate quasi sit. Iure\n        totam a magni, veritatis, voluptatem voluptates tempora praesentium et nisi eligendi. A saepe eaque aliquam,\n        earum nihil quia? Nemo delectus possimus, explicabo repudiandae recusandae. Mollitia!\n    ` beginning at L52:C8. Expected `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam libero excepturi cupiditate quasi sit. Iure\n        totam a magni, veritatis, voluptatem voluptates tempora praesentium et nisi eligendi. A saepe eaque aliquam,\n        earum nihil quia? Nemo delectus possimus, explicabo repudiandae recusandae. Mollitia!\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  55:8  error  Incorrect indentation for `<div>` beginning at L55:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  56:8  error  Incorrect indentation for `<div>` beginning at L56:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  57:8  error  Incorrect indentation for `<div>` beginning at L57:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  58:8  error  Incorrect indentation for `<div>` beginning at L58:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  59:8  error  Incorrect indentation for `<div>` beginning at L59:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  60:8  error  Incorrect indentation for `<div>` beginning at L60:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  61:8  error  Incorrect indentation for `<div>` beginning at L61:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  62:8  error  Incorrect indentation for `<div>` beginning at L62:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  63:8  error  Incorrect indentation for `<div>` beginning at L63:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  66:8  error  Incorrect indentation for `Lorem ipsum dolor sit.\n    ` beginning at L66:C8. Expected `Lorem ipsum dolor sit.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  69:8  error  Incorrect indentation for `Lorem ipsum dolor sit.\n    ` beginning at L69:C8. Expected `Lorem ipsum dolor sit.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  72:8  error  Incorrect indentation for `Lorem ipsum dolor sit.\n    ` beginning at L72:C8. Expected `Lorem ipsum dolor sit.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  75:8  error  Incorrect indentation for `Lorem ipsum dolor sit.\n    ` beginning at L75:C8. Expected `Lorem ipsum dolor sit.\n    ` to be at an indentation of 6 but was found at 8.  block-indentation\n  83:4  error  Incorrect indentation for `<div>` beginning at L83:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  84:4  error  Incorrect indentation for `<div>` beginning at L84:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  85:4  error  Incorrect indentation for `<div>` beginning at L85:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  86:4  error  Incorrect indentation for `<div>` beginning at L86:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
  QUnit.test('address-book/templates/picture.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'address-book/templates/picture.hbs should pass TemplateLint.\n\naddress-book/templates/picture.hbs\n  3:4  error  Incorrect indentation for `Switches image based on width:\n    ` beginning at L3:C4. Expected `Switches image based on width:\n    ` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:4  error  Incorrect indentation for `<br>` beginning at L4:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<picture>` beginning at L5:C4. Expected `<picture>` to be at an indentation of 2 but was found at 4.  block-indentation\n  11:4  error  Incorrect indentation for `<hr>` beginning at L11:C4. Expected `<hr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  13:4  error  Incorrect indentation for `<br>` beginning at L13:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  14:4  error  Incorrect indentation for `<img>` beginning at L14:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  16:4  error  Incorrect indentation for `<hr>` beginning at L16:C4. Expected `<hr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  18:4  error  Incorrect indentation for `<p>` beginning at L18:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  19:4  error  Incorrect indentation for `<br>` beginning at L19:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  20:4  error  Incorrect indentation for `<img>` beginning at L20:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `<hr>` beginning at L24:C4. Expected `<hr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `<br>` beginning at L25:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  26:4  error  Incorrect indentation for `<hr>` beginning at L26:C4. Expected `<hr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `<p>` beginning at L28:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  29:4  error  Incorrect indentation for `<picture>` beginning at L29:C4. Expected `<picture>` to be at an indentation of 2 but was found at 4.  block-indentation\n  37:4  error  Incorrect indentation for `<br>` beginning at L37:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  38:4  error  Incorrect indentation for `<hr>` beginning at L38:C4. Expected `<hr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  40:4  error  Incorrect indentation for `<br>` beginning at L40:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  41:4  error  Incorrect indentation for `<p>` beginning at L41:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  42:4  error  Incorrect indentation for `<p>` beginning at L42:C4. Expected `<p>` to be at an indentation of 2 but was found at 4.  block-indentation\n  43:4  error  Incorrect indentation for `<br>` beginning at L43:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  44:4  error  Incorrect indentation for `<img>` beginning at L44:C4. Expected `<img>` to be at an indentation of 2 but was found at 4.  block-indentation\n  45:4  error  Incorrect indentation for `<br>` beginning at L45:C4. Expected `<br>` to be at an indentation of 2 but was found at 4.  block-indentation\n  46:4  error  Incorrect indentation for `<picture>` beginning at L46:C4. Expected `<picture>` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:8  error  Incorrect indentation for `<source>` beginning at L6:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<source>` beginning at L7:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:8  error  Incorrect indentation for `<img>` beginning at L8:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  30:8  error  Incorrect indentation for `<source>` beginning at L30:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  33:8  error  Incorrect indentation for `<source>` beginning at L33:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  35:8  error  Incorrect indentation for `<img>` beginning at L35:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  47:8  error  Incorrect indentation for `<source>` beginning at L47:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  48:8  error  Incorrect indentation for `<source>` beginning at L48:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  49:8  error  Incorrect indentation for `<source>` beginning at L49:C8. Expected `<source>` to be at an indentation of 6 but was found at 8.  block-indentation\n  50:8  error  Incorrect indentation for `<img>` beginning at L50:C8. Expected `<img>` to be at an indentation of 6 but was found at 8.  block-indentation\n  8:50  error  elements cannot have inline styles  no-inline-styles\n  14:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  20:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  30:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  33:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  35:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  44:4  error  Self-closing a void element is redundant  self-closing-void-elements\n  47:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  48:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  49:8  error  Self-closing a void element is redundant  self-closing-void-elements\n  50:8  error  Self-closing a void element is redundant  self-closing-void-elements\n');
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
  QUnit.test('unit/controllers/form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/form-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/address-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/address-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/form-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/grid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/grid-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/picture-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/picture-test.js should pass ESLint\n\n');
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
define("address-book/tests/unit/controllers/form-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:form');
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
define("address-book/tests/unit/routes/form-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:form');
      assert.ok(route);
    });
  });
});
define("address-book/tests/unit/routes/grid-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | grid', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:grid');
      assert.ok(route);
    });
  });
});
define("address-book/tests/unit/routes/picture-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | picture', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:picture');
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
