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


