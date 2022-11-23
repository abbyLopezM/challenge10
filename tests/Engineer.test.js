const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");


//testing to see if new employee of type engineer is created, does github work and getgithub
test("Testing new engineer, github and get github",() =>{
    const githubname = "abbyLopezM"
    const employeeNew = new Engineer("Abby", 1012,'abby@abby.com',githubname);
    expect(employeeNew.github).toBe(github);
    expect(employeeNew.getGithub()).toBe(githubname);

});

//testing getRole
test("Get employee Role",() =>{
    const Role = "Engineer";
    const employeeNew = new Engineer("Abby", 1012,'abby@abby.com',"abbyLopezM");
    expect(employeeNew.getRole()).toBe(Role);

});