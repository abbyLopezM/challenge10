const { default: test } = require("node:test");
const Intern = require("../lib/Intern");


//testing to see if new employee of type intern is created dos school work
test("Testing new intern and school",() =>{
    const schoolname = "UCR"
    const employeeNew = new Engineer("Abby", 1012,'abby@abby.com',schoolname);
    expect(employeeNew.schoolname).toBe(schoolname);
});

//testing getRole
test("Get employee Role",() =>{
    const Role = "Engineer";
    const employeeNew = new Intern("Abby", 1012,'abby@abby.com',"UCR");
    expect(employeeNew.getRole()).toBe(Role);

});