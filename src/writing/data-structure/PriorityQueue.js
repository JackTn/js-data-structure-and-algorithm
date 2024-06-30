
function PriorityQueue() {

    function PriorityQueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.items = [];

    PriorityQueue.prototype.enqueue = function (element, priority) {
        var priorityQueueElement = new PriorityQueueElement(element, priority);

        if (this.items.length === 0) {
            this.items.push(priorityQueueElement);
        } else {
            var isAdd = false;
            for (var i = 0; i < this.items.length; i++) {
                if (priorityQueueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, priorityQueueElement);
                    isAdd = true;
                    break;
                }
            }

            if (!isAdd) {
                this.items.push(priorityQueueElement);
            }
        }

    }

    PriorityQueue.prototype.size = function () {
        return this.items.length;
    }

    PriorityQueue.prototype.show = function () {
        return this.items.map(item => item.element + '-' + item.priority);
    }
}

var PQ = new PriorityQueue();
PQ.enqueue('a', 11);
PQ.enqueue('c', 223);
PQ.enqueue('d', 1123);
PQ.enqueue('e', 3);
PQ.enqueue('f', 33);
console.log(PQ.show());


// class 实现
class PriorityQueueElement1 {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

function PriorityQueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
}


class Queue {
    constructor(items) {
        // 会改变原数组 不建议
        // this.items = items ? items : [];
        // 建议
        this.items = [];
    }

    enqueue(item) {
        return this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.map(item => item.toString());
    }

}

class PriorityQueueClass extends Queue {
    constructor() {
        super();
    }

    enqueue(element, priority) {
        var priorityQueueElement = new PriorityQueueElement(element, priority);

        if (this.items.length === 0) {
            this.items.push(priorityQueueElement);
        } else {
            var isAdd = false;
            for (var i = 0; i < this.items.length; i++) {
                if (priorityQueueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, priorityQueueElement);
                    isAdd = true;
                    break;
                }
            }

            if (!isAdd) {
                this.items.push(priorityQueueElement);
            }
        }

    };

    size() {
        return super.size();
    };

    isEmpty() {
        return super.isEmpty();
    };

    show() {
        return this.items.map(item => item.element + '-' + item.priority);
    };
}

var PQ2 = new PriorityQueueClass();
PQ2.enqueue('a', 11);
PQ2.enqueue('c', 223);
PQ2.enqueue('d', 1123);
PQ2.enqueue('e', 3);
PQ2.enqueue('f', 33);
console.log(PQ2.show());
console.log(PQ2.isEmpty());