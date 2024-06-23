// 

var arr1 = new Array(5);
console.log(arr1)
console.log(arr1.length)
// 创建一个只能包含字符串的数组可以通过类型检查来实现
function createStringArray() {
    let stringArray = [];

    const pushIfString = (element) => {
        if (typeof element === 'string') {
            stringArray.push(element);
            return true;
        }
        return false;
    };

    const proxy = new Proxy(stringArray, {
        push: (target, ...args) => {
            const everyResult = args.every(pushIfString);
            if (everyResult) {
                return Reflect.apply(Array.prototype.push, target, args);
            } else {
                throw new Error('Array can only contain strings.');
            }
        },
    });

    return proxy;
}

const myStringArray = createStringArray();

try {
    myStringArray.push('Hello', 123, 'World');
} catch (error) {
    console.log(error.message); // 输出: Array can only contain strings.
}

console.log(myStringArray); // 输出: ['Hello', 'World']