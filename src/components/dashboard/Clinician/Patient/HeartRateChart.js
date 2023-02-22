import React from 'react'
import CanvasJSReact from '../../../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
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
			},
			data: [{
                type: "rangeColumn",
                color: "#00B8E2",
                radius: 5,
                axisYType: "secondary",
                indexLabel: "",
                xValueFormatString: "MMM YYYY",
                toolTipContent: "<strong>{x}</strong></br> Max: {y[1]} °C<br/> Min: {y[0]} °C",
                dataPoints: [
                  { x: new Date(2023, 0, 16, 0, 0), y: [10, 40]},
                  { x: new Date(2023, 0, 16, 1, 20), y: [30, 60] },
                  { x: new Date(2023, 0, 16, 2, 40), y: [40, 80] },
                  { x: new Date(2023, 0, 16, 3, 0), y: [40, 120] },
                  { x: new Date(2023, 0, 16, 4, 20), y: [30, 100] },
                  { x: new Date(2023, 0, 16, 5, 40), y: [35, 65] },
                  { x: new Date(2023, 0, 16, 6, 0), y: [60, 120] },
                  { x: new Date(2023, 0, 16, 7, 20), y: [40, 100] },
                  { x: new Date(2023, 0, 16, 8, 40), y: [12, 50] },
                  { x: new Date(2023, 0, 16, 9, 0), y: [20, 50] },
                  { x: new Date(2023, 0, 16, 10, 20), y: [22, 80] },
                  { x: new Date(2023, 0, 16, 11, 40), y: [100, 120]},
                  { x: new Date(2023, 0, 16, 12, 0), y: [80, 120] },
                  { x: new Date(2023, 0, 16, 13, 20), y: [30, 60] },
                  { x: new Date(2023, 0, 16, 14, 40), y: [5, 20] },
                  { x: new Date(2023, 0, 16, 15, 0), y: [40, 50] },
                  { x: new Date(2023, 0, 16, 16, 20), y: [30, 40] },
                  { x: new Date(2023, 0, 16, 17, 40), y: [35, 45] },
                  { x: new Date(2023, 0, 16, 18, 0), y: [60, 180] },
                  { x: new Date(2023, 0, 16, 19, 20), y: [40, 16] },
                  { x: new Date(2023, 0, 16, 20, 40), y: [12, 20] },
                  { x: new Date(2023, 0, 16, 21, 0), y: [14, 22] },
                  { x: new Date(2023, 0, 16, 22, 20), y: [16, 24] },
                  { x: new Date(2023, 0, 16, 23, 40), y: [100, 120]},
                  { x: new Date(2023, 0, 17, 0, 0), y: [80, 120] },
                ]
              }]
        }
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}