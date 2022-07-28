import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

let width: any, height: any, gradient: any;
function getGradient(ctx: any, chartArea: any) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(0.5, "rgba(0, 128, 0, .2)");
    gradient.addColorStop(1, "rgba(0, 128, 0, 1)");
  }

  return gradient;
}

export function PlotGraph() {
  const [data, setData] = useState({
    scaleLineColor: "rgba(0,0,0,0)",
    labels: [
      "2:00 PM",
      "5:00 PM",
      "8:30 PM",
      "10:45 PM",
      "",
      "",
      "10:45 PM",
      "",
      "",
      "10:45 PM",
      "",
      "",
    ],
    datasets: [
      {
        data: [10, 20, 0, 12, 13, 0, 20, 20, 10, 42, 43, 0],
        borderColor: "black",
        borderWidth: 2,
        tension: 0.2,
        fill: true,
        backgroundColor: function(context: any) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;
  
          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }
          return getGradient(ctx, chartArea);
        },
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  const dataXLabels: string[] = ["2:00 PM", "5:00 PM", "8:30 PM", "10:45 PM"];
  return (
    <div className="h-full w-full">
      <Line
        className="max-h-64"
        data={data}
        typeof="line"
        options={options}
      ></Line>
      <div className="flex w-full justify-between text-xs">
        {dataXLabels.map((label: string, index: number) => (
          <div key={index}>{label}</div>
        ))}
      </div>
    </div>
  );
}
