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
        tension: 0.2,
        fill: true,
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
