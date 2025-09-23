#include <iostream>
using namespace std;
int main() {
    // Square Pattern
    // int n;     
    // cout << "Enter the value of n\n";
    // cin >> n;

    // for (int i = 0; i < n; i++) { // outer loop
    //     for (char j = 'A'; j < 'A' + n; j++) { // inner loop
    //         cout << j;
    //     }
    //     cout << endl;
    // }

    // Square Pattern
    // int n;     
    // cout << "Enter the value of n\n";
    // cin >> n;
    // for (int i = 0; i < n; i++) { // outer loop
    //     for (char j = 'A'; j < 'A' + n; j++) { // inner loop
    //         cout << j;
    //     }
    //     cout << endl;
    // }

// square pattern with Variation
    //  int n;     
    // cout << "Enter the value of n\n";
    // cin >> n; 
    // cout << "Value of n: " << n << endl;
    // char num='A';
    // cout << "Printing square pattern with variation:" << endl;
    // for (int i = 0; i < n; i++) { // outer loop
    //     cout << "Row " << i+1 << ": ";
    //     for (char j =0; j<n; j++) { // inner loop
    //         cout << num;
    //         num++;
    //     }
    //     cout << endl;
    // }

     // Triangle Stars Pattern
    // int n;     
    // cout << "Enter the value of n\n";
    // cin >> n;
    // for (char i = 'a'; i < 'a'+n ; i++) { // outer loop
    //     for (char j='a'; j < i+1; j++) { // inner loop
    //     cout<<i;
           
    //     }
    //     cout << endl;}
    // Triangle pattern different version
    // int n;
    // cout<<"Enter a number n: \n";
    // cin>>n;
    // int h=0;
    // for(int i=0;i<n;i++){
    //     for(int j=0;j<i+1;j++){
    //         cout<<j; 
    //     }
    //        cout<<"\n";
    // }
// Reverse Triangle Pattern
//  int n;
//     cout<<"Enter a number n: \n";
//     cin>>n;
//     for(int i=0;i<n;i++){
//         for(int j=i+1;j>0;j--){
//             cout<<(j); 
//         }
//            cout<<"\n";
//     }
// floyd Triangle
//  int n;
//  int h=1;
//     cout<<"Enter a number n: \n";
//     cin>>n;
//     for(int i=0;i<n;i++){
//         for(int j=i+1;j>0;j--){
//             cout<<h;
//             h++;
//         }
//            cout<<"\n";
//     }
// Floyd triangle Character Version
//  int n;
//  char h='A';
//     cout<<"Enter a number n: \n";
//     cin>>n;
//     for(int i=0;i<n;i++){
//         for(int j=i+1;j>0;j--){
//             cout<<h;
//             h++;
//         }
//            cout<<"\n";
//     }
// Character triangle
//   int n;     
//     cout << "Enter the value of n\n";
//     cin >> n;
//     for (char i = 'a'; i < 'a'+n ; i++) { // outer loop
//         for (char j='a'; j < i+1; j++) { // inner loop
//         cout<<i;
//         }
//         cout<<"\n";
//     }
//  Reverse CHaracter triangle

    // int n;
    // cout << "Enter the value of n: ";
    // cin >> n;
    // cout << "You entered: " << n << endl;

    // for (int i = 0; i < n; i++) {
    //     for (char j = 'a' + i; j >= 'a'; j--) { // Corrected condition
    //         cout << j;
    //     }
    //     cout << "\n"; // Added to move to the next line after each row
    // }
// Inverted Triangle Pattern(COMbination of printing of SPaces and Letters)
// int n;
// cout << "Enter the value of n: ";
// cin >> n;
// cout << "You entered: " << n << endl;
// for (int i = 0; i < n; i++) {
//     for (int j = 0; j < i; j++) {
//         cout<<" ";
//         }
//         for(int j=0;j<n-i;j++ ){
//             cout<<(i+1);
//         }
//         cout<<"\n";
//     }
// PyrAMID Pattern
// int n;
// cout << "Enter the value of n: ";
// cin >> n;
// cout << "You entered: " << n << endl;
// for (int i = 0; i < n; i++) {
//     for(int j=n-i-1;j>0;j--){
//         cout<<" ";
//     } 
    
//     for (int j = 1; j<i+1;j++) {
//         cout<<j;
//         }
//     for(int j=i+1;j>0;j--){
//         cout<<j;
//     }
//         cout<<"\n";
//     }
// Hollow DIamond Pattern
// int n;
// cout << "Enter the value of n: ";
// cin >> n;
// cout << "You entered: " << n << endl;
// // Top PArt
//   for (int i = 0; i < n; i++) {
//         // Print leading spaces
//         for (int j = n - i - 1; j > 0; j--) {
//             cout << " ";
//         }
//         cout << "*"; // Print the first star

//         if (i != 0) { // For rows other than the first
//             // Print spaces between the stars
//             for (int j = 0; j < 2 * i - 1; j++) {
//                 cout << " ";
//             }
//             cout << "*"; // Print the second star
//         }
//         cout << "\n"; // Move to the next line
//     }
    
    
//     cout<<endl;
//     // Bottom Part
//      for (int i = 0; i < n; i++) {
//         // Print leading spaces
//         for (int j = 0; j < i; j++) {
//             cout << " ";
//         }
//         cout << "*"; // Print the first asterisk

//         if (i != n - 1) { // If not the last row
//             // Print spaces between the asterisks
//             for (int j = 0; j < 2 * (n - i - 1) - 1; j++) {
//                 cout << " ";
//             }
//             cout << "*"; // Print the second asterisk
//         }
//     cout<<endl;// Move to the next line
//     }

// Butterfly
// int n;
//     cout << "Enter the value of n: ";
//     cin >> n;
//     cout << "You entered: " << n << endl;

//     // Top Part
//     for (int i = 0; i < n; i++) {
//         // Left stars
//         for (int j = 0; j <= i; j++) {
//             cout << "*";
//         }
//         // Spaces
//         for (int j = 2 * (n - i - 1); j > 0; j--) {
//             cout << " ";
//         }
//         // Right stars
//         for (int j = 0; j <= i; j++) {
//             cout << "*";
//         }
//         cout << endl;
//     }

//     // Bottom Part
//     for (int i = n - 1; i >= 0; i--) {
//         // Left stars
//         for (int j = 0; j <= i; j++) {
//             cout << "*";
//         }
//         // Spaces
//         for (int j = 2 * (n - i - 1); j > 0; j--) {
//             cout << " ";
//         }
//         // Right stars
//         for (int j = 0; j <= i; j++) {
//             cout << "*";
//         }
//         cout << endl;
//     }


    return 0;
}