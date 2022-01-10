function createNode(key) {
    const neighbors = [];
  
    return {
      key,
      neighbors,
      addNeighbor(node) {
        neighbors.push(node);
      },
    };
  }
  
  function createGraph(directed = false) {
    const nodes = [];
    const edges = [];
  
    return {
      directed,
      nodes,
      edges,
  
      //add node
      addNode(key) {
        nodes.push(createNode(key));
      },
  
      //get node
      getNode(key) {
        return nodes.find((node) => node.key === key);
      },
  
      //add edge
      addEdge(node1Key, node2Key) {
        const node1 = this.getNode(node1Key);
        const node2 = this.getNode(node2Key);
  
        node1.addNeighbor(node2);
        edges.push(`${node1Key}-${node2Key}`);
  
        if (!directed) {
          node2.addNeighbor(node1);
        }
      },
      print() {
        return nodes.map(({ key, neighbors }) => {
          let result = key;
  
          if (neighbors.length) {
            result += `=> ${neighbors.map((neighbor) => neighbor.key).join(" ")}`;
          }
          return result
        }).join('\n')
      },

      //breadth first search\
      breadthFirstsearch(startingNodekey,visitFn){
          const startingNode = this.getNode(startingNodekey)

          const visited = nodes.reduce((acc, node)=>{
              acc[node.key]=false
              return acc
          },{})

          const queue = createQueue()
          queue.enqueue(startingNode)

          while(!queue.isEmpty()){
              const currentNode=queue.dequeue()

              if(!visited[currentNode.key]){
                  visitFn(currentNode)
                  visited[currentNode.key]=true
              }

              currentNode.neighbours.forEach(node => {
                  if(!visited[node.key]){
                      queue.enqueue(node)
                  }
                  
              });


          }



      }

    };
  }
  
  const graph = createGraph(true)
  
  graph.addNode("Kyle")
  graph.addNode("Anna")
  graph.addNode("Krios")
  graph.addNode("Tali")
  
  graph.addEdge('Kyle', 'Anna')
  graph.addEdge('Anna', 'Kyle')
  graph.addEdge('Kyle', 'Krios')
  graph.addEdge('Kyle', 'Tali')
  graph.addEdge('Anna', 'Krios')
  graph.addEdge('Anna', 'Tali')
  graph.addEdge('Krios', 'Anna')
  graph.addEdge('Tali', 'Kyle')
  
  
  console.log(graph.print())