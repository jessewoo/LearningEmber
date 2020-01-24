import Model from "@ember-data/model";
import attr from "ember-data/attr";

export default Model.extend({
  contactName: attr("string"),
  streetName: attr("string"),
  city: attr("string"),
  state: attr("string"),
  zipCode: attr("number")
});
