# JavaScript Primitive Types

- undefined
- null
- boolean
- number
- string
- symbol
- object
- bigint (future - Currently its in Stage-3 development)

## Sub Types of Object
- function
- array

## typeof Operator
```js
var v;
typeof v;     // "undefined"

v = "1";
typeof v;     // "string"

v = 2;
typeof v;     // "number"

v = true;
typeof v;     // "boolean"

v = {};
typeof v;     // "object"

v = Symbol();
typeof v;     // "symbol"

v = null;
typeof v;     // "object"   OOPS!

v = function(){};
typeof v;     // "function"

v = [1,2,3];
typeof v;     // "object" 

// Coming Soon!
v = 42n;      // or BigInt(42)
typeof v;     // "bigint"

```

## Special Values - NaN ("not a number")
```js
var myAge = Number("0o46");         //  38
var myNextAge = Number("39");       //  39
var myCatAge  = Number("n/a");      //  NaN
myAge - "My son's age";             //  NaN

myCatAge === myCatAge;              //  false   OOPS! - NaN is the only value not equal to itself

isNaN(myAge);                       //  false
isNaN(myCatAge);                    //  true
isNaN("My son's age");              //  true    OOPS  - "My son's age" coerces to NaN before the check

ES6 Implementation
Number.isNaN(myCatAge);             // true - It does not do coercion to NaN
Number.isNaN("My son's age");       // false - NaN is the only value not equal to itself

```


## Special Values - Negative Zero
```js
var trendRate = -0;
trendRate === -0;           //  true

trendRate.toString();       //  "0" OOPS!
trendRate === 0;            //  true OOPS!
trendRate < 0;              //  false
trendRate > 0;              //  false

ES6 Implementation
Object.is(trendRate, -0);   //  true
Object.is(trendRate, 0);    //  false

```

### Polyfill for `Object.is(..)`
```js

if (!Object.is /*|| true*/) {
	Object.is = function ObjectIs(x,y) {
		var xNegZero = isItNegZero(x);
		var yNegZero = isItNegZero(y);

		if (xNegZero || yNegZero) {
			return xNegZero && yNegZero;
		}
		else if (isItNaN(x) && isItNaN(y)) {
			return true;
		}
		else if (x === y) {
			return true;
		}

		return false;

		// **********

		function isItNegZero(x) {
			return x === 0 && (1 / x) === -Infinity;
		}

		function isItNaN(x) {
			return x !== x;
		}
	};
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);

```
