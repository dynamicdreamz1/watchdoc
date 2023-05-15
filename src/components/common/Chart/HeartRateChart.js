import React from 'react'
import CanvasJSReact from '../../../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function HeartRateChart({HeartData}) {


    const dataPoints =  HeartData?.data?.details && Object?.entries(HeartData?.data?.details).map((t,k) => {
          return { x: new Date(t[0]), y: [t[1]?.minrate, t[1]?.maxrate]}
    })
    // console.log("111111-dataPoints",dataPoints)
		const options = {
			theme: "light2",
			exportEnabled: false,
			animationEnabled: true,
			title:{
				text: ""
			},
      dataPointMaxWidth: 6,
     
			axisX: {
				valueFormatString: "h tt",
        interval: 6,
        intervalType: "hour",
      //  minimum: new Date(2023, 0, 15, 23, 0),
       // maximum: new Date(2023, 0, 17, 0, 0),
        labelFontFamily: "Source Sans Pro', sans-serif",
        labelFontSize: 12,
        labelFontColor: "#8D8D8D",
        tickLength: 32,
        tickThickness: 0,
        gridColor: "#EBEBEB",
        lineColor: "#EBEBEB"
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
			data: [{
                type: "rangeColumn",
                color: "#00B8E2",
                radius: 5,
                axisYType: "secondary",
                indexLabel: "",
                xValueFormatString: "MMM YYYY",
                toolTipContent: "<strong>{x}</strong></br> <span><strong>Max:</strong> {y[1]} bpm</span><br/><span><strong> Min:</strong> {y[0]} bpm</span>",
                dataPoints: dataPoints
              }]
        }
		return (
		<>
    
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</>
		);
}