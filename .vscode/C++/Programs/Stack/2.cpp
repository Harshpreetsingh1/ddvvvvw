#include<iostream>
class Stack {
    int top;
    int* arr;
    int size;

public:
    Stack(int s) {
        size = s;
        arr = new int[size];
        top = -1;
    }

    void push(int x) {
        if (top == size - 1) {
            cout << "Stack Overflow" << endl;
        } else {
            arr[++top] = x;
            cout << "Pushed: " << x << endl;
        }
    }

    void pop() {
        if (top == -1) {
            cout << "Stack Underflow" << endl;
        } else {
            cout << "Popped: " << arr[top--] << endl;
        }
    }

    void peek() {
        if (top == -1) {
            cout << "Stack is empty" << endl;
        } else {
            cout << "Top element: " << arr[top] << endl;
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

using namespace std;

int main() {
    //cout << "Hello, World!" << endl;
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