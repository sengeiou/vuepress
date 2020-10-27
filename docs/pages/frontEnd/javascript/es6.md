---
autoGroup-4: 其他
title: ES6
date: 2020-10-26
sticky: 3
categories:
- FrontEnd
tags:
- JavaScript
  - Summary
---

## 1. 解构赋值

### 1.1 Array 

+ 一维数组
```js
let [a, b, c] = [1, 2, 3];
// a = 1
// b = 2
// c = 3
```

+ 嵌套数组
```js
let [a, [[b], c]] = [1, [[2], 3]];
// a = 1
// b = 2
// c = 3
```

+ 可忽略
```js
let [a, , b] = [1, 2, 3];
// a = 1
// b = 3
```

+ 不完全解构
```js
let [a = 1, b] = []; // a = 1, b = undefined
```

+ 扩展运算符
```js
let [a, ...b] = [1, 2, 3];
//a = 1
//b = [2, 3]
```   

+ 字符串
> 解构的目标若为可遍历对象，皆可进行解构赋值( 可遍历对象即实现 Iterator 接口的数据 )
```js
let [a, b, c, d, e] = 'hello';
// a = 'h'
// b = 'e'
// c = 'l'
// d = 'l'
// e = 'o'
```

### 1.2 Object
+ 基本
```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'
 
let { baz : foo } = { baz : 'ddd' };
// foo = 'ddd'
```

+ **别名模式**
```js
let obj = {name: 'abc', age: 20};
let {name: name1, age: age1} = obj;
// name1 = 'abc'
// age1 = 20
```

+ 扩展运算符
```js
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40};
// a = 10
// b = 20
// rest = {c: 30, d: 40}
```
+ 解构默认值
```js
let {a = 10, b = 5} = {a: 3};
// a = 3; b = 5;
let {a: aa = 10, b: bb = 5} = {a: 3};
// aa = 3; bb = 5;
```
+ 可嵌套可忽略
```js
let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, { y }] } = obj;
// x = 'hello'
// y = 'world'

let obj = {p: ['hello', {y: 'world'}] };
let {p: [x, {  }] } = obj;
// x = 'hello'
```

+ 不完全解构
```js
let obj = {p: [{y: 'world'}] };
let {p: [{ y }, x ] } = obj;
// x = undefined
// y = 'world'
```

## 2. let & const
+ let / const 
> 1.不会进行变量提升   
> 2.不会为全局变量window设置属性   
> 3.不能重复声明，若重复声明，编译报错    

+ let / var
> `let` 和 `var` 声明的变量可以重新赋值（更改指针指向）   
> `const` 不可以重新赋值（指针指向不可更改，但指针所指向的堆内存中的数据结构可以发生更改，指针是存储在栈内存中）

## 3. Set & WeakSet

### 3.1 Set
Set对象允许存储任何类型对唯一值（不重复）

**⚠️注意**
```js
let a = [1, 1, 3, 3, 4, {}, {}, false, false, true, 'true', NaN, NaN, null, null, undefined, undefined, [], []]
// [1, 3, 4, {…}, {…}, false, true, "true", NaN, null, undefined, Array(0), Array(0)]
```
### 3.1 WeakSet
成员对象只能是对象，成员对象不再被引用时，[垃圾回收机制](https://tienouc.gitee.io/vuepress/pages/frontEnd/javascript/Js%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E6%9C%BA%E5%88%B6%E5%8E%9F%E7%90%86.html)就会回收其所占的内存

## 4. Map & WeakMap
### 4.1  Map
Map对象保存键值对，键和值可以是任意值
```js
var myMap = new Map();
var keyString = "This is keyString"; 
 
myMap.set(keyString, "和键'This is keyString'关联的值");
 
myMap.get(keyString);    // "和键'This is keyString'关联的值"
myMap.get("This is keyString");   // "和键'This is keyString'关联的值", 因为 keyString === 'This is keyString'
```
> Object的键只能是字符串或者Symbol
### 4.2 WeakMap
其键只能是引用类型( 主要用于对内存敏感的场景 ，一般开发很少用到，相关知识点暂时挂起，后续补齐示例)

## 5. Symbol
> ES6 引入的新的原始数据类型，表示独一无二的值，用来给对象定义唯一的属性名   
> 作为属性名时，是公有属性，可以被外部访问，但不会出现在 for in / for of循环中，想要获取，只能通过 `Object.getOwnPropertySymbol()` 或者 `Reflect.ownKeys()` 取到

## 6. Promise

以同步形式（链式）呈现异步操作，解决多层回调嵌套的一种解决方案   

实例创建
```js
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});
```

### 6.1. 三态
+ pending （进行中）  
+ fulfilled (已成功)   
+ rejected （已失败）   
   
除了异步操作的结果，任何其他操作都无法改变这个状态；      
Promise对象只有从 `pending` 变为 `fulfilled` 和从 `pending` 变为 `rejected` 的状态改变。只要处于 `fulfilled` 和 `rejected` ，状态就不会再变了，即 `resolved（已定型）`。
### 6.2 常用方法
+ promise.then(onFulfilled, onRejected)

+ Promise.all (将多个 Promise 实例，包装成一个新的 Promise 实例)   

```js
var p = Promise.all([p1,p2,p3]);
```   

> Promise.all 方法接受一个数组作为参数，p1、p2、p3 都是 Promise 对象的实例。（Promise.all 方法的参数不一定是数组，但是必须具有 iterator 接口，且返回的每个成员都是 Promise 实例。）   


> 上例中 p 的状态由 p1、p2、p3 决定，分成两种情况。（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


+ Promise.race （将多个 Promise 实例，包装成一个新的 Promise 实例）
```js
var p = Promise.race([p1,p2,p3]);
```
> 上例中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值   

......


## 7. 箭头函数

箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 `this、arguments、super` 和 `new.target`。箭头函数更适用于本来应该需要匿名函数的地方，并且它们不能用作构造函数。


```js
class Person{
    constructor(name){
        this.name = name
    }
}

Object.assign(Person.prototype, {
    getName: ()=>{
        return this.name   // this 指向 window
    }
})

const me = new Person('Yokiijay')
console.log( me.getName() ) // => undefined
```
由于箭头函数的 this 继承自上一层对象的 this (***而 function 的 this 是当前调用自己的对象的 this***),所以这里用箭头函数并拿不到 Person 对象下的 name 属性, 箭头函数声明的时候 context 就已经决定了

此时想拿到 name 属性， 可以利用穿透法
```js
var _this = this
class Person{
    constructor(name){
        _this.name = name
    }
}
Object.assign(Person.prototype, {
    getName: ()=>{
        return this.name
    }
})

const me = new Person('Yokiijay')
console.log( me.getName() )
```
