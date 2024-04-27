
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

    // creating function dijkstra

    dijkstra(source) {
      let distances = {},                // creating variables to update
      parents = {},                      // distances between our source and other Nodes
      visited = new Set();               //  creating new set that update visited nodes and parents object to update the neightbors Nodes 

      for (let i = 0; i < this.vertices.length; i++) {     // looping in vertices Array that contaign all Nodes
        if (this.vertices[i] === source) {                 // if its the source Node 
            distances[source] = 0;                         // we update distance to this source to 0
        } else {
            distances[this.vertices[i]] = Infinity;        // or we set distances to infinty   
        }
        parents[this.vertices[i]] = null;        // setting the source Node
    }
    let currVertex = this.Mindist_N(distances, visited);    // now we create another variable to contaigh the current Node
                                                            // after we calculate the min ditance by the function Mindist_N
        while (currVertex !== null) {                           // while this node is not the current Node that we visiting
            let distance = distances[currVertex],            // creating a variable to contaign distance to the current Node
                neighbors = this.adjacencyList[currVertex];  // object that contaign the current neighbors Nodes and distances
            for (let neighbor in neighbors) {                    // looping into neighbors Nodes
                let newDistance = distance + neighbors[neighbor];
                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;             // updating distances when we find the shortest
                    parents[neighbor] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.Mindist_N(distances, visited);
        }

        console.log(parents);
        console.log(distances);
    }
    Mindist_N(distances, visited) {               //  creating a function to calculate the short distance to
        let minDistance = Infinity,               // next neightbor
            minVertex = null;
        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < minDistance && !visited.has(vertex)) {  // here we test the min ditance and that node is not visited
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
