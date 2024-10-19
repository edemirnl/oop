// Exercise 1 - Classes: Creating a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // introduce method to introduce the person
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Exercise 2 - This: Creating a person object and using 'this' context in a callback
const person1 = new Person('John', 25);

// describePerson function with callback and custom 'this' context
function describePerson(callback) {
    callback.call(person1);
}

// Callback function that logs the introduction
function logIntroduction() {
    const introduction = this.introduce();
    console.log(introduction);
    document.getElementById('output').innerText += introduction + "\n";
}

// Calling the describePerson function
describePerson(logIntroduction);

// Exercise 3 - Promises: A function that returns a Promise and resolves after a delay
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${milliseconds} milliseconds`);
        }, milliseconds);
    });
}

// Testing the wait function and logging the result to the console and page
wait(2000).then((message) => {
    console.log(message);
    document.getElementById('output').innerText += message + "\n";
});
