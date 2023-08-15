## Udemy - React - The Complete Guide (incl Hooks, React Router, Redux)

### Destructuring
- Easily extract array elements or object properties and store them in variables

#### Array Destructuring

```
[a, b] = ["Hello", "Rolling"]
console.log(a) // Hello
console.log(b) // Rolling

const [firstName, lastName] = ["Vanessa", "Park"];
console.log(firstName);
console.log(lastName);

```

#### Object Destructuring

```
{name} = {name: 'Yumi', age: 28}
console.log(name) // Yumi
console.log(age) // undefined

const {name, age} = {
  name: "Mia",
  age: 33
}
console.log(name)
console.log(age)
```

#### Array methods: findIndex and map

```
const hobbies = ["yoga", "baking", "golf"];

const index = hobbies.findIndex((hobby) => 
 hobby === 'golf'
)
console.log(index);

const newHobbies = hobbies.map((item) => ({text: item}))
console.log(newHobbies)```

#### spread operator

```
// wrong example
const hobbies = ["golf", "swimming"];
const newHobbies = ["tennis"];
const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies)

// correct example
const mergedHobbies2 = [...hobbies, ...newHobbies];
console.log(mergedHobbies2)
```