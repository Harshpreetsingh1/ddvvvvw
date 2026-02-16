#include <iostream>
using namespace std;


struct Node {
    int info;
    Node* next; 

// Function to insert a new node at the end of the linked list
void insert(Node*& head, int val) {
    Node* newNode = new Node();
    newNode->info = val;
    newNode->next = nullptr;

    if (head == nullptr) {
        head = newNode;
        return;
    }

    Node* ptr = head;
    while (ptr->next != nullptr) {
        ptr = ptr->next; // Updates the pointer turn by turn
    }
    ptr->next = newNode;
}


void deleteNode(Node*& head, int pos) {
    if (head == nullptr) {
        cout << "Underflow" << endl;
        return;
    }

    Node* ptr = head;
    Node* prevloc = nullptr;

    for (int i = 1; ptr != nullptr && i < pos; i++) {
        prevloc = ptr;
        ptr = ptr->next;
    }

    if (ptr == nullptr) {
        cout << "Node not found" << endl;
        return;
    }

    if (prevloc == nullptr) {
        head = ptr->next; // Deleting the head node
    } else {
        prevloc->next = ptr->next; // Correctly update the previous node's next pointer
    }

    delete ptr; // Free the memory of the deleted node
}

// Function to display the linked list
void display(Node* head) {
    Node* ptr = head;
    while (ptr != nullptr) {
        cout << ptr->info << " -> ";
        ptr = ptr->next; // Correct pointer traversal
    }
    cout << "NULL" << endl;
}

// Main function
int main() {
    Node* head = nullptr;

    // Insert nodes into the linked list
    insert(head, 1);
    insert(head, 2);
    insert(head, 3);
    insert(head, 4);
    insert(head, 5);

    // Display the linked list
    cout << "Linked List: ";
    display(head);

    // Delete a node at position 3
    deleteNode(head, 3);

    // Display the linked list after deletion
    cout << "After Deletion: ";
    display(head);

    return 0;
}