//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  // Constructor for Student class is not needed as it will inherit from Person

  // Method specific to Student class
  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
  // Constructor for Teacher class is not needed as it will inherit from Person

  // Method specific to Teacher class
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}

// Creating instances of the classes
const person1 = new Person("Alice", 30);
const student1 = new Student("Bob", 20);
const teacher1 = new Teacher("Mr. Smith", 40);

// Using getter and setter
console.log(person1.name); // Output: Alice
person1.age = 31;

// Calling methods
student1.study();  // Output: Bob is studying.
teacher1.teach();  // Output: Mr. Smith is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
