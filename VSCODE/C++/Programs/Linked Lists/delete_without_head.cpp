#include <iostream>
using namespace std;

// Definition for singly-linked list node
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    void deleteNode(ListNode* node) {
        // Copy the value from next node to current node
        node->val = node->next->val;
        
        // Store the next node to delete it
        ListNode* temp = node->next;
        
        // Bypass the next node
        node->next = node->next->next;
        
        // Delete the next node
        delete temp;
    }
};

// Helper function to print the list
void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr != nullptr) {
        cout << curr->val;
        if (curr->next != nullptr) cout << " -> ";
        curr = curr->next;
    }
    cout << endl;
}

// Helper function to create a linked list
ListNode* createList(int arr[], int n) {
    if (n == 0) return nullptr;
    
    ListNode* head = new ListNode(arr[0]);
    ListNode* curr = head;
    
    for (int i = 1; i < n; i++) {
        curr->next = new ListNode(arr[i]);
        curr = curr->next;
    }
    
    return head;
}

int main() {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
    int arr[] = {1, 2, 3, 4, 5};
    ListNode* head = createList(arr, 5);
    
    cout << "Original List: ";
    printList(head);
    
    // Get pointer to node with value 3 (assuming we want to delete it)
    ListNode* nodeToDelete = head->next->next; // Points to node with value 3
    
    Solution sol;
    sol.deleteNode(nodeToDelete);
    
    cout << "After deleting node with value 3: ";
    printList(head);
    
    return 0;
}