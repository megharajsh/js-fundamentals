# JavaScript Primitive Types

- nndefined
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
```sh
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
v = 42n; // or BigInt(42)
typeof v;     // "bigint"

```

## Special Values - NaN ("not a number")
```sh
var myAge = Number("0o46");         //  38
var myNextAge = Number("39");       //  39
var myCatAge  = Number("n/a");      //  NaN
myAge - "My son's age";             //  NaN

myCatAge === myCatAge;              //  false   OOPS! - NaN is the only value not equal to itself

isNaN(myAge);                       //  false
isNaN(myCatAge);                    //  true
isNaN("My son's age");              //  true    OOPS  - "My son's age" coerces to NaN before the check, then it checks with NaN returns the boolean

ES6 Implementation
Number.isNaN(myCatAge);             // true - It does not do coercion to NaN

```
