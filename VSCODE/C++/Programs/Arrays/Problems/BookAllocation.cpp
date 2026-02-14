// There are N books
// Each book has A[i] number of pages
// You have to allocate books to M number of students so that the 
// Maximum number of pages allocated to a student is minimum
// 1 Each Book should be allocated to a student
// 2 Each student should be allocated at least one book
// 3 Allotment should be in contigous order

// Calculate and return the minimum possible number

// The answer lies in the range of 0 to sum of all elements in the array
// Because minimum allotted pages=0 and max=sum of elements in array
// So binary search is applied in the sorted range of Sum

#include <iostream>
#include <vector>
using namespace std;

bool isValid(vector<int> &arr, int n, int m, int maxPages) {
    int stu = 1, pages = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] > maxPages) {
            return false;
        }
        if ((pages + arr[i]) <= maxPages) {
            pages += arr[i];
        } else {
            stu++;
            pages = arr[i];
            if (stu > m) return false;
        }
    }
    return true;
}

int allotment(vector<int> &arr, int n, int m) {
    if (m > n) {
        return -1;
    }
    int sum = 0;
    for (int i = 0; i < n; i++) { // To find the range of Answers
        sum += arr[i];
    }
    int st = 0, end = sum;
    int ans = -1;
    while (st <= end) {
        int mid = st + (end - st) / 2;
        if (isValid(arr, n, m, mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            st = mid + 1;
        }
    }
    return ans;
}
int main() {
   vector<int> arr={2,1,3,4};
   int n=4,m=2;
   cout<<allotment(arr,n,m)<<endl;
    return 0;
}