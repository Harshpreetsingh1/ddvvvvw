#include <iostream>
using namespace std;
class Node{// General class for Node which can be dynamically created.

 public:
    int data;
    Node* next;
    Node(int val){
        data = val;//(data)
        next=NULL;// pointer to the next node
    }
};

class List{
    
    Node* head;// head node created
    // Node class inherited as pointer
    Node* tail;//tail node created
    public: 
    List(){
        head=tail= NULL;//constructor declaring everything as null because list is empty
    }
    void push_front(int val){
        Node* newNode = new Node(val); //new node declaration for adding
        Node newNode(val);//New node initialisation using constructor
        if(head==NULL){
            head= tail= newNode;
            cout<<"Underflow";
            return;
        }else{
            newNode->next = head;
            head= newNode;
        }
    }
void push_back(int val){
        Node* newNode= new Node(val);
        if(head==NULL){
            head=tail=newNode;
        }
        else{
            tail->next = newNode;
            tail= newNode;
        }
    }
    void pop_front(int val){
        if(head==NULL){
            cout<<"UnderFlow";
        }
        Node* temp= head;
        head= head->next;
        temp->next=NULL;
        delete temp;
        return;
    }
    void pop_back(int val){
        if(head==NULL){
            return;
cout<<"Underflow";
        }
        Node* temp = head;
        while(temp!=tail){
            temp=temp->next;
        }
        temp->next=NULL;
        delete tail;// frees the memory occupied by the variable
        tail=temp;
    }
    void insert(int val,int pos){
        if(pos<0){
            cout<<"Invalid Position ";
            return;

        }

        if(pos==0){
            push_front(val);
            return;
        }

        Node*temp=head;
        for(int i=0;i<pos-1;i++){// for reaching the position
            temp=temp->next;
        }
        Node* newNode= new Node(val);
        newNode->next=temp->next;//connecting to the next node
        temp->next= newNode;
        
    }
    void printLL(){
        Node* temp = head;
        while(temp!=NULL){// Temp variable connects the nodes
            cout<< temp->data<<"->";
            temp= temp->next;
        }
        cout<<"NULL"<<endl;
    }
};
    // A linked list has four major functions-
    // Pushfront- A new node gets created at the start of the list.(Head gets Updated)
    // Pushback- A new node gets created at the end of the linked list.(Tale gets Updated)
 // pop-front-Deletes the first node
 // pop-back-Deletes the last node.

// In linked List only head pointer's value should be preserved.
// In a linked list , One can only travel forward with head pointer
// as There is no adress of the previous node, only forward node.

int main() {

    List l1;
    l1.push_front(1);
    l1.push_front(2);
    l1.push_front(3);
    l1.push_back(4);
    l1.printLL();

    
    return 0;
}