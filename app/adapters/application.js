import RESTAdapter from "@ember-data/adapter/rest";

// Default adapter to handle all API requests
// Use JSON-Server - https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
export default RESTAdapter.extend({
  host: "http://localhost:3000"
});
