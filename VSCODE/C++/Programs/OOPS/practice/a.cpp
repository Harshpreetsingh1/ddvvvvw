#include <iostream>

using namespace std;
int fac(int n){
        int fact=1;
        for(int i=1;i<=n;i++){
            fact=fact*i;
        }
        return fact;
    }
int main() {
        cout<<"The factorial is: "<<fac(5)<<endl;
    return 0;
}