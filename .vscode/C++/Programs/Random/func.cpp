#include <iostream>

using namespace std;

    int fac(int n);
int bin(int n ,int r);
int dig(int n);
int main() {
//    int x;
//    cout << "Enter the value of x:\n ";
//    cin >> x;
//    cout<<"The Sum of numbers Till x is"<<s(x);
// cout<<"The factorial of"<<x<<"is "<<fac(x);
// cout<<"the sum of digits of"<<x<<"is"<<dig(x);
   
    // sum(x,y); Arguements
    // min(x,y);
// bin(6,3);

    return 0;
}
// Calculate Binomial COeffiencient NCR for n and r
int bin(int n ,int r){
cout<<fac(n)/(fac(r)*fac(n-r));
// USed Old factorial function
}
// Sum of digits of a number
int dig( int n){
    int sum =0;
    int last=0;
  while(n>0){
    last=n%10;
    n=n/10;
    sum += last;
  };
  return sum;

}
void hlo(){
    cout<<"HELOOO0";
}
int sum(int a,int b){
    int s=a+b;
    cout<<s<<endl;
    return s;
    }
    int min(int a,int b)// Parameters
    {
        if(a>b){
            cout<<a<<"is greater";
            return a;
        }
        else{
            cout<<b<<"is Greater";
        return b;
        }
        
    }
    int s(int n){
        int sum=0;
    for(int i=0;i<n;i++){
        sum+=i;
    }
    return sum;

    }

    int fac(int n){
        int fact=1;
        for(int i=1;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }