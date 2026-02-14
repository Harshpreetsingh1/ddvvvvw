#include <iostream>
using namespace std;
const int MAX = 100;
int adj[MAX][MAX], visited[MAX];
int n; 
void create() {
    int edges;
    cout << "Enter number of cities: ";
    cin >> n;
    cout << "Enter number of connections: ";
    cin >> edges;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            adj[i][j] = 0;
        }}cout << "Enter connections (city1 city2):\n";
    for (int i = 0; i < edges; i++) {
        int u, v;
        cin >> u >> v;
        adj[u][v] = 1;
    }
}
void dfs(int v) {
    visited[v] = 1;
    cout << v << " ";
    for (int i = 0; i < n; i++) {
        if (adj[v][i] == 1 && !visited[i]) {
         dfs(i);
        }
    }
}
bool isConnect() {
    for (int i = 0; i < n; i++) {
        visited[i] = 0;
    } dfs(0);
    for (int i = 0; i < n; i++) {
   if (!visited[i]) {            return false;
        }
    } return true;
}
int main() {
    create();
    int start;
    cout << "Enter starting city for DFS: ";
    cin >> start;

    cout << "Cities reachable from city " << start << ":\n";
    for (int i = 0; i < n; i++) {
        visited[i] = 0;
    }
    dfs(start);

    if (isConnect()) {
        cout << "The graph is connected.\n";
    } else {
        cout << "The graph is not connected.\n";
    }

    return 0;
}