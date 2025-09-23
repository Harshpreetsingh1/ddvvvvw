#include <iostream>
#include<vector>
#include<deque>
using namespace std;

// class Node{
// int data;
// Node* next;
// Node(val){
//     int val=data;
//     next=NULL;
// }
// };
class cirqueue{
 int* arr;
 int cursize,cap;
 int f,r;
 public:
 cirqueue(int size){
    cursize=0;
    cap= size;//size becomes the capacity of queue
    arr = new int[cap];// creates a new memory array in heap dynamically
    f=0;
    r=-1;
}
void push(int data){
    if(cursize==cap){
        cout<<"Overflow";
    }
    else{
        r=(r+1)%cap;
        arr[r]=data;
        cursize++;
    }
}
void pop(){
    f=(f+1)%cap;
    cursize--;
}
int front(){

    if(empty()){

        cout<<"CQ is Empty"<<endl;
        return -1;
    }
    return arr[f];
}
bool empty(){
    return cursize==0;
}
void print(){
    for(int i=0;i<cap;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}
};

// class Queue{
//     Node* head;
//     Node* tail;

//     public:
//     Queue(){
//         head=tail=NULL;
//     }
//     void push(int val){
//          Node* newnode=new Node(val);
//          if(empty()){
//             head=tail=newnode;
//          }else(){
//             tail->next=newnode;
//             tail=newnode;
//             newnode->next=NULL;
//          }
        

//     }
//     int pop(){
//         if(empty()){
//             cout<<"LL is empty";
//             return -1;
//         }
//         Node* temp = head;
//         head= head->next;
//         delete temp;
//     }
//     int front(){
       
//     }
//     bool empty(){
//         return head=NULL;
//     }
// };
int main() {
    cirqueue cq(3);
    cq.push(1);
    cq.push(2);
    cq.push(3);
    cq.pop();
    cq.push(4);
    cq.print();
    while(!cq.empty()){
        cout<<cq.front()<<" ";
        cq.pop();
    }
   
    // deque<int> dq;
    // dq.push_back(34);
    // dq.push_back(45);
    // dq.push_back(178);
    // dq.push_front(4);
    // cout<<dq.front()<<" "<<dq.back()<<endl;
    // dq.pop_back();
    // cout<<dq.front()<<" "<<dq.back()<<endl;
    // cout << "cHello, World!" << endl;
    return 0;
}