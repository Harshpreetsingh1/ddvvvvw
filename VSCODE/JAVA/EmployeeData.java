import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Employee {
    int empId;
    String depName;
    String empDes;
    String empName;
    String dateJoin;
    double basic;
    double hra;
    double it;
    String desCode;
    double salary;

    public Employee(int empId, String depName, String empDes, String empName, String dateJoin, double basic, double hra, double it, String desCode) {
        this.empId = empId;
        this.depName = depName;
        this.empDes = empDes;
        this.empName = empName;
        this.dateJoin = dateJoin;
        this.basic = basic;
        this.hra = hra;
        this.it = it;
        this.desCode = desCode;
        this.salary = calculateSalary(basic, hra, it, desCode);
    }

    private double calculateSalary(double basic, double hra, double it, String desCode) {
        double da = getDA(desCode);
        return basic + hra + da - it;
    }

    private double getDA(String desCode) {
        switch (desCode) {
            case "MGR":
                System.out.println("Designation: Manager, DA: 5000");
                return 5000;
            case "DEV":
                System.out.println("Designation: Developer, DA: 3000");
                return 3000;
            case "TST":
                System.out.println("Designation: Tester, DA: 2000");
                return 2000;
            default:
                System.out.println("Designation: Unknown, DA: 1000");
                return 1000;
        }
    }
}

public class EmployeeData {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Employee> employees = new ArrayList<>();

        System.out.print("Enter the number of employees: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for Employee " + (i + 1) + ":");
            System.out.print("Employee ID: ");
            int empId = sc.nextInt();
            sc.nextLine(); 
            System.out.print("Department Name: ");
            String depName = sc.nextLine();
            System.out.print("Employee Designation: ");
            String empDes = sc.nextLine();
            System.out.print("Employee Name: ");
            String empName = sc.nextLine();
            System.out.print("Date of Joining (dd-mm-yyyy): ");
            String dateJoin = sc.nextLine();
            System.out.print("Basic Salary: ");
            double basic = sc.nextDouble();
            System.out.print("House Rent Allowance (HRA): ");
            double hra = sc.nextDouble();
            System.out.print("Income Tax (IT): ");
            double it = sc.nextDouble();
            sc.nextLine(); 
            System.out.print("Designation Code: ");
            String desCode = sc.nextLine();

            employees.add(new Employee(empId, depName, empDes, empName, dateJoin, basic, hra, it, desCode));
        }

        System.out.println("\nEmployee Details:");
        System.out.println("---------------------------------------------------------");
        System.out.printf("%-10s %-15s %-15s %-15s %-15s %-10s %-10s %-10s %-10s %-10s\n",
                "EmpID", "Dept Name", "Designation", "Emp Name", "Join Date", "Basic", "HRA", "IT", "Des Code", "Salary");
        System.out.println("---------------------------------------------------------");

        for (Employee emp : employees) {
            System.out.printf("%-10d %-15s %-15s %-15s %-15s %-10.2f %-10.2f %-10.2f %-10s %-10.2f\n",
                    emp.empId, emp.depName, emp.empDes, emp.empName, emp.dateJoin, emp.basic, emp.hra, emp.it, emp.desCode, emp.salary);
        }

        sc.close();
    }
}