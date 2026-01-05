#include <iostream>

using namespace std;
class Node{
  int val;
  Node* next;
Node(int data){
    val=data;
    next=NULL;
}
};

class list{
    node*head;
    list(){
        head=tail=NULL;

    }
    void push(int val){
        node* newnode= new node(val);
        node newnode(val);
        if(head==NULL){
            head=tail=newnode;
            cout<<"overflow";
            return;
        }
        else{
            newnode->next=head;//value updation
            head=newnode;//pointer updation
        }
    }

}
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}