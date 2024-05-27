# Employee Management System

This is a JavaScript application for managing employee data.

## Functions

### collectEmployees()

This function prompts the user to enter details for each employee, such as first name, last name, and salary. It continues prompting until the user decides to stop. It returns an array containing objects representing each employee.

### displayAverageSalary(employeesArray)

This function calculates and displays the average salary of the employees in the provided array. It takes the array of employees as input and logs the average salary to the console.

### getRandomEmployee(employeesArray)

This function is intended to select and display a random employee from the provided array. However, it is not yet implemented. This section of the code is marked with a "TODO" comment.

### displayEmployees(employeesArray)

This function displays the employee data in an HTML table. It takes the array of employees as input and generates HTML elements to represent each employee's data in a table format.

## Usage

To use this application:
1. Include the JavaScript code in your HTML file.
2. Ensure there is an HTML element with the id `add-employees-btn` to serve as the button for adding employees.
3. Include an empty table with the id `employee-table` where the employee data will be displayed.
4. Add an event listener to the 'Add Employees' button, which triggers the `trackEmployeeData` function when clicked.

## Example


![alt text](<Screenshot 2024-05-27 152958.png>)
