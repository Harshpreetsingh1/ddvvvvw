#include <iostream>
using namespace std;

class Rectangle {
    int width, height;

public:

    Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    
    Rectangle(const Rectangle &rect) {
        width = rect.width;
        height = rect.height;

    void display() {
        cout << "Width: " << width << ", Height: " << height << endl;
    }
};

int main() {
    Rectangle rect1(10, 20); 
    Rectangle rect2 = rect1; 

    cout << "Rectangle 1: ";
    rect1.display();

    cout << "Rectangle 2: ";
    rect2.display();

    return 0;
}