#include <iostream>
using namespace std;

    void insert(int** arr, int n, int m) {
        cout << "Enter the Elements of Array: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> arr[i][j];
        }
    }
}

void display(int** arr, int n, int m) {
    cout << "The elements of the Array are: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}

void add(int** arr, int** ar, int n, int m) {
    if (n != m) {
        cout << "Matrices cannot be added due to incompatible dimensions." << endl;
        return;
    }
    
    int** add = new int*[n];
    for (int i = 0; i < n; i++) {
        add[i] = new int[m];
    }
    
    cout << "The Elements of the addition matrix are: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            add[i][j] = arr[i][j] + ar[i][j];
            cout << add[i][j] << " ";
        }
        cout << endl;
    }
    
    // Deallocate the addition matrix
    for (int i = 0; i < n; i++) {
        delete[] add[i];
    }
    delete[] add;
}

void multiply(int** arr, int** ar, int n, int m, int k) {
    if (m != k) {
        cout << "Matrices cannot be multiplied " << endl;
        return;
    }
    
    int** mul = new int*[n];
    for (int i = 0; i < n; i++) {
        mul[i] = new int[k];
    }
    
    cout << "The Elements of the Multiplied Matrix are: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < k; j++) {
            mul[i][j] = 0;
            for (int l = 0; l < m; l++) {
                mul[i][j] += arr[i][l] * ar[l][j];
            }
            cout << mul[i][j] << " ";
        }
        cout << endl;
    }
    
    // Deallocate the multiplication matrix
    for (int i = 0; i < n; i++) {
        delete[] mul[i];
    }
    delete[] mul;
}


int main() {
    int n;
    cout << "Enter the number of rows of first matrix: " << endl;
    cin >> n;
    int m;
    cout << "Enter the number of columns of first matrix: " << endl;
    cin >> m;

    int h;
    cout << "Enter the number of rows of second matrix: " << endl;
    cin >> h;
    int k;
    cout << "Enter the number of columns of second matrix: " << endl;
    cin >> k;

    if (m != h) {
        cout << "Matrices cannot be multiplied due to incompatible dimensions." << endl;
        return 1;
    }

    int** arr = new int*[n];
    for (int i = 0; i < n; i++) {
        arr[i] = new int[m];
    }

    int** ar = new int*[h];
    for (int i = 0; i < h; i++) {
        ar[i] = new int[k];
    }

    insert(arr, n, m);
    insert(ar, h, k);

    display(arr, n, m);
    display(ar, h, k);

    multiply(arr, ar, n, m, k);

    // Deallocate the matrices
    for (int i = 0; i < n; i++) {
        delete[] arr[i];
    }
    delete[] arr;

    for (int i = 0; i < h; i++) {
        delete[] ar[i];
    }
    delete[] ar;

    return 0;
}