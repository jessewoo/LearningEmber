import Controller from "@ember/controller";

export default Controller.extend({
  // EVENT HANDLERS - WATCH FOR CLICK EVENTS, TRIGGER A FUNCTION OF THE SAME NAME IN OUR CONTROLLER
  actions: {
    createAddress() {
      // get the input value from the .hbs template
      let newContactName = this.get("newContactName");
      let newStreetName = this.get("newStreetName");
      let newCity = this.get("newCity");
      let newState = this.get("newState");
      let newZipCode = this.get("newZipCode");
      // create a record in Ember Data (locally, would not survive page refresh)
      let newRecord = this.store.createRecord("address", {
        contactName: newContactName,
        streetName: newStreetName,
        city: newCity,
        state: newState,
        zipCode: newZipCode
      });
      // Save the record to the API endpoint specified in adapters/application.js
      newRecord.save();
    },
    readAddress() {
      // get the input value from the .hbs template
      let id = this.get("addressId");
      // find the record (cheating and using id 1 from my mocked server)
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
      let destroyId = this.get("destroyId");

      // we look at the model (a collection of addresses) and find the game with the id the user entered.
      let addressToDestroy = this.get("model").findBy("id", destroyId);
      addressToDestroy.destroyRecord(); // destroy deletes & saves in one step
    }
  }
});

// Ember concurrency
