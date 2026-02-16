#include<iostream>
using namespace std;


class Node 
{
  public:
int data;
   Node* left;
  Node* right;
  
  Node(int val)
  {
  data=val;
    left=NULL;
     right=NULL;
  }
};


Node* insert(Node* root,int key)
{
if(root==NULL)
{
return new Node(key);
}

  if(key<root->data)
{
root->left=insert(root->left,key);
}
else if(key>root->data)
  {
root->right=insert(root->right,key);}
  
return root;}



bool search(Node* root,int key)
{
  if(root==NULL){
  return false;
  }
  
if(root->data==key)
{
return true;
}

   if(key<root->data){
   return search(root->left,key);
   }
else{
return search(root->right,key);}}

Node* findMin(Node* root){
while(root->left!=NULL){
  root=root->left;
}
return root;}


Node* deleteNode(Node* root,int key){
if(root==NULL){
return root;}

  if(key<root->data){
root->left=deleteNode(root->left,key);
}
else if(key>root->data)
  {
root->right=deleteNode(root->right,key);
  }
else
{
  if(root->left==NULL)
  {
Node* temp=root->right;
    delete root;
  return temp;
  }
  else if(root->right==NULL)
{
  Node* temp=root->left;
delete root;
return temp;
}

Node* temp=findMin(root->right);
root->data=temp->data;
  root->right=deleteNode(root->right,temp->data);
}

return root;
}


void inorder(Node* root)
{
if(root==NULL)
{
  return;
}
inorder(root->left);
  cout<<root->data<<" ";
inorder(root->right);
}


int main()
{
Node* root=NULL;
int choice,key;

  do
{
cout<<"\nBinary Search Tree Operations:\n";
  cout<<"1. Insert\n";
cout<<"2. Search\n";
  cout<<"3. Delete\n";
cout<<"4. Inorder Traversal\n";
  cout<<"5. Exit\n";
cout<<"Enter your choice: ";
cin>>choice;

switch(choice)
{
case 1:
  cout<<"Enter value to insert: ";
cin>>key;
root=insert(root,key);
  break;
  
case 2:
cout<<"Enter value to search: ";
  cin>>key;
  if(search(root,key))
{
  cout<<key<<" is found in the tree.\n";
}
else
  {
cout<<key<<" is not found in the tree.\n";
  }
break;

  case 3:
cout<<"Enter value to delete: ";
  cin>>key;
root=deleteNode(root,key);
  break;
  
case 4:
  cout<<"Inorder Traversal: ";
inorder(root);
cout<<"\n";
  break;
  
  case 5:
cout<<"Exiting...\n";
break;

default:
  cout<<"Invalid choice. Please try again.\n";
}

}while(choice!=5);

return 0;
}