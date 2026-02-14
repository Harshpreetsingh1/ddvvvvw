#include <iostream>
#include<string.h>
using namespace std;
// create a class name room with 3 data member 
// The data members are length,breadth and height of type int
// Assign the values to data members in main function and define the use of member function
// Calculate area and Calculate volume 
// To display the area and volume of room
class room{
    int l , b, h;
    public:
    void getvalue(){
        cin>>h;
    
        cin>>b;

        cin>>l;
        
    }
    void area(){
        int area = 2*(l*b+b*l+h*l);
         cout<<area<<endl;
    }
    void volume(){
        int volume=(l*b*h);
        cout<<volume<<endl;
    }
};

// data member- student name(string),UID(string),course(string),float marks, percentage(float),
// 2 objects
class student{
    string name;
    string UID;
    string course;
    int marks[50];
    float percentage;
    int sub;
    int total;
    public:
     void getvalue(){
        cout << "Enter your name: "<<endl;
        cin >> name;
        cout<<"Enter your UID: "<<endl;
        cin>> UID;
        cout<<"Enter your course: "<<endl;
        cin>>course;
        cout<<"Enter your marks: "<<endl;
        int n;
        for(int i=0;i<n;i++){
            cin>>marks[i];
        }
 
     }
     float per(){
       int per= (total/sub)*100;
            return per;
     }
     void display(){
        cout<<name<<" Your percentage is"<< per()<<endl;
     }
};
int main() 
 {   // cout << "Hello, World!" << endl;
//    room r1;
//    r1.getvalue();
// //    r1.area();
// //    r1.volume();
//     student s1;
//     s1.getvalue();
//     s1.per();
//     s1.display();
//     student s2;
//     s2.getvalue();
//     s2.per();
//     s2.display();
room r1;
r1.getvalue();
r1.area();
r1.volume();

    
    return 0;
}