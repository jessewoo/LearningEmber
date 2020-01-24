import Route from "@ember/routing/route";

export default Route.extend({
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
