
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