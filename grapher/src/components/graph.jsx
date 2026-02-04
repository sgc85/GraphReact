import Plot from 'react-plotly.js';

function Graph( {data} ) {


    if (!data) return <p>{data}</p>


    return (
        <Plot
            data={[data]}
            layout={{ width: "100%", height: "100%", title: 'A Fancy Plot', scene: {aspectmode: "auto"}}}
        />
    );

}


export default Graph