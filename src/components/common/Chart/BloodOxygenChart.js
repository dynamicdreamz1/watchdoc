import CanvasJSReact from '../../../lib/canvasjs.react';

const BloodOxygenChart = ({bloodOxygenData}) => {
	let CanvasJSChart = CanvasJSReact.CanvasJSChart;

	
	
	const dataPoints = bloodOxygenData?.data?.details && bloodOxygenData?.data?.details?.map((item) => {
		const dateComponents = item.date.split("T")[0].split("-");
		const timeComponents = item.date.substring(11).split(":");
	  
		const year = parseInt(dateComponents[0]);
		const month = parseInt(dateComponents[1]) - 1;
		const day = parseInt(dateComponents[2]);
	  
		const hour = parseInt(timeComponents[0]);
		const minute = parseInt(timeComponents[1]);
	  
		return { x: new Date(year, month, day, hour, minute), y: item.avg_saturation_percentage };
	  });
	  

	const options = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title:{
			text: ""
		},
		axisX: {
		    valueFormatString: "h tt",
            interval: 6,
            intervalType: "hour",
            // minimum: new Date(2023, 0, 15, 23, 0),
            // maximum: new Date(2023, 0, 17, 0, 0),
            labelFontFamily: "Source Sans Pro', sans-serif",
            labelFontSize: 12,
            labelFontColor: "#8D8D8D",
            tickLength: 32,
            tickThickness: 0,
			gridColor: "#EBEBEB",
			lineColor: "#EBEBEB",
			gridThickness: 1,
		},
		axisY2:{
			title: "",
            minimum: 85,
			maximum: 100,
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
			toolTipContent: "<span><strong>Time:</strong> {x}</span><br> <span><strong>Blood Oxygen:</strong> {y}%</span>",
			dataPoints: [
                { x: new Date(2023, 0, 16, 0, 0), y: 92},
                { x: new Date(2023, 0, 16, 2, 0), y: 93},
                { x: new Date(2023, 0, 16, 4, 0), y: 96},
                { x: new Date(2023, 0, 16, 6, 0), y: 98},
                { x: new Date(2023, 0, 16, 8, 0), y: 97},
                { x: new Date(2023, 0, 16, 10, 0), y: 98},
                { x: new Date(2023, 0, 16, 12, 0), y: 97},
                { x: new Date(2023, 0, 16, 14, 30), y: 96},
                { x: new Date(2023, 0, 16, 16, 0), y: 88},
                { x: new Date(2023, 0, 16, 18, 30), y: 96},
                { x: new Date(2023, 0, 16, 20, 0), y: 97}
			]
		}]
	}
	return(
		<CanvasJSChart options = {options} />
	)
}
export default BloodOxygenChart;      