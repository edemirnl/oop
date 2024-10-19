class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce() {
        return ' Hi, my name is ${this.name} and I am ${this.age} years old.';
    }
}
const person1 = new person('ali', 25);

function describeperson(callback) {
    callback.call(person1);
}
function logIntroduction() {
    const introduction = this.introduce();
    console.log(introduction);
    document.getElementById('output').innerText += introduction + "\n";
}
describeperson(logIntroduction);
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited for ${milliseconds} milliseconds`);
        }, milliseconds);
    });
}
wait(2000).then((message) => {
    console.log(message);
    document.getElementById('output').innerText += message + "\n";
});