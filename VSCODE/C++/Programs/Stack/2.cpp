#include<iostream>
using namespace std;
class Stack {
    int top;
    int* arr;
    int size;

public:+

    Stack(int s) {
        size = s;
        arr = new int[size];
        top = -1;
    }

    void push(int x) {
        if (top == size - 1) {
            cout << "stack overflow" << endl;
        } else {
            arr[++top] = x;
            cout << "pushed: " << x << endl;
        }
    }

    void pop() {
        if (top == -1) {
            cout << "stack underflow" << endl;
        } else {
            cout << "popped: " << arr[top--] << endl;
        }
    }

    void peek() {
        if (top == -1) {
            cout << "stack is empty" << endl;
        } else {
            cout << "top element: " << arr[top] << endl;
        }
    }

    void display() {
        if (top == -1) {
            cout << "Stack is empty" << endl;
        } else {
            cout << "Stack elements: ";
            for (int i = top; i >= 0; i--) {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }

   
};


int main() {
Stack s(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.display();
s.pop();
s.display();
s.peek();

  return 0;
}