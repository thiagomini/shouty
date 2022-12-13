const EventEmitter = require("events");
const eventBus = new EventEmitter();

module.exports = {
  Person: class Person {
    constructor(name, location = 0, range = 15) {
      this.name = name;
      this.position = location;
      this.messages = [];
      this.range = range;

      eventBus.on("message", (message, originPosition) => {
        if (Math.abs(originPosition - this.position) <= this.range) {
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
