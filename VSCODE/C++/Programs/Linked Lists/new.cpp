#include <iostream>

using namespace std;
class node{
    int data;
    node* next;// pointer to node
    node(int val){
        data=val;
        next=NULL;
    }
};// node declaration done

class list{
    node*head;
    list(){
        head=tail=NULL;

    }
    void push(int val){
        node* newnode= new node(val);// adress updation
        node newnode(val);//value updation
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