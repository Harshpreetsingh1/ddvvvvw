#include <iostream>

using namespace std;
// Stack- A linear static data structure IN WHICH  last in and first out.
// Algorithm- Description- Given a Linked List with pointer top pointing to the head of the stack
// The avail pointer points to the first node of the free storage pool of the stack.
// Insertion in a stack(Push Operation)
    // if avail=Null
    // Then print "OverFlow" and return
    // New=Avail        (collecting  memory)
    // Avail= Link[avail] 
    // info[new]=Item   (Element Insertion)
    // Link[new]=Top    (Updation of TOP in terms of element)
    // Top=New           (I=Updation of TOP in terms of Position)
    // Return
// Deletion in a stack(Pop Operation)
// Avail Concept used only in linked list
    //If TOP= NULL
         // Print Underflow
         // ITEM=Info[Top](Item Deleted)
        // Save= Top()
    // Top=Link[top]
    // Link[save]=Avail(Dumping the Node in Link list)
    // Avail= Save
    // return

struct Node{
    int info;
    Node* link;
};

Node* top= nullptr;// Top Pointer of the stack
// Insertion
void push(int val){
    Node* ptr= new Node();
    ptr->info=value;
    ptr->link=top;
    top=ptr;
    cout<<value<<"Pushed to stack "<<endl;

}
void pop


int main() {
                                                                                  
    return 0;
}