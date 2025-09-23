import java.util.Scanner;

// Base class Deposit
class Deposit {
    int accountId;
    String name;
    double principal;
    int tenure;

    public Deposit(int accountId, String name, double principal, int tenure) {
        this.accountId = accountId;
        this.name = name;
        this.principal = principal;
        this.tenure = tenure;
    }
}

// FD class inheriting Deposit
class FD extends Deposit {
    double rateOfInterestFD;

    public FD(int accountId, String name, double principal, int tenure, double rateOfInterestFD) {
        super(accountId, name, principal, tenure);
        this.rateOfInterestFD = rateOfInterestFD;
    }

    public double calculateInterest() {
        return principal * Math.pow((1 + rateOfInterestFD / 100), tenure) - principal;
    }
}

// RD class inheriting Deposit
class RD extends Deposit {
    double rateOfInterestRD;

    public RD(int accountId, String name, double principal, int tenure, double rateOfInterestRD) {
        super(accountId, name, principal, tenure);
        this.rateOfInterestRD = rateOfInterestRD;
    }

    public double calculateInterest() {
        return (principal * tenure * (tenure + 1) / 2) * (rateOfInterestRD / 100);
    }
}

// Main class
public class exp3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter account details:");
        System.out.print("Account ID: ");
        int accountId = sc.nextInt();
        sc.nextLine(); // Consume newline
        System.out.print("Name: ");
        String name = sc.nextLine();
        System.out.print("Principal Amount: ");
        double principal = sc.nextDouble();
        System.out.print("Tenure (in years): ");
        int tenure = sc.nextInt();

        System.out.println("Choose Deposit Type: 1. FD 2. RD");
        int choice = sc.nextInt();

        if (choice == 1) {
            System.out.print("Enter Rate of Interest for FD: ");
            double rateOfInterestFD = sc.nextDouble();
            FD fd = new FD(accountId, name, principal, tenure, rateOfInterestFD);
            System.out.println("FD Interest: " + fd.calculateInterest());
        } else if (choice == 2) {
            System.out.print("Enter Rate of Interest for RD: ");
            double rateOfInterestRD = sc.nextDouble();
            RD rd = new RD(accountId, name, principal, tenure, rateOfInterestRD);
            System.out.println("RD Interest: " + rd.calculateInterest());
        } else {
            System.out.println("Invalid choice.");
        }

        sc.close();
    }
}

