#include <iostream>
#include <queue>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) {
        data = val;
        left = nullptr;
        right = nullptr;
    }
};

// Insert node in level order
Node* insertNode(Node* root, int key) {
    if (root == nullptr) {
        return new Node(key);
    }

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->left == nullptr) {
            temp->left = new Node(key);
            return root;
        } else {
            q.push(temp->left);
        }

        if (temp->right == nullptr) {
            temp->right = new Node(key);
            return root;
        } else {
            q.push(temp->right);
        }
    }

    return root;
}

// Search a node
bool searchNode(Node* root, int key) {
    if (root == nullptr) {
        return false;
    }

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->data == key) {
            return true;
        }

        if (temp->left) {
            q.push(temp->left);
        }

        if (temp->right) {
            q.push(temp->right);
        }
    }

    return false;
}

// Delete the deepest node
void deleteDeepest(Node* root, Node* delNode) {
    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->left) {
            if (temp->left == delNode) {
                delete temp->left;
                temp->left = nullptr;
                return;
            } else {
                q.push(temp->left);
            }
        }

        if (temp->right) {
            if (temp->right == delNode) {
                delete temp->right;
                temp->right = nullptr;
                return;
            } else {
                q.push(temp->right);
            }
        }
    }
}

// Delete node by key
Node* deleteNode(Node* root, int key) {
    if (root == nullptr) {
        return nullptr;
    }

    if (root->left == nullptr && root->right == nullptr) {
        if (root->data == key) {
            delete root;
            return nullptr;
        } else {
            return root;
        }
    }

    queue<Node*> q;
    q.push(root);

    Node *temp = nullptr, *keyNode = nullptr;

    while (!q.empty()) {
        temp = q.front();
        q.pop();

        if (temp->data == key) {
            keyNode = temp;
        }

        if (temp->left) {
            q.push(temp->left);
        }

        if (temp->right) {
            q.push(temp->right);
        }
    }

    if (keyNode != nullptr) {
        int x = temp->data;
        deleteDeepest(root, temp);
        keyNode->data = x;
    }

    return root;
}

// Inorder traversal
void inorderTraversal(Node* root) {
    if (root == nullptr) {
        return;
    }
    inorderTraversal(root->left);
    cout << root->data << " ";
    inorderTraversal(root->right);
}

int main() {
    Node* root = nullptr;

    // Insert nodes
    root = insertNode(root, 10);
    root = insertNode(root, 20);
    root = insertNode(root, 30);
    root = insertNode(root, 40);
    root = insertNode(root, 50);

    // Inorder traversal
    cout << "Inorder Traversal: ";
    inorderTraversal(root);
    cout << endl;

    // Search for a node
    int searchKey = 30;
    if (searchNode(root, searchKey)) {
        cout << "Node " << searchKey << " found in the tree." << endl;
    } else {
        cout << "Node " << searchKey << " not found in the tree." << endl;
    }

    // Delete a node
    int deleteKey = 20;
    root = deleteNode(root, deleteKey);
    cout << "Inorder Traversal after deleting " << deleteKey << ": ";
    inorderTraversal(root);
    cout << endl;

    return 0;
}