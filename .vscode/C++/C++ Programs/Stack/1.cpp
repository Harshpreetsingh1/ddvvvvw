#include <iostream>
#include<vector>
#include<list>
#include<stack>//defined class for stack
#define SIZE 5

class STACK{
    list<int>ll;
public:
void push(int val){
    ll.push_front(val);
}
void pop(){
    ll.pop_front(val);
}
int top(){
    return ll.front();
}
bool empty(){
    return ll.size()==0;
}
};
using namespace std;

class Stack {
    int top;
    int arr[SIZE];

public:
    Stack() { top = -1; }

    void push(int x) {
        if (top == SIZE - 1) {
            cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = x;
    }

    void pop() {
        if (top == -1) {
            cout << "Stack Underflow\n";
            return;
        }
        top--;
    }

    void display() {
        if (top == -1) {
            cout << "Stack is empty\n";
            return;
        }
        cout << "Stack elements (top to bottom): ";
        for (int i = top; i >= 0; i--)
            cout << arr[i] << " ";
        cout << endl;
    }
};

class stack{
    vector<int> v;
    //pushstack=v.push_back(val)
    //popstack=v.pop_back()
    // Peekstack=return v[v.size()-1]
    public:
    void push(int val){// O(1)
        v.push_back(val);
    }
    void pop(){//O(1)
        v.pop_back();
    }
    int top(){//O(1)
        return v[v.size()-1];
    }
    
    bool empty(){
        return v.size()==0;
    }
};
int main() {
   
   stack<int> s;
   s.push(10);
   s.push(20);
   s.push(30);
   s.display();
   cout<<endl;
    return 0;
}