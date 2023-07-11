import "animate.css";



const svgBar = () => {
bar = new RGraph.SVG.Bar({
    id: 'chart-container',
    data: [3.8,4.3,4.1],
    options: {
        marginInner: 25,
        yaxisLabels: false,
        yaxisScaleMin: -10,
        yaxisScaleMax: 30,
        yaxis: false,
        xaxis: false,
        backgroundGrid: false,
        labelsAbove: true,
        labelsAboveUnitsPost: '/5',
        labelsAboveOffsety: -5,
        labelsAboveDecimals: 1,
        labelsAboveSize: 10,
        colors: ['#EA8F4D'],
        xaxisLabels: ['Trip Advisor','Facebook','Google'],
        xaxisTextSize: 8,
        xaxisTextColor: '#FFFFF',
        yaxisScale: false,
        title: 'Évaluations',
        titleSubtitleItalic: true,
        marginTop: 105
    }
}).wave();

}
svgBar();

