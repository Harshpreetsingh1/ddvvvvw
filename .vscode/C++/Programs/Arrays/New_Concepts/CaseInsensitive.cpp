#include <iostream>
#include <algorithm>

using namespace std;
// This function is handling all case insensitive of exit 
// and this is interesting 
string toLowerCase(string str) {
    transform(str.begin(), str.end(), str.begin(), ::tolower);
    return str;
}

int main() {
    string input;
    while (true) {
        cout << "Enter something (type 'exit' to stop): ";
        getline(cin, input);

        input = toLowerCase(input);  // Convert input to lowercase
        if (input == "exit") break;
    }
return 0;
}
