// make a stack

var Stack = function() {
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

Stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined;
    }

    var result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
}

Stack.prototype.size = function() {
    return this.count;
}



// make a queue

var Queue = function() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
}

Queue.prototype.enqueue = function(value) {
    if (value) {
        this.storage[this.count] = value;
        this.count++;
    }
}

Queue.prototype.dequeue = function() {
    if (this.count - this.lowestCount === 0) {
        return undefined;
    }

    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
}

Queue.prototype.size = function() {
    return this.count - this.lowestCount;
}