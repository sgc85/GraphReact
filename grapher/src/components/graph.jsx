import Plot from 'react-plotly.js';

function Graph( {data} ) {


    console.log(data)
    if (!data.success) return <p>{data.message}</p>


    return (
        <Plot
            data={data.graphData}
            layout={{ width: "100%", height: "100%", title: 'A Fancy Plot' }}
        />
    );

}

export default Graph