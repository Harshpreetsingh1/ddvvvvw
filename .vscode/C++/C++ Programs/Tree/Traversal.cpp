#include <iostream>
#include <vector>
using namespace std;

// Binary Search tree Traversal
//  Left Subtree < Root
//  Right Subtree > Root
class Node {
public:
    int data;
    Node* left;
    Node* right;
    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};

static int idx = -1;
Node* build(vector<int>& preorder) { // Creation of Binary tree using preorder vector
    idx++;
    if (idx >= preorder.size() || preorder[idx] == -1) {
        return nullptr; 
    }
    Node* root = new Node(preorder[idx]);
    root->left = build(preorder);
    root->right = build(preorder);
    return root;
}

// Preorder Traversal (root > left > right)
void preorder(Node* root) {
    if (root == nullptr) {
        return;
    }
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

// Inorder Traversal (left > root > right)
void inorder(Node* root) {
    if (root == nullptr) {
        return;
    }
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

// Postorder Traversal (left > right > root)
void postorder(Node* root) {
    if (root == nullptr) {
        return;
    }
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

int main() {
    vector<int> preorder1 = {1, 2, -1, -1, 3, 4, -1, -1, 5, -1, -1};
    idx = -1; // Reset idx before building the tree
    Node* root = build(preorder1);

    cout << "Preorder Traversal: ";
    preorder(root);
    cout << endl;

    cout << "Inorder Traversal: ";
    inorder(root);
    cout << endl;

    cout << "Postorder Traversal: ";
    postorder(root);
    cout << endl;

    return 0;
}