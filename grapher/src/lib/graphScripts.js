function produceRange(range = 10, resolution = 1) { //defaults to range of 10 and resolution of 1
    //set min and max of range
    const max = range;
    //min is negative of range
    const min = 0 - range;
    //number of data points - twice range to account for -range to range and divided up into resolution chunks
    const n = max * 2 / resolution

    //make an array of values
    return Array.from({
        length: n + 1 //add one to length to avoid -10 to 9 for e.g.
        //_ is unnamed
        //starts as i increases it will go up from the min in resolution jumps
    }, (_, i) => min + i * resolution)
}



function checkCol(col) {
    //get object values and check all are number types
    return Object.values(col).every(value => typeof value === "number")
}

function generatePointData(point) {
    return { x: [point.x], y: [point.y], z: [point.z], type: 'scatter3d', mode: 'markers' }
}

function generateLineData(point, line) {
    const range = produceRange()
    const x = range.map(n => n * line.x + point.x)
    const y = range.map(n => n * line.y + point.y)
    const z = range.map(n => n * line.z + point.z)

    return { x, y, z, type: 'scatter3d', mode: 'lines' }
}

function generatePlaneData(point, line, plane) {
    
  const range = produceRange();
    //set blank arrays for x,y and z
  const x = [];
  const y = [];
  const z = [];

  for (let i = 0; i < range.length; i++) {
    //let t be each item in the generated range in turn
    const t = range[i];

    //set blank arrays for each row to be added to the master arrays eventually
    const rowX = [];
    const rowY = [];
    const rowZ = [];
    //nest a loop in order to get 3D space
    for (let j = 0; j < range.length; j++) {
        //let s be each item in the generated range in turn
      const s = range[j];

      //add to each row in turn taking the respective point, line and plane values
      //s and t act as multipliers to move the points "outwards" to create the plane
      rowX.push(point.x + s * line.x + t * plane.x);
      rowY.push(point.y + s * line.y + t * plane.y);
      rowZ.push(point.z + s * line.z + t * plane.z);
    }

    //once done add each row to the master arrays in turn
    x.push(rowX);
    y.push(rowY);
    z.push(rowZ);
  }

  //Boom! done...
  return { x, y, z, type: "surface" };
}





export function produceGraphData(cols) { 
    const { point, line, plane } = cols;

    const validPoint = checkCol(point)
    const validLine = checkCol(line)
    const validPlane = checkCol(plane)

    if (validPoint && validLine && validPlane) {
        //generate a plane graph
        return generatePlaneData(point, line, plane)
    }

    if (validPoint && validLine) {
        //generate line rawData
        return generateLineData(point, line)
    }

    if (validPoint) {
        //generate point data
        return generatePointData(point)
    }

    //bad data... :(
    return null

}
