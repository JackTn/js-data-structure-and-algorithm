class Stack {
    constructor(items) {
        this.items = items ? items : [];
    }

    push(item) {
        return this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek(i) {
        var i = i ? 1 : i;
        return this.items[this.items.length - i];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.map(function (i) {
            return i + "";
        })
    }

    show() {
        return this.items;
    }
}


var s1 = new Stack(['a', 'b', 'c']);
s1.push('23');
s1.push('33');
s1.pop();
s1.push(1);
console.log(s1.size());
console.log(s1.show());
console.log(s1.toString());
console.log(s1.peek(1));

var s2 = new Stack();
s2.push('23');
s2.push('33');
s2.pop();
s2.push(1);
console.log(s2.size());
console.log(s2.show());
console.log(s2.toString());
console.log(s2.peek(1));


function Stack2() {
    this.items = [];
    // @1
    // this.push = function() {};

    // @2
    Stack2.prototype.add = function (e) {
        return this.items.push(e);
    }
    Stack2.prototype.show = function () {
        return this.items;
    }
}

var s3 = new Stack2();
console.log(s3.add('1'));
console.log(s3.show());


// 十进制转二进制
console.log(25 / 2); // 普通除法
console.log(25 % 2); // 取余数
console.log(Math.floor(25 / 2)); // 取整数

function dec2bin(num) {
    var stack = new Stack();
    var decNum = num;
    while (decNum > 0) {
        stack.push(decNum % 2);
        decNum = Math.floor(decNum / 2);
    }
    var binNum = [];
    while (!stack.isEmpty()) {
        binNum.push(stack.pop());
    }
    // GC
    stack = null;
    return binNum.join('');
}

console.log(dec2bin(12));