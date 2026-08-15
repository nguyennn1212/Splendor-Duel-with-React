# Object in Javascript

- Object is a dynamic data structure that stores related data as key-value pairs.
- Objects are mutable and dynamic properties can be added, modified, or deleted at any time.

1. Creation Using Object Literal

```
let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);
```

2. Creation Using new Object() Constructor

```
let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"

console.log(obj);
```

**Just use the literal method - it's better**

- Readability differences.

## Basic Operation on JavaScripts Objects

### 1. Accessing Object Properties

```
let obj = { name: "Sourav", age: 23 };

// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);
```

### 2. Modifying object Properties

```
let obj = { name: "Sourav", age: 22 };
console.log(obj);

obj.age = 23;
console.log(obj);
```

### 3. Adding Properties to an Object

```
let obj = { model: "Tesla" };
obj.color = "Red";

console.log(obj);
```

Result:

```
{"model":"Tesla","color":"Red"}
```

### 4. Removing Properties from an Object

```
let obj = { model: "Tesla", color: "Red" };
delete obj.color;

console.log(obj);
```

### 5. Regconizing a Javascript Object

To check if a value is an object, use typeof and verify it's not null.

```
let obj = { name: "Sourav" };
console.log(typeof obj === "object" && obj !== null);
```

# Classes in Javascript

Use the keyword class to create a class.

**Always add a method named constructor():**

_Syntax_

```
class ClassName {
  constructor() { ... }
}
Example
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
```

The example above creates a class named "Car".

The class has two initial properties: "name" and "year".
