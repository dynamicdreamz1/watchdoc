import CanvasJSReact from '../../../lib/canvasjs.react';

const BloodOxygenChart = ({bloodOxygenData ,value}) => {
	let CanvasJSChart = CanvasJSReact.CanvasJSChart;
	const valueFormate = value === 0 ? "h tt" :  "MMM DD"
	
	
	const dataPoints = bloodOxygenData?.data?.details && bloodOxygenData?.data?.details?.map((item ,index) => {
		const dateComponents = item.date.split("T")[0].split("-");
		const year = parseInt(dateComponents[0]);
		const month = parseInt(dateComponents[1]) - 1;
		const day = parseInt(dateComponents[2]);
	  
		// const hour = parseInt(timeComponents[0]);
		// const minute = parseInt(timeComponents[1]);
		return { x: new Date(year, month, day), y: item.avg_saturation_percentage};
	  });
	  
	const options = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title:{
			text: ""
		},
		axisX: {
		    valueFormatString: valueFormate,
            
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
			interval  : 15,
			title: "",
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
			dataPoints: dataPoints 
			
		}]
	}
	return(
		<CanvasJSChart options = {options} />
	)
}
export default BloodOxygenChart;      