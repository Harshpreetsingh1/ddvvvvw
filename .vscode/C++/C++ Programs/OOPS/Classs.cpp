#include <iostream>
#include <string>
using namespace std;

class employee {
    string name;
    string Id;
    protected:
    double salary;
    public:
    void getvalue() { 
        cout << "Enter your name: " << endl;
        cin >> name;
        cout << "Enter your Id: " << endl;
        cin >> Id;
        cout << "Enter your Salary: " << endl;
        cin >> salary;
    }
};

class Manager : public employee { 
    double bonus;
    public:
    void getvalue1() { 
        getvalue(); 
        cout << "Enter your bonus: " << endl;
        cin >> bonus;
        double total = (salary + bonus);
        cout << "Manager ji Your Total salary is: " << total << endl;
    }
};

class Engineer : public employee { 
    double pj;
    public:
    void getvalue2() { 
        getvalue(); 
        cout << "Enter your Project Allowance: " << endl;
        cin >> pj;
        double total = (salary + pj);
        cout << "Engineer ji Your Total salary is: " << total << endl;
    }
};

class Intern : public employee { 
    double st;
    public:
    void getvalue3() { 
        getvalue();
        cout << "Enter your stipend: " << endl;
        cin >> st;
        cout << "Intern bhai Your Total salary is: " << st << endl; 
    }
};

int main() {
    string e;
    cout << "Who are you (Manager/Engineer/Intern): " << endl;
    cin >> e; 

    if (e == "Manager") {
        Manager m1;
        m1.getvalue1();
    } else if (e == "Engineer") {
        Engineer r1;
        r1.getvalue2();
    } else {
        Intern i1;
        i1.getvalue3();
    }
    return 0;
}