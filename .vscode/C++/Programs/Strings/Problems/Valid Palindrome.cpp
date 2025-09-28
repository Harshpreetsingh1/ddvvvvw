#include <iostream>

using namespace std;
// Question - tell If string is valid Palindrome with only alphanumeric character(alphabets and numbers not special signs)
// Palindrome- racecar- Read from the forward and  backward makes the same word

// Two Pointer Approach
// Compare Start and end pointer values
// But We have special characters also
// A logic is needed for ruling out special characters
 
// tolower();//function to convert into lower case
class Solution {
public:
bool alpha(char ch){// function to check if the letters are alphanumeric or not
if((ch>='0'&& ch<='9')|| (tolower(ch)>='a' && tolower(ch)<='z')){
    return true;
}
return false;
}
// OR iswalnum(); stl function for checking alphanumeric values

    bool isPalindrome(string s) {
        int st=0, end= s.length()-1;
        while (st<end){
            if(!alpha(s[st])){
                st++;continue;
            }
            if(!alpha(s[end])){
                end--;continue;
            }
        if(tolower(s[st])!= tolower(s[end])){
            return false;
        }
        st++;end--;
        }
return true;
    }
};
int main() {

    cout << "Hello, World!" << endl;

    return 0;
}