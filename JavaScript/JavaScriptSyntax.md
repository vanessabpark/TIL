## JSON

- JSON is a syntax for storing and exchanging data. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server

```
let object = { "name": "Lee", "gender": "female", "city": "Dubai" };
let JSON = JSON.stringify(object);
```

- If you receive data in JSON format, you can convert it into a JavaScript object

```
let myJSON = '{ "name": "Lee", "gender": "female", "city": "Dubai" }';
let object = JSON.parse(myJSON);
```

### Object literal & new Object() syntax
```
// Object literal
var human = {
    firstName: 'Rory',
    lastName: 'Gilmore',
    age: 18,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
// new Object() syntax
var human = new Object()
console.log(human) // creates an empty object

human.key1 = "value1";
human["key2"] = "value2";
```

### Object methods
#### 1. assign()

```
// Merge an object
let first = { name: 'Rory' };
let last = { lastName: 'Gilmore' };
let person = Object.assign(first, last);
console.log(person); // { name: 'Rory', lastName: "Gilmore } 

// Merge multiple sources
let a = Object.assign( {foo: 0}, {bar: 1}, {baz: 2});
console.log(a) // { foo: 0, bar: 1, baz: 2 }

// Merge and overwrite equal keys
let myA = Object.assign( { cecil: 32 }, { yj: 27 }, { arielle: 5 })
console.log(myA) // { cecil: 32, yj: 27, arielle: 5 }

let b = Object.assign( { foo: 0} , { foo: 1 }, { foo: 2 })
console.log(b) // { foo: 2 }

let myB = Object.assign( { yoga: 1 }, { yoga: 2 }, { yoga: 3 } )
console.log(myB) // { yoga: 3 }

// Clone an object
let obj = { person: "Theo Mercer" };
let clone = Object.assign( {}, obj);
console.log(clone); // { person: "Theo Mercer" }
```

