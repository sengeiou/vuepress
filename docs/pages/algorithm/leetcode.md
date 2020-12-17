1. 输入一个正（负）数，求其从 0 开始的累加和

```js
// 常规循环
let sumFn = function(num) {
  let sum = 0
  function sumPositive(num) {
    for (let i = 0; i <= num; i++) {
      sum += i
    }
    return sum
  }
  function sumNegative(num) {
    for (let i = num; i <= 0; i++) {
      sum += i
    }
    return sum
  }
  return num > 0 ? sumPositive(num) : sumNegative(num)
}
```

```js
// 递归
let sumFn = function(num) {
  if (num > 0) {
    return num + sumFn(num - 1)
  } else if (num < 0) {
    return num + sumFn(num + 1)
  } else {
    return 0
  }
}
```

2. 【leetcode-20. 有效的括号】
   给定一个只包括 '('，')'，'{'，'}'，'['，']'  的字符串，判断字符串是否有效。
   有效字符串需满足：  
   左括号必须用相同类型的右括号闭合。  
   左括号必须以正确的顺序闭合。  
   注意空字符串可被认为是有效字符串。

```js
// 替换最小括号为空，检查最终字符串的长度是否为0
var isValid = function(s) {
  if (s.length % 2) {
    return false
  }

  let len = s.length / 2
  for (let i = 0; i < len; i++) {
    s = s
      .replace('{}', '')
      .replace('()', '')
      .replace('[]', '')
  }
  return s.length == 0
}
```

```js
// 栈思想，遇到左括号，一律推入栈中，遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环，最后 arr.length 为 0 时返回 true。
var isValid = function(s) {
  let arr = []
  let len = s.length
  if (len % 2) return false
  for (let i = 0; i < len; i++) {
    let letter = s[i]
    switch (letter) {
      case '(': {
        arr.push(letter)
        break
      }
      case '[': {
        arr.push(letter)
        break
      }
      case '{': {
        arr.push(letter)
        break
      }
      case ')': {
        if (arr.pop() !== '(') return false
        break
      }
      case ']': {
        if (arr.pop() !== '[') return false
        break
      }
      case '}': {
        if (arr.pop() !== '{') return false
        break
      }
    }
  }
  return !arr.length
}
```
