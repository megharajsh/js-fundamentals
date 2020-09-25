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
if (!Object.is) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);
    
    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      return true;
    } else {
      return x === y;
    }
    
    function isItNegZero(v) {
      return v == 0 && (1/v) == -Infinity;
    }
    
    function isItNaN(v) {
      return v !== v
    }
  };
}
```
