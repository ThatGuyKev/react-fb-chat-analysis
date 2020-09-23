import React from "react";
import CanvasJSReact from "./canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Analysis = ({ intensity, name }) => {
  const options = {
    animationEnabled: true,
    title: {
      text: `Chat with ${name}`,
    },
    subtitles: [
      {
        text: `${Math.round(intensity.pos * 100)}% Positive`,
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "Neutral", y: intensity.neu * 100 },
          { name: "Negative", y: intensity.neg * 100 },
          { name: "Positive", y: intensity.pos * 100 },
        ],
      },
    ],
  };
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};
export default Analysis;
