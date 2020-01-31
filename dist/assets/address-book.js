'use strict';



;define("address-book/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("address-book/adapters/application", ["exports", "@ember-data/adapter/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Default adapter to handle all API requests
  // Use JSON-Server - https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
  var _default = _rest.default.extend({
    host: "http://localhost:3000"
  });

  _exports.default = _default;
});
;define("address-book/app", ["exports", "address-book/resolver", "ember-load-initializers", "address-book/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _resolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("address-book/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("address-book/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({});

  _exports.default = _default;
});
;define("address-book/controllers/form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Controller.extend({
    // EVENT HANDLERS - WATCH FOR CLICK EVENTS, TRIGGER A FUNCTION OF THE SAME NAME IN OUR CONTROLLER
    actions: {
      createAddress() {
        // get the input value from the .hbs template
        let newContactName = this.get("newContactName");
        let newStreetName = this.get("newStreetName");
        let newCity = this.get("newCity");
        let newState = this.get("newState");
        let newZipCode = this.get("newZipCode"); // create a record in Ember Data (locally, would not survive page refresh)

        let newRecord = this.store.createRecord("address", {
          contactName: newContactName,
          streetName: newStreetName,
          city: newCity,
          state: newState,
          zipCode: newZipCode
        }); // Save the record to the API endpoint specified in adapters/application.js

        newRecord.save();
      },

      readAddress() {
        // get the input value from the .hbs template
        let id = this.get("addressId"); // find the record (cheating and using id 1 from my mocked server)
        // debugger;

        this.store.findRecord("address", id ? id : 1).then(address => {
          // See how the keys work
          // debugger;
          alert(address.get("streetName") + " --- " + address.get("id"));
        });
      },

      updateAddress() {
        let updatedStreet = this.get("updatedStreet");
        let game = this.get("model").findBy("id", "1");
        game.set("streetName", updatedStreet); // locally update the streetName

        game.save(); // save the title to API via PATCH
      },

      destroyAddress() {
        let destroyId = this.get("destroyId"); // we look at the model (a collection of addresses) and find the game with the id the user entered.

        let addressToDestroy = this.get("model").findBy("id", destroyId);
        addressToDestroy.destroyRecord(); // destroy deletes & saves in one step
      }

    }
  });

  _exports.default = _default;
});
;define("address-book/helpers/app-version", ["exports", "address-book/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("address-book/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("address-book/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("address-book/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "address-book/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("address-book/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("address-book/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("address-book/initializers/export-application-global", ["exports", "address-book/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("address-book/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("address-book/models/address", ["exports", "@ember-data/model", "ember-data/attr"], function (_exports, _model, _attr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _model.default.extend({
    contactName: (0, _attr.default)("string"),
    streetName: (0, _attr.default)("string"),
    city: (0, _attr.default)("string"),
    state: (0, _attr.default)("string"),
    zipCode: (0, _attr.default)("number")
  });

  _exports.default = _default;
});
;define("address-book/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("address-book/router", ["exports", "address-book/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route("picture");
    this.route("grid");
    this.route('form');
  });
});
;define("address-book/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    // The model function : special function that triggers GET requests and helps display the results. This is often referred to as the “model hook.”
    // Hooks are functions that are automatically called when the user views the template for the route… kind of like document.ready gets called in JQuery when the page has loaded.
    // model hooks belong in routes.
    model() {
      // findAll fetches a collection/array of Ember Data records.
      // If you console log the model or the results of findAll, you get gibberish because we’re working with records that are alive (like horses).
      // They are not plain old JavaScript objects (the bike). I’ll tell you how to work with them.
      return this.store.findAll("address");
    }

  });

  _exports.default = _default;
});
;define("address-book/routes/form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("address-book/routes/grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("address-book/routes/picture", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("address-book/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("address-book/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("address-book/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("address-book/serializers/application", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _json.default.extend({
    //   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //     debugger;
    //   }
    keyForAttribute(key) {
      // debugger;
      // The key from the data payload is underscore, but the key in the model is camelCase
      return Ember.String.underscore(key);
    }

  });

  _exports.default = _default;
});
;define("address-book/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uXVVEXcp",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\",true],[8],[0,\"Application - COMMON STUFF\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This EXIST (application.hbs) on EVERY ROUTE\"],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "address-book/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("address-book/templates/form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "A6R7py2x",
    "block": "{\"symbols\":[\"address\"],\"statements\":[[7,\"div\",true],[8],[0,\"\\n    READ:\\n    Addresses:\\n    \"],[7,\"ul\",true],[8],[0,\"\\n\"],[0,\"\\n\"],[4,\"each\",[[24,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\",true],[8],[0,\"ID \"],[1,[23,1,[\"id\"]],false],[0,\": \"],[1,[23,1,[\"contactName\"]],false],[0,\" lives at \"],[1,[23,1,[\"streetName\"]],false],[0,\",\\n            \"],[1,[23,1,[\"city\"]],false],[0,\",\"],[1,[23,1,[\"state\"]],false],[0,\", \"],[1,[23,1,[\"zipCode\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"\\n    READ: Read Address with Id #1\\n    \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"readAddress\"]],[8],[0,\"Read Address 1\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"style\",\"padding: 10px; margin: 10px; border: 1px solid #666\"],[8],[0,\"\\n    CREATE:\\n\"],[0,\"    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"newContactName\"]],\"Contact name\"]]],false],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"newStreetName\"]],\"Street name\"]]],false],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"newCity\"]],\"City\"]]],false],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"newState\"]],\"State\"]]],false],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"newZipCode\"]],\"Zip Code\"]]],false],[7,\"br\",true],[8],[9],[0,\"\\n\\n    \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"createAddress\"]],[8],[0,\"Create\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"\\n    READ:\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"addressId\"]],\"Address Id\"]]],false],[0,\"\\n    \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"readAddress\"]],[8],[0,\"Read Specific Address with Id\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"\\n    UPDATE:\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"updatedStreet\"]],\"new street for address 1\"]]],false],[0,\"\\n    \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"updateAddress\"]],[8],[0,\"Update\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[8],[0,\"\\n    DELETE:\\n    \"],[1,[28,\"input\",null,[[\"value\",\"placeholder\"],[[24,[\"destroyId\"]],\"id of address to delete\"]]],false],[0,\"\\n    \"],[7,\"button\",false],[3,\"action\",[[23,0,[]],\"destroyAddress\"]],[8],[0,\"Delete\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "address-book/templates/form.hbs"
    }
  });

  _exports.default = _default;
});
;define("address-book/templates/grid", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/SutgxI+",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\",true],[8],[0,\"Flexbox vs. Grid CSS\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Grid is Container-Based, Flexbox is Content-Based\"],[9],[0,\"\\n\"],[7,\"h2\",true],[8],[0,\"Flex\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row_flex\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"1\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"2\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"3\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"4\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"Grid\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"row_grid\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"1\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"2\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"3\"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"4\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h1\",true],[8],[0,\"Flexbox is One Dimensional, Grid is Two Dimensional\"],[9],[0,\"\\n\"],[7,\"h2\",true],[8],[0,\"Flex with Icons\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"one dimensional layout - All the elements are in a single row\"],[9],[0,\"\\n\"],[7,\"ul\",true],[10,\"class\",\"social-icons\"],[8],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fab fa-facebook-f\"],[8],[9],[9],[9],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fab fa-twitter\"],[8],[9],[9],[9],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fab fa-instagram\"],[8],[9],[9],[9],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fab fa-github\"],[8],[9],[9],[9],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fas fa-envelope\"],[8],[9],[9],[9],[0,\"\\n    \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"#\"],[8],[7,\"i\",true],[10,\"class\",\"fas fa-rss\"],[8],[9],[9],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"Make use of CSS Grid\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"We are creating two columns using the grid-template-columns property, and three rows using grid-template-rows\\n    property. The repeat() function creates 3 rows with auto height.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Then, inside the grid-items (header, main, aside, and footer) we define how much area those grid-items will cover\\n    using the grid-area property.\"],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container\"],[8],[0,\"\\n    \"],[7,\"header\",true],[8],[0,\"Header\"],[9],[0,\"\\n    \"],[7,\"main\",true],[8],[0,\"Main\"],[9],[0,\"\\n    \"],[7,\"aside\",true],[8],[0,\"Aside\"],[9],[0,\"\\n    \"],[7,\"footer\",true],[8],[0,\"Footer\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"h2\",true],[8],[0,\"Tutorial https://www.youtube.com/watch?v=jV8B24rSN5o\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"wrapper\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit.\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam libero excepturi cupiditate quasi sit. Iure\\n        totam a magni, veritatis, voluptatem voluptates tempora praesentium et nisi eligendi. A saepe eaque aliquam,\\n        earum nihil quia? Nemo delectus possimus, explicabo repudiandae recusandae. Mollitia!\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"nested\"],[8],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n        \"],[7,\"div\",true],[8],[0,\"Lorem\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit.\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit.\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit.\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n        Lorem ipsum dolor sit.\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"hr\",true],[8],[9],[0,\"\\n\"],[7,\"br\",true],[8],[9],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"wrapper2\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"box box1\"],[8],[0,\"Box 1\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"box box2\"],[8],[0,\"Box 2\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"box box3\"],[8],[0,\"Box 3\"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"box box4\"],[8],[0,\"Box 4\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "address-book/templates/grid.hbs"
    }
  });

  _exports.default = _default;
});
;define("address-book/templates/picture", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uo/kHjcV",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\",true],[8],[0,\"Picture Tag\"],[9],[0,\"\\n\"],[7,\"div\",true],[8],[0,\"\\n    Switches image based on width:\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"picture\",true],[8],[0,\"\\n        \"],[7,\"source\",true],[10,\"media\",\"(min-width: 650px)\"],[10,\"srcset\",\"/images/kobe_large.jpg\"],[8],[9],[0,\"\\n        \"],[7,\"source\",true],[10,\"media\",\"(min-width: 575px)\"],[10,\"srcset\",\"/images/kobe_medium.jpg\"],[8],[9],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"/images/kobe_sm.jpg\"],[10,\"alt\",\"Kobe\"],[10,\"style\",\"width:auto;\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n    IMAGE with Srcset > device pixel ratio:\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"img\",true],[10,\"srcset\",\"/images/kobe_sm.jpg 1x, /images/kobe_medium.jpg 2x\"],[10,\"src\",\"/public/images/kobe_sm.jpg\"],[10,\"alt\",\"Kobe Bryant\"],[8],[9],[0,\"\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n    IMAGE with fluid / variable sized image:\\n    \"],[7,\"p\",true],[8],[0,\"Mark up variable sized images that scale up and down efficiently\"],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"img\",true],[10,\"srcset\",\"/images/kobe_large.jpg  1024w,\\n      /images/kobe_medium.jpg 640w,\\n      /images/kobe_sm.jpg  320w\"],[10,\"sizes\",\"(min-width: 36em) calc(.333 * (100vw - 12em)),\\n   100vw\"],[10,\"src\",\"kobe_sm.jpg\"],[10,\"alt\",\"Kobe\"],[8],[9],[0,\"\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n    IMAGE with art direction:\\n    \"],[7,\"p\",true],[8],[0,\"Layering another method of source grouping\"],[9],[0,\"\\n    \"],[7,\"picture\",true],[8],[0,\"\\n        \"],[7,\"source\",true],[10,\"media\",\"(min-width: 36em)\"],[10,\"srcset\",\"/images/kobe_large.jpg  1024w,\\n         /images/kobe_medium.jpg 640w,\\n         /images/kobe_sm.jpg 320w\"],[10,\"sizes\",\"33.3vw\"],[8],[9],[0,\"\\n        \"],[7,\"source\",true],[10,\"srcset\",\"/images/kobe_large.jpg 2x,\\n         /images/kobe_square.jpg 1x\"],[8],[9],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"/images/kobe_small.jpg\"],[10,\"alt\",\"Kobe Bryant\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"hr\",true],[8],[9],[0,\"\\n    IMAGE with type switching with webp:\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Visual differences are nearly imperceptible, file size are substantial (faster)\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"WebP not a replacement for JPEG and PNG images. WebP = Google technology\"],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"/images/kobe_logo.png\"],[10,\"alt\",\"Kobe Logo\"],[10,\"width\",\"150px\"],[8],[9],[0,\"\\n    \"],[7,\"br\",true],[8],[9],[7,\"br\",true],[8],[9],[0,\"\\n    \"],[7,\"picture\",true],[8],[0,\"\\n        \"],[7,\"source\",true],[10,\"srcset\",\"/images/kobe_webp.webp\"],[10,\"type\",\"image/webp\"],[8],[9],[0,\"\\n        \"],[7,\"source\",true],[10,\"srcset\",\"/images/kobe_logo.svg\"],[10,\"type\",\"image/svg\"],[8],[9],[0,\"\\n        \"],[7,\"source\",true],[10,\"srcset\",\"/images/kobe_logo.png\"],[10,\"type\",\"image/png\"],[8],[9],[0,\"\\n        \"],[7,\"img\",true],[10,\"src\",\"/images/kobe-hear.gif\"],[10,\"alt\",\"Kobe Hearing\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "address-book/templates/picture.hbs"
    }
  });

  _exports.default = _default;
});
;define("address-book/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("address-book/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("address-book/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("address-book/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('address-book/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("address-book/app")["default"].create({"name":"address-book","version":"0.0.0+98bec182"});
          }
        
//# sourceMappingURL=address-book.map
