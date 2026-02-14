#include <iostream>
#include<string>
using namespace std;

int main() {
// char str[]={'a','b','\0'};
// char str2[]="Harsh";
// cout<<str<<endl;
// cout<<str2<<endl;
// char str[100];
// // cin>>str;
// // cout<<"Output: "<<str<<endl;
// cin.getline(str,100,'.');// The last word is the character delimiter which
// // Which Stops getting input after that specific keyword  is found
// // For example in this case: fullstop
// int len=0;
// for(int i=0;i<str[i]!='\0';i++){
//     len++;
// }
// cout<<"Output: "<<str<<endl;
// cout<<"Length of string is = "<<len<<endl;


// STRINGS


string str = "HLOO";  
// Strings are dynamic in nature but character arrays are not
// Strings are stored in  Contigous memory locations
cout<<str<<endl;
 
string str2= " World";
string str3 = str+str2;
cout<<str3<<endl;//String Concatenation
cout<<(str==str2)<<endl;//String comparison is easy in strings than Character Array
cout<<str.length()<<endl;
cin>>str;//This is not viable for multiple word with spaces
getline(cin,str);//This is more efficient in storing multiple words

// Reverse a String

// In a Character Array
 void reverseString(vector<char>& s) {
        int st=0,end=s.size()-1;
        while(st<end){
            swap(s[st++],s[end--]);
        }
    }


// In a String
reverse(str.begin(),str.end());

    return 0;
}