const { Given, Then, When, Before } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");
const { Person } = require("../../src/shouty");

const DEFAULT_MESSAGE = "Hello World";
const DEFAULT_RANGE = 15;

Before(function () {
  this.people = {};
  this.range = DEFAULT_RANGE;
});

Given(
  "{person} is located/standing {int} metre(s) from {person}",
  function (person1, distance, person2) {
    this.people[person1.name] = person1;
    this.people[person2.name] = person2;

    this.people[person1.name].moveTo(distance);
  }
);

Given("a person named {person}", function (person) {
  this.people[person.name] = person;
});

Given("a person named {word} is located at {int}", function (person, location) {
  this.people[person] = new Person(person, location, this.range);
});

Given("the range is {int} metres", function (range) {
  this.range = range;
});

When("{person} shouts {string}", async function (person, message) {
  this.people[person.name].shout(message);
  this.message = message;
});

When("{person} shouts", async function (person) {
  this.people[person.name].shout(DEFAULT_MESSAGE);
  this.message = DEFAULT_MESSAGE;
});

Then("{person} hears {person}'s message", function (listener, speaker) {
  assertThat(this.people[listener.name].messagesHeard(), is([this.message]));
});

Then("Lucy does not hear Sean's message", function () {
  assertThat(this.people["Lucy"].messagesHeard(), is([]));
});
