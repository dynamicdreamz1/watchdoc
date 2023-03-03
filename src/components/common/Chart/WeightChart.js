import CanvasJSReact from '../../../lib/canvasjs.react';

const WeightChart = () => {
	let CanvasJSChart = CanvasJSReact.CanvasJSChart;
	

	const options = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title:{
			text: ""
		},
		axisX: {
		    valueFormatString: "DD MMM",
            labelFontFamily: "Source Sans Pro', sans-serif",
            labelFontSize: 12,
            labelFontColor: "#8D8D8D",
            tickLength: 32,
            tickThickness: 0,
			gridThickness: 1,
			gridColor: "#EBEBEB",
			lineColor: "#EBEBEB"
		},
		axisY2:{
			title: "",
            minimum: 80,
			maximum: 90,
			interval: 5,
			labelFontFamily: "Source Sans Pro', sans-serif",
			labelFontSize: 12,
			labelFontColor: "#8D8D8D",
			gridColor: "#EBEBEB",
			lineColor: "#EBEBEB"
		},
		data: [{
			type: "scatter",
            axisYType: "secondary",
            markerType: "circle",
			markerColor: "#00B8E2",
			markerSize: 10,
			toolTipContent: "<span><strong>Date:</strong> {x}<span><br> <span><strong>Weight:</strong></span> {y} kg",
			dataPoints: [
                { x: new Date(2023, 1, 1), y: 82},
                { x: new Date(2023, 1, 2), y: 83},
                { x: new Date(2023, 1, 3), y: 84},
                { x: new Date(2023, 1, 4), y: 84},
                { x: new Date(2023, 1, 5), y: 84},
                { x: new Date(2023, 1, 6), y: 84},
                { x: new Date(2023, 1, 7), y: 86}
			]
		}]
	}
	return(
		<CanvasJSChart options = {options} />
	)
}
export default WeightChart;      