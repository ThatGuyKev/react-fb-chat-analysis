import React from "react";
import CanvasJSReact from "./canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Timings = ({ hours }) => {
  var time_groups = [];

  for (let i of Array(24).keys()) {
    time_groups[i] = 0;
  }

  for (const hour of hours) {
    time_groups[hour] += 1;
  }
  const options = {
    title: {
      text: "Timings",
    },
    asisX: { title: "Hours Interval" },
    asisY: { title: "Frequency" },
    data: [
      {
        type: "column",

        dataPoints: time_groups.map((group) => {
          return { label: group.key, y: group };
        }),
      },
    ],
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <CanvasJSChart options={options} />
    </div>
  );
};
export default Timings;
