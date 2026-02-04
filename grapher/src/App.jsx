import Graph from "./components/graph"

import React, { useState } from "react"
import { produceGraphData } from "./lib/graphScripts"

function App() {



const tableTop = {
  point: { x: 0, y: 0, z: 3 },
  line:  { x: 1, y: 0, z: 0 }, 
  plane: { x: 0, y: 1, z: 0 }, 
};


const wall = {
  point: { x: 2, y: 0, z: 0 },
  line:  { x: 0, y: 1, z: 0 }, 
  plane: { x: 0, y: 0, z: 1 }, 
};



  const [data, setData] = useState(produceGraphData(tableTop))

  console.log(data)



  return (
    <>
      <Graph data={data} />
    </>
  )
}

export default App
