1) What is the difference between var, let, and const?

Ans: The Main difference is that var is a function-scope, so it can be re-declared and reassigned, but both let and const are block-scoped, which cannot be re-declared, but let can be re-assigned and const cannot be re-assigned.

2) What is the difference between map(), forEach(), and filter()?

Ans: All of them are array methods used for iterating over array el. 
i. forEach() runs a function for each el of an array and it does not create a new array or modify the original array.
ii. map() is used to create a new array by taking el from the original array. It returns a new array as a value.
iii. filter() method is used to create a new array by filtering what we want.

3) What are arrow functions in ES6?

Ans: Arrow functions in ES6 shorten the function writing time, and also simplify function writing, and can use 'this' keyword in them.

4) How does destructuring assignment work in ES6?

Ans: Destructuring assignment in ES6 can extract values from an array or properties from an object and assign them to their own variables. It works by extracting all the el from an array and from left to right it assign them with a variable.

5) Explain template literals in ES6. How are they different from string concatenation?

Ans: Template literals are a new way to work with strings, which was introduced in ES6. 
Main difference from string is that it uses backtick(``) and not quotes. different from string concat and template concat is
string concat uses + operator to join strings and variables, but template literals use backticks and ${} for embedding.