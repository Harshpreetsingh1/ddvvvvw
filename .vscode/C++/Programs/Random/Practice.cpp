#include <iostream>

using namespace std;

int main() {
  
    int N;
cout<<"Enter a number N\n";
cin>>N;
int fac =1;
for(int i=1;i<=N;i++){
fac =fac*i;

}
cout<<"Factorial is  "<<fac;
    return 0;
}
