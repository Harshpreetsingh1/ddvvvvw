#include <iostream>
// cin is the object of class istream use to perform input function
// cout is the object of class ostream use to perform output function
//  << = Insertion operator
// >> = extraction operator
// stream = sequence of bytes

using namespace std;

int main() {
    int a;
    cout <<"Enter the value of a: \n";
    cin >> a;
    cout << "Enter the Value of B : \n";
 int b;
    cin >> b;
  cout<<(a<b)<< endl;
  cout<<(a!=b)<<endl;
    // cout << "Sum of a and b is: "<< c << endl;
    // cout << " The Difference is : "<<a-b<<endl;
    // cout <<"The Product is : " <<a*b<<endl;
    // cout <<"The Quotient is : "<<a/b<<endl;
    // cout <<"The MODULI  is : "<<a%b<<endl;

    // float pi=3.14F;
    // bool issad= true;
    // double prixe = 3820.55;
    // cout<<prixe;
      // cout <<"\n";
    // cout <<issad;
      // cout <<"\n";
    // cout <<"\n";
    // cout << pi ;
    return 0;
}