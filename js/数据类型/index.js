// Number

// const min = Number.MIN_VALUE;
// const max = Number.MAX_VALUE;
// const safeMax = Number.MAX_SAFE_INTEGER;
// const safeMin = Number.MIN_SAFE_INTEGER;
// console.log(min)  // 5e-324
// console.log(max)  // 1.7976931348623157e+308
// console.log(safeMax); //9007199254740991
// console.log(safeMin); //-9007199254740991

// console.log(2/0); //Infinity
// console.log(2/-0); //-Infinity
// console.log('a'/1); //NaN
// console.log('a'/0); //NaN
// console.log(typeof(Infinity)); //number
// console.log(typeof(-Infinity)); //number
// console.log(typeof(NaN)); //number

// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN
// console.log(Number("abcd")); //NaN
// console.log(Number("12345")); //12345
// console.log(Number("0023456")); //23456
// console.log(Number("01.2")); //1.2
// console.log(Number("0xf")); //15 十六进制转成十进制

// const a = 2**10;
// const b = Math.pow(2,10);
// console.log(a,b); //1024 1024







// BigInt

// const a = 123445566666666666n;
// const b = BigInt("123445566666666666");
// console.log(a === b); //true

// const a = 10n;
// const b = 10;
// const c= 5;
// const d = 15;

// console.log(a/2);  //TypeError: Cannot mix BigInt and other types, use explicit conversions

// console.log(a+2n); //12n
// console.log(a-2n); //8n
// console.log(a*2n); //20n
// console.log(a%3n); //1n
// console.log(a**3n); //1000n
// console.log(a/3n); //3n

// console.log(a == b); //true
// console.log(c < a < d); // true
// let e = +a;
// console.log(e); //TypeError: Cannot convert a BigInt value to a number
// console.log(Number(a)); //10








// String


// const name = 'Tom'
// const str = `
//   My name  is ${name} \n I'm ${getAge(50)} years old
// `
// function getAge(age) {
//   return age;
// }
// console.log(str); // My name  is Tom I'm 50 years old

// const name = 'Tom';
// const message = tag`My name is ${name},I'm ${getRelAge(30)} years old, and my friend is ${getFriendName()}`

// function getRelAge(fakeAge) {
//  return fakeAge+30;
// }

// function getFriendName() {
//   return 'Tomy'
// }

// function tag (stringArr,...value) {
//   console.log(stringArr);  // [ 'My name is ', ',I\'m ', ' years old, and my friend is ', '' ]
//   console.log(...value); // Tom 60 Tomy
// }

// const a = '456';
// const  b = a.padStart(6, "123").padEnd(9,"789");
// console.log(b); //123456789





// Boolean

// console.log(Boolean(true)); //true
// console.log(Boolean(1)); //true
// console.log(Boolean(123423)); //true //非零数值,包括无穷值
// console.log(Boolean(Infinity)); //true  //非零数值,包括无穷值
// console.log(Boolean("abcd")); //true //非空字符串

// console.log(Boolean(0)); //false
// console.log(Boolean(false)); //false
// console.log(Boolean('')); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean(null)); //false





// Null Undefined

// console.log(null == undefined); //true
// console.log(null === undefined); //false







//Object

// const person = new Object();
// person.name = "Tom";
// person.age = 27;
// console.log(person); // { name: 'Tom', age: 27 }

// const friend = {
//   name: 'Tomy',
//   age: 25
// }
// console.log(friend); //{ name: 'Tomy', age: 25 }
// console.log(typeOf(person)); //true

// function typeOf(obj) {
//   return toString.call(obj).slice(8, -1).toLowerCase();
// }

//Symbol

// const s1 = Symbol('s1');
// const s2 = Symbol('s1');
// console.log(s1 === s2); //false

// const s1 = new Symbol();
// console.log(s1); //TypeError: Symbol is not a constructor

// const order = {};
// const id = Symbol();
// order[id] = 213;
// order.name = 'food';
// console.log(order); //{ name: 'food', [Symbol()]: 213 }
// console.log(order[id]); //213

