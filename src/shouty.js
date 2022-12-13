const EventEmitter = require("events");
const eventBus = new EventEmitter();

module.exports = {
  Person: class Person {
    constructor(name) {
      this.name = name;
      this.position = 0;
      this.messages = [];
      eventBus.on("message", (message, originPosition) => {
        if (Math.abs(originPosition - this.position) <= 15) {
          this.messages.push(message);
        }
      });
    }

    moveTo(distance) {
      this.position = distance;
    }

    shout(message) {
      eventBus.emit("message", message, this.position);
    }

    messagesHeard() {
      return this.messages;
    }
  },
};
