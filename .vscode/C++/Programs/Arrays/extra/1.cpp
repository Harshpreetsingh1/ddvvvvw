#include <iostream>
using namespace std;
int arr[100]; 
int n = 0;    
void create(int arr[]) {
    cout << "Enter the elements: ";
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
}
void display(int arr[]) {
    cout << "Array elements: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}


void insert(int arr[], int pos, int elem) {
    if (pos < 0 || pos > n) {
        cout << "Invalid position!" << endl;
        return;
    }
    for (int i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }
    arr[pos] = elem;
    n++;
}

void remove(int arr[], int pos) {
    if (pos < 0 || pos >= n) {
        cout << "Invalid position!" << endl;
        return;
    }
    for (int i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    n--;
}

int main() {
    cout<<"Harsh Preet Singh"<<endl;
    cout<<"24BAI70178"<<endl;
    cout << "Enter the number of elements for the array: ";
    cin >> n;

    if (n > 100 || n < 0) {
        cout << "Invalid size! The array size must be between 0 and 100." << endl;
        return 1;
    }

    create(arr);

    int choice, elem, pos;

    do {
        cout << "\nMenu:\n";
        cout << "1. Insert an element\n";
        cout << "2. Remove an element\n";
        cout << "3. Display the array\n";
        cout << "4. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Enter the element you want to insert: ";
                cin >> elem;
                cout << "Enter the position where you want to insert the element: ";
                cin >> pos;
                insert(arr, pos, elem);
                break;

            case 2:
                cout << "Enter the position of the element you want to remove: ";
                cin >> pos;
                remove(arr, pos);
                break;

            case 3:
                display(arr);
                break;

            case 4:
                cout << "Exiting the program." << endl;
                break;

            default:
                cout << "Invalid choice! Please try again." << endl;
        }
    }
     while (choice != 4);

    return 0;
}