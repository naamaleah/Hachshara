class Phone{
    constructor(brand ,model)
    {
        this.brand = brand;
        this.model = model;
    }
    details(){
        return `Phone:${this.brand} ${this.model} `;
    }
}

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width*this.height;
    }
}

class BankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        this.balance+= amount;
        return `balance = ${this.balance}`;
    }

    withdraw(amount){
        this.balance-= amount;
        return `balance = ${this.balance}`;
    }

    checkBalance(){
         return `balance: ${this.balance}`;
    }
}


function Animal(name){
    this.name = name;
    }

Animal.prototype.speak = function(){
     console.log(`${this.name} makes a sound`);
    }

function Dog(name){
     Animal.call(this, name);
    }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log(`${this.name} barks`);
}


function Vehicle(type){
    this.type = type;
}

Vehicle.prototype.describe = function(){
    console.log(`This is a ${this.type}`);
}

function Car(brand){
    Vehicle.call(this, "car");
    this.brand = brand;
}
 Car.prototype = Object.create(Vehicle.prototype);
 Car.prototype.constructor = Car;

 Car.prototype.info = function(){
    console.log(` This is a ${this.brand} ${this.type}`);
 }

 function Shape(){
 }
 Shape.prototype.area=function(){
    return 0;
 }

 function Circle(radius){
    this.radius = radius;
 }
 
 Circle.prototype = Object.create(Shape.prototype);
 Circle.prototype.constructor = Circle;

 Circle.prototype.area = function(){
    return Math.PI *this.radius*this.radius;
 }

 function Square(side){
    this.side = side;
 }

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function(){
    return this.side*this.side
}

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    info(){
        return`${this.title} by ${this.author}`;
    }
}

class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        return ` Hello, I'm ${this.name}`;
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
    study(){
        return `${this.name} is studying at ${this.school}`;
    }
}

class Employee {
    #salary;
    constructor(salary){
        this.#salary = salary;
    }

    getSalary(){
        return this.#salary;
    }

    work(){
        return `Employee is working`;
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary);
    }
    work(){
        return ` Manager is managing`
    }
}