#include <iostream>
using namespace std;
int height(Node*root){//function to calculate the height of the tree by recursion
if(root==NULL){//Base Case condition
return 0;
}

int left=height(root->left);// left subtree
int right=height(root->right);//right subree
return (max(left,right)+1);//+1 for one root node
}//Time complexity - O(n)
int count(Node*root){//Function to count number of nodes in a tree
if(root==NULL){
return 0;
}
int leftcount=count(root->left);
int rightcount=count(root->right);
return leftcount+rightcount+1;
}//TIme COmplexity=O(n)

int sumnodes(Node* root){
if(root==NULL)
return 0;

int leftsum= sumnodes(root-left);
int rightsum= sumnodes(root-right);
return leftsum + rightsum + root->data;
}
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}