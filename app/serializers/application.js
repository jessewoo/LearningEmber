import JSONSerializer from "@ember-data/serializer/json";
import { underscore } from "@ember/string";

export default JSONSerializer.extend({
  //   normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //     debugger;
  //   }

  keyForAttribute(key) {
    // debugger;
    // The key from the data payload is underscore, but the key in the model is camelCase
    return underscore(key);
  }
});
