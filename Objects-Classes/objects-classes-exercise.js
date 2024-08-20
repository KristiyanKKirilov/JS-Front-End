//1
console.log(['-1-']);

function setPersonalNumberAndPrintEmployee(employeeInfo){
    const employees = {};
    employeeInfo.map(employeeName => employees[employeeName] = employeeName.length);
    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
}

setPersonalNumberAndPrintEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
