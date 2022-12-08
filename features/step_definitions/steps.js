const { Given, Then, When } = require("@cucumber/cucumber");
const { Person } = require("../../src/shouty");
const { assertThat, is } = require("hamjest");

Given("Lucy is located {int} metres from Sean", function (distance) {
  this.lucy = new Person();
  this.sean = new Person();

  this.lucy.moveTo(distance);
});

When("Sean shouts {string}", function (message) {
  this.sean.shout(message);
  this.message = message;
});

Then("Lucy hears Sean's message", function () {
  // Write code here that turns the phrase above into concrete actions
  assertThat(this.lucy.messagesHeard(), is([this.message]));
});
