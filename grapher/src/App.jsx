import Graph from "./components/graph"

import React, { useState } from "react"

function App() {

  const [data, setData] = useState({
    success: true,
    graphData: [
      {
        x: [1],
        y: [2],
        z: [3],
        type: 'scatter3d',
        mode: "markers",
      },
    ]
  })


  const myPointData = {
    success: true,
    data: [
      {
        x: [1],
        y: [2],
        z: [3],
        type: 'scatter3d',
        mode: "lines",
      },
    ]
  }
  const myFailure = {
    success: false,
    message: "invalid point data",
    data: null,
  }




  return (
    <>
      <Graph data={data} />
    </>
  )
}

export default App
