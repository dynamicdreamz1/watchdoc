import React from 'react'
import CanvasJSReact from '../../../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function HeartRateChart() {
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
        minimum: new Date(2023, 0, 15, 23, 0),
        maximum: new Date(2023, 0, 17, 0, 0),
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
                dataPoints: [
                  { x: new Date(2023, 0, 16, 0, 0), y: [10, 40]},
                  { x: new Date(2023, 0, 16, 0, 30), y: [30, 60]},
                  { x: new Date(2023, 0, 16, 1, 0), y: [10, 20]},
                  { x: new Date(2023, 0, 16, 1, 30), y: [20, 30] },
                  { x: new Date(2023, 0, 16, 2, 0), y: [10, 40] },
                  { x: new Date(2023, 0, 16, 2, 30), y: [40, 80] },
                  { x: new Date(2023, 0, 16, 3, 0), y: [5, 120] },
                  { x: new Date(2023, 0, 16, 3, 30), y: [20, 80] },
                  { x: new Date(2023, 0, 16, 4, 0), y: [25, 90] },
                  { x: new Date(2023, 0, 16, 4, 30), y: [30, 100] },
                  { x: new Date(2023, 0, 16, 5, 0), y: [35, 75] },
                  { x: new Date(2023, 0, 16, 5, 30), y: [5, 65] },
                  { x: new Date(2023, 0, 16, 6, 0), y: [10, 90] },
                  { x: new Date(2023, 0, 16, 6, 30), y: [8, 80] },
                  { x: new Date(2023, 0, 16, 7, 0), y: [60, 100] },
                  { x: new Date(2023, 0, 16, 7, 30), y: [10, 40] },
                  { x: new Date(2023, 0, 16, 8, 0), y: [10, 40] },
                  { x: new Date(2023, 0, 16, 8, 30), y: [10, 20] },
                  { x: new Date(2023, 0, 16, 9, 0), y: [5, 120] },
                  { x: new Date(2023, 0, 16, 9, 30), y: [20, 50] },
                  { x: new Date(2023, 0, 16, 10, 0), y: [2, 80] },
                  { x: new Date(2023, 0, 16, 10, 30), y: [22, 80] },
                  { x: new Date(2023, 0, 16, 11, 0), y: [20, 120]},
                  { x: new Date(2023, 0, 16, 11, 30), y: [100, 120]},
                  { x: new Date(2023, 0, 16, 12, 0), y: [80, 120] },
                  { x: new Date(2023, 0, 16, 12, 30), y: [10, 120] },
                  { x: new Date(2023, 0, 16, 13, 0), y: [30, 60] },
                  { x: new Date(2023, 0, 16, 13, 30), y: [30, 60] },
                  { x: new Date(2023, 0, 16, 14, 0), y: [5, 20] },
                  { x: new Date(2023, 0, 16, 14, 30), y: [15, 20] },
                  { x: new Date(2023, 0, 16, 15, 0), y: [40, 50] },
                  { x: new Date(2023, 0, 16, 15, 30), y: [15, 70] },
                  { x: new Date(2023, 0, 16, 16, 0), y: [30, 40] },
                  { x: new Date(2023, 0, 16, 16, 30), y: [10, 60] },
                  { x: new Date(2023, 0, 16, 17, 0), y: [35, 45] },
                  { x: new Date(2023, 0, 16, 17, 30), y: [5, 45] },
                  { x: new Date(2023, 0, 16, 18, 0), y: [60, 180] },
                  { x: new Date(2023, 0, 16, 18, 30), y: [30, 180] },
                  { x: new Date(2023, 0, 16, 19, 0), y: [20, 120] },
                  { x: new Date(2023, 0, 16, 19, 30), y: [10, 50] },
                  { x: new Date(2023, 0, 16, 20, 40), y: [12, 40] },
                  { x: new Date(2023, 0, 16, 21, 0), y: [25, 80] },
                  { x: new Date(2023, 0, 16, 21, 30), y: [14, 80] },
                  { x: new Date(2023, 0, 16, 22, 0), y: [20, 40] },
                  { x: new Date(2023, 0, 16, 22, 30), y: [16, 50] },
                  { x: new Date(2023, 0, 16, 23, 0), y: [10, 120]}
                ]
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