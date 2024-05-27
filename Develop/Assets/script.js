// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  const employees = [];


  let continueAdding = true;
  while (continueAdding) {

    const firstName = prompt("Enter employee first name:");

    const lastName = prompt("Enter employee last name:");


    const salary = parseFloat(prompt("Enter employee salary:"));

    employees.push({ firstName, lastName, salary });


   continueAdding = confirm("Do you want to add another employee?");
  }


  return employees;
}


const displayAverageSalary = function(employeesArray) {

  if (employeesArray.length === 0) {
    console.log("No employees found.");
    return;
  }

  let totalSalary = 0;
  for (let employee of employeesArray) {
    totalSalary += employee.salary;
  }


  const averageSalary = totalSalary / employeesArray.length;


  console.log("Average Salary:", averageSalary);
  return averageSalary;
}

  const getRandomEmployee = function(employeesArray) {

    if (employeesArray.length === 0) {
      console.log("No employees found.");
      return;
    }
  

    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
 
    const randomEmployee = employeesArray[randomIndex];
  
    console.log("Random Employee:");
    console.log("First Name:", randomEmployee.firstName);
  
}








// STARTER CODE 


const displayEmployees = function(employeesArray) {

  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';


  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");

    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}


addEmployeesBtn.addEventListener('click', trackEmployeeData);
