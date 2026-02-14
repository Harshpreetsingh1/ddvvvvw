#include <iostream>
#include <vector>
#include <algorithm>

class DisjointSets {
    std::vector<int> parent_;
    std::vector<int> rank_;
public:
    explicit DisjointSets(int n)
        : parent_(n), rank_(n, 0)
    {
        for (int i = 0; i < n; ++i) parent_[i] = i;
    }

    int find(int u) {
        if (u != parent_[u]) parent_[u] = find(parent_[u]);
        return parent_[u];
    }

    void unite(int u, int v) {
        int ru = find(u);
        int rv = find(v);
        if (ru == rv) return;
        if (rank_[ru] < rank_[rv]) parent_[ru] = rv;
        else if (rank_[ru] > rank_[rv]) parent_[rv] = ru;
        else { parent_[rv] = ru; ++rank_[ru]; }
    }
};

struct Edge {
    int u, v, weight;
    bool operator<(Edge const& other) const { return weight < other.weight; }
};

class Graph {
    int V_;
    std::vector<Edge> edges_;
public:
    explicit Graph(int V) : V_(V) { edges_.reserve(16); }

    void addEdge(int u, int v, int w) { edges_.push_back({u, v, w}); }

    void kruskalMST() const {
        auto edges = edges_;                 // work on a copy to keep method const
        std::sort(edges.begin(), edges.end());
        DisjointSets ds(V_);
        std::vector<Edge> mst;
        mst.reserve(V_ - 1);
        int mstWeight = 0;

        for (auto const& e : edges) {
            if (ds.find(e.u) != ds.find(e.v)) {
                ds.unite(e.u, e.v);
                mst.push_back(e);
                mstWeight += e.weight;
            }
        }

        std::cout << "Edges in MST:\n";
        for (auto const& e : mst) {
            std::cout << e.u << " -- " << e.v << " == " << e.weight << '\n';
        }
        std::cout << "Minimum Cost Spanning Tree: " << mstWeight << '\n';
    }
};

int main() {
    Graph g(4);
    g.addEdge(0, 1, 10);
    g.addEdge(0, 2, 6);
    g.addEdge(0, 3, 5);
    g.addEdge(1, 3, 15);
    g.addEdge(2, 3, 4);
    g.kruskalMST();
    return 0;
}