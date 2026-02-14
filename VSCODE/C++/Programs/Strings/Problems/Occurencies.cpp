#include <iostream>

using namespace std;
// remove all occurencies of a given string from a bigger string 
//  FOr example s="daabcbaabcbc"
// part= abc. We have to remove all ABCs from s and return the string left
class Solution {
public:
    string removeOccurrences(string s, string part) {
while(s.length()>0 && s.find(part)<s.length()){
    s.erase(s.find(part),part.length());
    }
    return s;}
};
int main() {
    // STL function strfind(substring) finds the position first occurence of string
    // str.erase(start,end); deletes a part of the string
        
    // cout << "Hello, World!" << endl;
    return 0;
}