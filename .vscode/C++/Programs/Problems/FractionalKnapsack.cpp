#include <iostream>
//Fractional knapsack problem
using namespace std;
bool comp(Item a,Item b){
    double r1=(double)a.value/(double)a.weight;
    double r2=(double)b.value/(double)b.weight;
    return r1>r2;
}
//C:\VS CODE PROGRAMS\VSCODE\WebD\EXP1umb\exp1\Exp9
//Function to return fractional weight
double fractknapsack(int W,int arr[],int n){
sort(arr,arr+n,comp);
int curWeight=0;
double finalvalue=0.0;
for(int i=0;i<n;i++){
if(curWeight+arr[i].weight<=W){
curWeight+=arr[i].weight;
finalvalue+=arr[i].value;
}
else{int remain=W-curWeight;
    finalValue+=(arr[i].value/(double)arr[i].weight)*(double)remain;
break;
}
}
return finalvalue;
}
int main() {
   
    return 0;
}