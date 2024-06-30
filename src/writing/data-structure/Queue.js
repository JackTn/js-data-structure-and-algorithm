
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


var Q1 = new Queue();
console.log(Q1.size());
Q1.enqueue(1);
console.log(Q1.size());

// 击鼓传花

function passGame(nameList, num) {
    var Q = new Queue();

    // for (const name of nameList) {
    //     Q.enqueue(name);
    // }

    for (var j = 0; j < nameList.length; j++) {
        Q.enqueue(nameList[j]);
    }

    while (Q.size() > 1) {
        for (var i = 0; i < num - 1; i++) {
            Q.enqueue(Q.dequeue());
        }
        Q.dequeue();
    }

    var endItem = Q.front();
    return `最后一个是${Q.front()}并且在原来${nameList.indexOf(endItem)}的位置上`;

}

var nameList = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(passGame(nameList, 1));


// 暂时性死区始于作用域开头
console.log(bar); // "undefined"
//  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//  console.log(har); // ReferenceError: Cannot access 'har' before initialization
var bar = 1;
let foo = 2; // 暂时性死区结束（对 foo 而言）
const har = 2; // 暂时性死区结束（对 har 而言）