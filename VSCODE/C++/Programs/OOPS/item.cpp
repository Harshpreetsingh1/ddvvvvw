#include <iostream>

using namespace std;

class item {
    float cost;
    int number;
public:
    void getdata();
    void display();
};
    int n;
    float c;

void item::getdata() {
    cout<<"Number = "<<endl;
    cin>>n;
    cout<<"The Cost is "<<endl;
    cin>>c;
      
}

void item::display() {
    cout << "Number is " << n << endl;
    cout << "Cost is " << c << endl;
}

int main() {
    item x;

    x.getdata();  
    x.display();

    item y;
    y.getdata();  
    y.display();

    return 0;
}