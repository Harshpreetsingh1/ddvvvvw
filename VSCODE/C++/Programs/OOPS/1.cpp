#include <iostream>
#include<string>
using namespace std;
// Objects are entities in the real world
// Class is like a blueprint of these entities
//  Syntax
    class Teacher{
        
       string name;
       string dept;
       string subject;
       double* cgpaPtr;
        // Access Modifiers
            // 1 Private- Data and methods accessible inside class
            
            // 2 Public - Data and methods accessible to everyone
            
            // 3 protected - data and methods accessible inside class and to its derived class
            
            // By default all the attributes are private in C++
        
       
       public:
        
        // Properties
       
       // COnstructor always declared as public
       
        // Teacher(Teacher &og){// Copy constructor declaration
       
        //     this->name= og.name;
       
        //     this->dept= og.dept;
       
        //     this->subject= og.subject;
       
        //     this->salary= og.salary;
            
        
        // }

        // Two types of copy:
        // SHallow and deep
        // Shallow copy copies all of the members values from one object to another
        // Deep Copy not only copies the member values but also makes  copies of any dynamically 
        // Allocated memory that the members point to
// Shallow copy is widely used
// Issue- Dynamic memory allocation
//



    // Non Parameterized constructor
    //    Teacher(){//self made constructor  so this time automatic constructor will not work
   
    //     cout<<"Hi, this is constructor working"<<endl;

    //    dept= Science<<endl;// properties can be assigned to variables
    //    }// only runs once



    // //     //Parameterized constructor
    //     Teacher(string n, string d,string s,double sal){

    //         name =n;
    //         dept=d;
    //         subject= s;
    //         salary= sal;
    //     }
       
       
        public:
       double salary;
       // Methods or Member functions
       Teacher(){
        cout<<"I am the Constructor of the Worlds"<<endl;
        // *cgpaPtr=cgpa;// Method of creating deep copy
       }
        void changedept(string newdept){
            dept= newdept;
        }
        // setter function
        void setsalary(double s){
            salary =s;
        }
        // getter function
        double getsalary(){
            return salary;
        }
// Destructor ( Used to free allocated memory)



// Its called automatically at the end of program

// Same syntax as constructor except(~)symbol

// Can be made manually or compiler will add automatically

// No return Type
~Teacher(){//THe Destructor
    cout<<"I am the destroyer of worlds"<<endl;
}
    };
int main() {
    // cout << "Hello, World!" << endl;
    Teacher t1;
    // t1.name = "Harsh";
    // t1.subject = "C++";
    // t1.dept = "Computer Science";

    
    // Teacher();//constructor call


//  "this"- A special pointer that points to the current object

// Can be used to differentiate the objects from variables

// Teacher t2(t1);

// Calling default copy constructor

// Copy Constructor- Used to copy the properties of one object into another





    return 0;
}