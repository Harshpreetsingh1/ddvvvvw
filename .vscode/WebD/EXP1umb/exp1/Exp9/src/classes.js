class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name}.`;
    }

    getType() {
        return "Person";
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
    }

    getType() {
        return "Student";
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }

    getType() {
        return "Teacher";
    }
}

export { Person, Student, Teacher };
