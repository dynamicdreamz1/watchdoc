import React, { useRef, useEffect} from 'react';
import CanvasJSReact from '../../../lib/canvasjs.react';

const BloodPressureChart = ({bloodPressureData}) => {
	const chartRef = useRef(null);
	const CanvasJSChart = CanvasJSReact.CanvasJSChart;
	let chart = chartRef?.current;

	const dataPoints =  bloodPressureData?.data?.details && Object?.entries(bloodPressureData?.data?.details).map((t,k) => {
				return { x: new Date(t[0]), y: [t[1]?.diastolic_bp]}
		
		  })
		console.log("111111-2222-dataPoints",dataPoints)
	

	const toggleDataSeries = (e) => {
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		chartRef?.current.render();
	}

	useEffect(() => {
		chart.render();
	}, [chart]);

	const options = {
		theme: "light2",
		animationEnabled: true,
		title: {
			text: ""
		},
		axisX: {
			title: "",
			intervalType: "",
			interval: 15,
			// minimum: new Date("2017- 01- 01"),
          	// maximum: new Date("2017- 01- 31"),
			valueFormatString: "DD MMM",
			labelFontFamily: "Source Sans Pro', sans-serif",
			labelFontSize: 12,
			labelFontColor: "#8D8D8D",
			tickLength: 20,
			tickThickness: 0,
			gridColor: "#EBEBEB",
			lineColor: "#EBEBEB",
			gridThickness: 1,
		},
		axisY2: {
			title: "",
			includeZero: true,
			suffix: "",
			minimum: 0,
			maximum: 200,
			interval: 50,
			labelFontFamily: "Source Sans Pro', sans-serif",
			labelFontSize: 12,
			labelFontColor: "#8D8D8D",
			gridColor: "#EBEBEB",
			lineColor: "#EBEBEB"
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [
			{
				type: "scatter",
				name: "",
				axisYType: "secondary",
				markerType: "circle",
				markerColor: "#00B8E2",
				markerSize: 10,
				showInLegend: true,
				toolTipContent: "<span><strong>Date:</strong> {x}</span><br><span><strong>Systolic Range:</strong> {y}</span>",
				dataPoints: 
				[
					{ x: new Date("2017- 01- 02"), y: 60 },
					{ x: new Date("2017- 01- 05"), y: 65 },
					{ x: new Date("2017- 01- 07"), y: 50 },
					{ x: new Date("2017- 01- 09"), y: 62 },
					{ x: new Date("2017- 01- 11"), y: 58 },
					{ x: new Date("2017- 01- 13"), y: 56 },
					{ x: new Date("2017- 01- 15"), y: 64 },
					{ x: new Date("2017- 01- 17"), y: 88 },
					{ x: new Date("2017- 01- 19"), y: 94 },
					{ x: new Date("2017- 01- 21"), y: 86 },
					{ x: new Date("2017- 01- 23"), y: 70 },
					{ x: new Date("2017- 01- 25"), y: 63 },
					{ x: new Date("2017- 01- 27"), y: 56 },
					{ x: new Date("2017- 01- 30"), y: 55 },
				]
			},
			{
				type: "scatter",
				name: "",
				axisYType: "secondary",
				showInLegend: true,
				markerType: "circle",
				markerSize: 10,
				toolTipContent: "<span><strong>Date:</strong> {x}</span><br><span><strong>Diastolic Range:</strong> {y}</span>",
				dataPoints: 

				 [
					{ x: new Date("2017- 01- 02"), y: 110 },
					{ x: new Date("2017- 01- 05"), y: 120 },
					{ x: new Date("2017- 01- 07"), y: 90 },
					{ x: new Date("2017- 01- 09"), y: 99 },
					{ x: new Date("2017- 01- 11"), y: 102 },
					{ x: new Date("2017- 01- 13"), y: 140 },
					{ x: new Date("2017- 01- 15"), y: 140 },
					{ x: new Date("2017- 01- 17"), y: 145 },
					{ x: new Date("2017- 01- 19"), y: 120 },
					{ x: new Date("2017- 01- 21"), y: 100 },
					{ x: new Date("2017- 01- 23"), y: 115 },
					{ x: new Date("2017- 01- 25"), y: 105 },
					{ x: new Date("2017- 01- 27"), y: 102 },
					{ x: new Date("2017- 01- 30"), y: 110 },
				]
			}
		]
		
	}
	return (
		<>
			<CanvasJSChart options = {options}
				onRef={ref => chart = ref}
			/>
		</>
	);
}

export default BloodPressureChart;