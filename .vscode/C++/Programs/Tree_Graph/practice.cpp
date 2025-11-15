#include <iostream>
#include<queue>
using namespace std;
class Node{
public:
 Node* left;
 Node* right;
 int data;
Node(int val){
left=nullptr;
right=nullptr;
data=val;
}

Node* insert(int key,Node* root){
    Node* newnode= new Node(key);
    if(root==nullptr){
    return newnode;
    if(key<root->data){
    root->left=insert(root->left,key);
    }
    else if(key>root->data){
    root->right=insert(root->right,key);

    else
    return root;    
}
}


}
bool search(Node* root,int key){
if (root==nullptr)
return false;
else if(root->data==key){
return true;

}
else if(key<root->data){
return search(root->left,key);
}
else
return search(root->right,key);
}


Node* delete(Node* root,int key){
if (root==nullptr)
return false;

}
else if(key<root->data){
root->left = delete(root->left,key);
}
else if
root->right=delete(root->right,key);
}

else {
    Node* temp=root->left;
    delete root;
    delete temp;

;}

void inorder(Node* root){
if(root==nullptr) return ;
inorder(root->left);
cout<<root->data<<" ";
inorder(root->data);
}
void postorder(Node* root){
if(root==nullptr) return ;
postorder(root->left);
postorder(root->right);
cout<<root->data<<" ";
}
void preorder(Node* root){
if(root==nullptr) return ;
cout<<root->data<<" ";
postorder(root->left);
postorder(root->right);
}
};
int main() {
    
    return 0;
}