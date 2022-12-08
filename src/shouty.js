const EventEmitter = require("events");
const eventBus = new EventEmitter();

module.exports = {
  Person: class Person {
    constructor() {
      this.messages = [];
      eventBus.on("message", (message) => {
        this.messages.push(message);
      });
    }

    moveTo(distance) {}

    shout(message) {
      eventBus.emit("message", message);
    }

    messagesHeard() {
      return this.messages;
    }
  },
};
