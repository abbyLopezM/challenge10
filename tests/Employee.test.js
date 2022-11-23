const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

//testing to see if new employee object is created with correspoding name,id,email
test("Creating a new employee",() =>{
    const newName ="Abby";
    const employeeID= 1012;
    const newEmail = "abby@abby.com"
    const employeeNew = new Employee(newName, employeeID, newEmail);
    expect(employeeNew.name).toBe(newName);
    expect(employeeNew.id).toBe(employeeID);
    expect(employeeNew.email).toBe(newEmail);


});

//testing getName
test("Get employee Name",() =>{
    const employeeNew = new Employee('Abby', 1012, "abby@abby.com");
    expect(employeeNew.getName()).toBe('Abby');

});
//testing getId
test("Get employee Id",() =>{
    const id = 1012;
    const employeeNew = new Employee("Abby",id);
    expect(employeeNew.getId()).toBe(id);

});
//testing getEmail
test("Get employee Email",() =>{
    const email = "abby@abby.com";
    const employeeNew = new Employee("Abby", 1012, email);
    expect(employeeNew.getEmail()).toBe(email);

});
//testing getRole
test("Get employee Role",() =>{
    const Role = "Employee";
    const employeeNew = new Employee("Abby", 1012, email);
    expect(employeeNew.getRole()).toBe(Role);

});