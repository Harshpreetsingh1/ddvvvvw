const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
input: process.stdin, output: process.stdout
});

let employees = [];
let nextId = 1;

function showMenu() {
console.log("");  console.log("========== Employee Management System ==========");
console.log("1 Add Employee");
  console.log("2 List Employees");
  console.log("3 Update Employee");
  console.log("4 Delete Employee");
  console.log("5 Exit");
  console.log("==");
rl.question("Please select an option (1 to 5): ",handleMenu);
}
function handleMenu(choice) {
if (choice === "1") {
    addEmployee();
} else if (choice === "2") {
 listEmployees();
} else if (choice === "5") {
 console.log("Goodbye!");
rl.close();
 } else {
console.log("Invalid choice. Please try again.");
    showMenu();
  }
}

function addEmployee() {
  console.log("\n--- Add New Employee ---");
  
  rl.question("Enter employee name: ", function(name) {
    rl.question("Enter position: ", function(position) {
rl.question("Enter salary: ", function(salary) {        let newEmployee = {
id: nextId,          name: name,
        position: position,
          salary: parseInt(salary)
        };
        
        employees.push(newEmployee);
        nextId = nextId + 1;
        console.log("Employee added successfully!");
        saveData();  
        showMenu(); });});});}
function listEmployees() {
  console.log("\n- All Employees -");
  if (employees.length === 0) { console.log("No employees found.");
  } else {
for (let i = 0; i < employees.length; i++) {  let emp = employees[i];
      console.log("ID: " + emp.id + ", Name: " + emp.name + ", Position: " + emp.position + ", Salary: $" + emp.salary);
    }    
console.log("Total employees: " + employees.length);}
showMenu();
}
function saveData() {
 let jsonData = JSON.stringify(employees, null, 2);
  
 fs.writeFileSync("data.json", jsonData);  
console.log("Data saved!");
}function loadData() {
if (fs.existsSync("data.json")) {
 let fileContent = fs.readFileSync("data.json", "utf-8");
    
    if (fileContent.length > 0) {
      employees = JSON.parse(fileContent);
      
      if (employees.length > 0) {
        let maxId = 0;
        for (let i = 0; i < employees.length; i++) {
          if (employees[i].id > maxId) {
            maxId = employees[i].id;
          }
        }
        nextId = maxId + 1;
      }
      
      console.log("Data loaded successfully!");
    }
  }
}

loadData();
showMenu();
