const { Person } = require("../../src/shouty");
const { defineParameterType } = require("@cucumber/cucumber");

// defines a parameter type called "person" that will match either Lucy or Sean
defineParameterType({
  name: "person",
  regexp: /Lucy|Sean/,
  transformer: function (name) {
    return new Person(name);
  },
});
