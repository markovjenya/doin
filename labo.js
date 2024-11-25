/**
 * Reacts to events from the given source.
 * 
 * @param {EventStream|Operator} source - The event source to react to.
 */
function reactToEvents(source) {
    if (source instanceof EventStream) {
        // Handle the EventStream case
        source.on('event', eventHandler);
    } else if (source instanceof Operator) {
        // Handle the Operator case
        source.operate(eventHandler);
    } else {
        throw new TypeError('source must be an EventStream or Operator');
    }
}

function eventHandler(event) {
    console.log('Event received:', event);
}

// Assuming you have some definitions for EventStream and Operator
class EventStream {
    on(eventType, handler) {
        // Implementation for adding event listener
    }
}

class Operator {
    operate(handler) {
        // Implementation for operating with a handler
    }
}

// Usage example
const eventStream = new EventStream();
reactToEvents(eventStream);

const operator = new Operator();
reactToEvents(operator);
