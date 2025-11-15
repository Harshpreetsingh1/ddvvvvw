#include <iostream>
#include <queue>
using namespace std;

const int MAX = 100;

int adj[MAX][MAX], visited[MAX];
int n; 

void createGraph() {
    int edges;
    cout << "Enter number of cities: ";
    cin >> n;
    cout << "Enter number of connections: ";
    cin >> edges;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            adj[i][j] = 0;
        }
    }

    cout << "Enter connections (city1 city2):\n";
    for (int i = 0; i < edges; i++) {
        int u, v;
        cin >> u >> v;
        adj[u][v] = 1;
        adj[v][u] = 1;
    }
}

void BFS(int start) {
    queue<int> q;
    q.push(start);
    visited[start] = 1;

    while (!q.empty()) {
        int v = q.front();
        q.pop();
        cout << v << " ";

        for (int i = 0; i < n; i++) {
            if (adj[v][i] == 1 && !visited[i]) {
                q.push(i);
                visited[i] = 1;
            }
        }
    }
}

int main() {
    createGraph();
    int start;
    cout << "Enter starting city for BFS: ";
    cin >> start;

    cout << "Cities reachable from city " << start << " using BFS:\n";
    for (int i = 0; i < n; i++) {
        visited[i] = 0;
    }
    BFS(start);

    return 0;
}