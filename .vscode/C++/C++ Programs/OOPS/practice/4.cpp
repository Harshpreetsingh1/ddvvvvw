#include<iostream>
#include<string.h>
using namespace std;
class student
{ 
    string name;
    int roll;
    public:
    void getvalue(){
       cout<<"Enter the name: "<<endl;
       cin>>name t1;;
       cout<<"Enter the roll numebr"<<endl;
        cin>>roll;
    }
    void displaye(){
        cout<<name<<endl;
        cout<<roll<<endl;

    }
    
};
class test: public student{
        int subj1;
        int subj2;
        public:
        void value(){
            cout<<"Enter marks for subject 1";
            cin>>subj1;
            cout<<"Enter marks for subject 2";
            cin>>subj2;
        }
        void display(){
            cout<<"Numbers in the subjects are: "<<subj1<<" "<<subj2;

        }
};
int main(){
    test
    t1.value();
    t1.getvalue();
    t1.displaye();
    t1.display();
    return 0;
}
