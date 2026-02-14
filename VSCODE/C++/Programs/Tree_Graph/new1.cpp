#include<iostream>
using namespace std;
struct Node {
int data;Node* left;Node* right;
};
Node* createNode(int value) {
Node* newNode = new Node();
newNode->data = value;
            newNode->left = NULL;newNode->right = NULL;
return newNode;
}

void inorder(Node* root) {
       if(root == NULL) {return;}
    inorder(root->left);cout << root->data << " ";inorder(root->right);
}
void preorder(Node* root) {
    if(root == NULL) {return;}
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
void postorder(Node* root) {
    if(root == NULL) {return;}postorder(root->left);
    postorder(root->right);cout << root->data << " ";
}

int main() {
Node* root = createNode(1);
root->left = createNode(2);
    root->right = createNode(3);
    root->left->left = createNode(4);    root->left->right = createNode(5);
    root->right->left = createNode(6);
    root->right->right = createNode(7);

    cout << "Inorder Traversal: ";inorder(root);cout << endl;
    cout << "Preorder Traversal: ";preorder(root);cout << endl;
    cout << "Postorder Traversal: ";postorder(root);cout << endl;

    return 0;
}
