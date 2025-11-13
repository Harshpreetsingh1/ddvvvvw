
#include <iostream>
#include <vector>
#include <limits>

// Idiomatic C++ implementation of Dijkstra's algorithm using an adjacency matrix.
// This mirrors the original C-style implementation but uses std::vector and iostream.

const int V = 5; // Number of vertices
const int INF = std::numeric_limits<int>::max();

int minDistance(const std::vector<int>& dist, const std::vector<bool>& sptSet) {
    int min = INF;
    int min_index = -1;
    for (int v = 0; v < V; ++v) {
        if (!sptSet[v] && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

void printSolution(const std::vector<int>& dist) {
    std::cout << "Vertex\tDistance from Source\n";
    for (int i = 0; i < V; ++i) {
        if (dist[i] == INF)
            std::cout << i << "\t\t" << "INF" << '\n';
        else
            std::cout << i << "\t\t" << dist[i] << '\n';
    }
}

void dijkstra(const std::vector<std::vector<int>>& graph, int src) {
    std::vector<int> dist(V, INF);
    std::vector<bool> sptSet(V, false);

    dist[src] = 0;

    for (int count = 0; count < V - 1; ++count) {
        int u = minDistance(dist, sptSet);
        if (u == -1) // remaining vertices are unreachable
            break;

        sptSet[u] = true;

        for (int v = 0; v < V; ++v) {
            if (!sptSet[v] && graph[u][v] != 0 && dist[u] != INF
                && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    printSolution(dist);
}

int main() {
    std::vector<std::vector<int>> graph = {
        {0, 10, 0, 0, 0},
        {10, 0, 5, 0, 0},
        {0, 5, 0, 15, 0},
        {0, 0, 15, 0, 20},
        {0, 0, 0, 20, 0}
    };

    dijkstra(graph, 0);

    return 0;
}