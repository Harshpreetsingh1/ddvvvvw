#include <iostream>

using namespace std;
int a=0;
int b=1;
int fib(int n){
    if(n==0){
        return 0;
    }
    else{

    cout<<a<<" ";
    int temp=a;
    a=b;
    b=temp+b;
    return fib(n-1);
    }
}
void fibo(int n) {
    int a = 0;
    int b = 1;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        int temp = a;
        a = b;
        b = temp + b;
    }

}

int main() {
    fib(8);
    return 0;
}