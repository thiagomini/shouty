const { Given, Then, When, Before } = require("@cucumber/cucumber");
const { assertThat, is } = require("hamjest");

Before(function () {
  this.people = {};
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

When("{person} shouts {string}", async function (person, message) {
  this.people[person.name].shout(message);
  this.message = message;
});

Then("{person} hears {person}'s message", function (listener, speaker) {
  // Write code here that turns the phrase above into concrete actions
  assertThat(this.people[listener.name].messagesHeard(), is([this.message]));
});

Then("{person} does not hear Sean's message", function (listener) {
  // Write code here that turns the phrase above into concrete actions
  assertThat(this.people[listener.name].messagesHeard(), is([]));
});
