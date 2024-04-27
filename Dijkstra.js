
class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList[vertex] = {};
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1][vertex2] = weight;
        this.adjacencyList[vertex2][vertex1] = weight;
    }

    

    dijkstra(source) {
      let distances = {},
      parents = {},
      visited = new Set();

      for (let i = 0; i < this.vertices.length; i++) {
        if (this.vertices[i] === source) {
            distances[source] = 0;
        } else {
            distances[this.vertices[i]] = Infinity;
        }
        parents[this.vertices[i]] = null;
    }
    let currVertex = this.Mindist_N(distances, visited);

        while (currVertex !== null) {
            let distance = distances[currVertex],
                neighbors = this.adjacencyList[currVertex];
            for (let neighbor in neighbors) {
                let newDistance = distance + neighbors[neighbor];
                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.Mindist_N(distances, visited);
        }

        console.log(parents);
        console.log(distances);
    }
    Mindist_N(distances, visited) {
        let minDistance = Infinity,
            minVertex = null;
        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < minDistance && !visited.has(vertex)) {
                minDistance = distance;
                minVertex = vertex;
            }
        }
        return minVertex;
    }
    }



var g = new Graph ;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B',4);
g.addEdge('A','C',2);
g.addEdge('B','C',5);
g.addEdge('B','D',10);
g.addEdge('D','C',3);
g.addEdge('E','F',9);
g.addEdge('D','E',1);
g.addEdge('C','F',6);


g.dijkstra('A')
console.log(g);