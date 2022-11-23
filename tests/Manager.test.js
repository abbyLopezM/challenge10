const { default: test } = require("node:test");
const Manager = require("../lib/Manager");


//testing to see if new employee of type manager is created, does office number work 
test("Testing new engineer, github and get github",() =>{
    const officeNum = 15;
    const employeeNew = new Manager("Abby", 1012,'abby@abby.com',officeNum);
    expect(employeeNew.officeNum).toBe(officeNum);

});

//testing getRole
test("Get employee Role",() =>{
    const Role = "Manager";
    const employeeNew = new Manager("Abby", 1012,'abby@abby.com',15);
    expect(employeeNew.getRole()).toBe(Role);

});