#include <iostream>
#include <limits>

using namespace std;

const int V = 5;
const int INF = numeric_limits<int>::max();

int minDistance(int dist[], bool sptSet[]){
    int min = INF;
    int min_index = -1;
    for(int v=0; v<V; ++v){
        if(!sptSet[v] && dist[v] <= min){
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

void printSolution(int dist[]){
    cout << "Vertex Distance from Source ";
    for(int i=0; i<V; ++i){
        if(dist[i] == INF)
            cout << i  << "INF" << '\n';
        else
            cout << i <<  dist[i] << '\n';
    }
}

void dijkstra(int graph[V][V], int src){
    int dist[V];
    bool sptSet[V];
    for(int i=0;i<V;++i){
        dist[i] = INF;
        sptSet[i] = false;
    }
    dist[src] = 0;
    for(int count=0; count<V-1; ++count){
        int u = minDistance(dist, sptSet);
        if(u == -1) break;
        sptSet[u] = true;
        for(int v=0; v<V; ++v){
            if(!sptSet[v] && graph[u][v] != 0 && dist[u] != INF && dist[u] + graph[u][v] < dist[v]){
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    printSolution(dist);
}

int main(){
    int graph[V][V] = {
        {0,10,0,0,0},
        {10,0,5,0,0},
        {0,5,0,15,0},
        {0,0,15,0,20},
        {0,0,0,20,0}
    };
    dijkstra(graph,0);
    return 0;
}