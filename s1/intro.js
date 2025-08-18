var name = "Akshith G";
console.log(name);

console.log(global); // global object in NodeJS is the 'global' object, (In the browser, global is 'window')
console.log(this); // 'this' in nodeJS does not point to global object unlike browser behaviour, "Empty object" here.

console.log(globalThis); // global === globalThis in NodeJS
