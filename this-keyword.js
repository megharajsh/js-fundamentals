// this refers in 2 different contextx

// 1. method -> obj
// 2. function -> global (window in browser, global in node) 

const employee = {
  firstname: 'John',
  lastname: 'Doe',

  getFullname() {
    console.log(this);
    return `${this.firstname} ${this.lastname}`;
  }
}

employee.getFullname();


