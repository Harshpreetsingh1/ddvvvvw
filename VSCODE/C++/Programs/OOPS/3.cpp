#include <iostream>
#include<string.h>
using namespace std;

class Employee {
    string name;
    string design;
    float salary;
    int age;

public:
    void getvalue() {
        cin >> name;
        cin>>age;
        cin>>design;
        cin>>salary;

    }

    void display()  {

        cout<<"Name: "<<name<<endl;
        cout<<"Age: "<<age<<endl;
        cout<<"Designation: "<<design<<endl;
        cout<<"Salary: "<<salary<<endl;
    }
};

int main() {
    Employee e[10];
    int n;
    cin >> n;

    for (int i = 0; i < n; i++) {
        e[i].getvalue();
    }

    for (int i = 0; i < n; i++) {
        cout<<"Employee "<<(i+1)<<":"<<endl;
        e[i].display();
    }

    return 0;
}