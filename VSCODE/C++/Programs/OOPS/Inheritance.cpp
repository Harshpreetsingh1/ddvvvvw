#include <iostream>
#include<string>
using namespace std;
class Person{

public:
        string name;
        int age;
        

        // Person(string name,int age){// constructor
        //     this->name=name;
        //     this->age=age;
        // }
        Person(){// Normal constructor
        cout<<"Parent Constructor"<<endl;
        }
        ~Person(){
            cout<<"Parent Destructor"<<endl;
        }
};
class student : public Person{
    // We will inherit some properties from above class to this
   public:
   student(){
    cout<<"Derived Constructor"<<endl;
   }
    int rollno;
    void getvalue(){
        cout<<"Name - "<<name<<endl;
        cout<<"Age - "<<age<<endl;
        cout<<"Roll number - "<<rollno<<endl;

    }
    ~student(){
        cout<<"Derived Destructor"<<endl;
    }
};
int main() {
    // cout << "Hello, World!" << endl;
    student s1;
    s1.name="Harsh";
    s1.age=21;
    s1.rollno= 2334;
    s1.getvalue();
    return 0;
} 