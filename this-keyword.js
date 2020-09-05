// this refers in 2 different contextx

// 1. method -> obj
// 2. function -> global (window in browser, global in node) 

const employee = {
  firstname: 'John',
  lastname: 'Doe',

  getFullname() {
    console.log(this); 
    // prints as below - here `this` refers to the employee object
    // {firstname: "John", lastname: "Doe", getFullname: f}
    return `${this.firstname} ${this.lastname}`;
  }
}

employee.getFullname();

employee.display = function() {
  console.log(this); 
  // this prints as below - here `this` refers to the employee object
  // {firstname: "John", lastname: "Doe", getFullname: f, display: f}
}
employee.display();

/* ---------------------------------------------------------------------- */

function displayName() {
  console.log(this);
  // this prints as below - here `this` refers to the Window object
  // Window {postMessage: f, ......}
}

displayName();


/* ---------------------------------------------------------------------- */

function Student(name) {
  this.name = name;
  console.log(this);
  // this prints as below - here `this` refers to the Student object
  // Student {name: "Megharaj"}
}

const student = new Student('Megharaj'); // Creates empty object {} first

/* ---------------------------------------------------------------------- */

const student1 = {
  name: 'John Doe',
  courses: ['computers', 'maths', 'english'],

  displayCourses() {
    this.courses.forEach(function(cource) {
      console.log(this.name, course);
      // this prints as below - here `this` refers to the anonymous function which is Window object
      // undefined "computers"
      // undefined "maths"
      // undefined "english"
      console.log(this, course); // this refers to Window object
    });
  }
}

student1.displayCourses();
// To reference the student object, the callback function has one more argument which we can reference to
// respective object as mentioned in the below solution
/* ---------------------------------------------------------------------- */

const student2 = {
  name: 'John Doe',
  courses: ['computers', 'maths', 'english'],

  displayCourses() {
    this.courses.forEach(function(cource) {
      console.log(this.name, course);
      // this prints as below - here `this` refers to the student2 object
      // "John Doe" "computers"
      // "John Doe"  "maths"
      // "John Doe"  "english"
      console.log(this, course); // this refers to student2 object
    }, this);
  }
}

student2.displayCourses();
