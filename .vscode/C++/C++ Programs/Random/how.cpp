#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the value of n: ";
    cin >> n;
    cout << "You entered: " << n << endl;


    // Top Part
    for (int i = 0; i < n; i++) {
        // Left stars
        for (int j = 0; j <= i; j++) {
            cout << "*";
        }
        // Spaces
        for (int j = 2 * (n - i - 1); j > 0; j--) {
            cout << " ";
        }
        // Right stars
        for (int j = 0; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }

    // Bottom Part
    for (int i = n - 1; i >= 0; i--) {
        // Left stars
        for (int j = 0; j <= i; j++) {
            cout << "*";
        }
        // Spaces
        for (int j = 2 * (n - i - 1); j > 0; j--) {
            cout << " ";
        }
        // Right stars
        for (int j = 0; j <= i; j++) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}
