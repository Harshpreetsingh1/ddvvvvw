#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    float marks[5];
    float avg = 0.0;

    for (int i = 0; i < 5; i++) {
        cin >> marks[i];
        if (marks[i] < 0 || marks[i] > 100) {
            cout << "Invalid Input" << endl;
            return 1; // Exit the program if invalid input is found
        }
        avg += marks[i];
    }

    cout << fixed << setprecision(2) << avg / 5 << endl;

    return 0;
}