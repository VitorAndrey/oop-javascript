// Here we have the same logic written in diferent ways

// Functional Programming
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

console.log(getWage(baseSalary, overtime, rate));

// Object Oriented Programming
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,

  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
