#include <iostream>
using namespace std;

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
    Node* newNode = new Node(key);//New Node creation
    if (root == nullptr)
     return newNode;

    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();
        if (temp->left == nullptr) {
            temp->left = newNode;
            return root;
        } else 
        {
            q.push(temp->left);
        }
        if (temp->right == nullptr) {
            temp->right = newNode;
            return root;
        } else
         {
            q.push(temp->right);
        }
    }
    return root;
}
// Search a node
Node* searchNode(Node* root, int key) {
    if (root == nullptr) return nullptr;

    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* temp = q.front();
        q.pop();

        if (temp->data == key)
            return temp;

        if (temp->left) q.push(temp->left);
        if (temp->right) q.push(temp->right);
    }
    return nullptr;
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

// Delete a node
Node* deleteNode(Node* root, int key) {
    if (root == nullptr) return nullptr;

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

    Node* temp = nullptr;

    while (!q.empty()) {
        temp = q.front();
        q.pop();

        if (temp->data == key)
            break;

        if (temp->left) q.push(temp->left);
        if (temp->right) q.push(temp->right);
    }

    if (temp->data != key) return root;

    int x = temp->data;

    while (!q.empty()) {
        temp = q.front();
        q.pop();
    }

    deleteDeepest(root, temp);
    temp->data = x;

    return root;
}

int main() {
    Node* root = nullptr;

    // Insert nodes into the binary tree
    root = insertNode(root, 50);
    root = insertNode(root, 30);
    root = insertNode(root, 70);
    root = insertNode(root, 20);
    root = insertNode(root, 40);
    root = insertNode(root, 60);
    root = insertNode(root, 80);

    // Search for a value
    int searchValue = 40;
    if (searchNode(root, searchValue)) {
        cout << searchValue << " is found in the tree." << endl;
    } else {
        cout << searchValue << " is not found in the tree." << endl;
    }

    // Delete a node
    int deleteValue = 50;
    root = deleteNode(root, deleteValue);
    cout << "After deleting " << deleteValue << ", In-order Traversal: ";
    inorder(root);
    cout << endl;

    // Perform level order traversal
    cout << "Level Order Traversal: ";
    levelOrderTraversal(root);
    cout << endl;

    return 0;
}