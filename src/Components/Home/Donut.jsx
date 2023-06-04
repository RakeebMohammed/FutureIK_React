import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: "",
  datasets: [
    {
      label: "",
      data: [15, 12],
      backgroundColor: ["rgb(23 37 84)", "rgb(243 244 246 )"],
      borderColor: ["rgb(23 37 84)", "rgb(243 244 246) "],
      borderWidth: 0.5,
    
    },
  ],
};
export const usage = {
  labels: "",
  datasets: [
    {
      label: "",
      data: [60, 40],
      backgroundColor: ["rgb(23 37 84)", "rgb(243 244 246 )"],
      borderColor: ["rgb(23 37 84)", "rgb(243 244 246) "],
      borderWidth: 0.5,
      Width: 24,
    },
  ],
};
export const second = {
  labels: "",
  datasets: [
    {
      label: "",
      data: [27, 3],
      backgroundColor: ["rgb(23 37 84)", "rgb(243 244 246 )"],
      borderColor: ["rgb(23 37 84)", "rgb(243 244 246) "],
      borderWidth: 0.5,
      Width: 24,
    },
  ],
};
export const third = {
  labels: "",
  datasets: [
    {
      label: "",
      data: [1, 29],
      backgroundColor: ["rgb(23 37 84)", "rgb(243 244 246 )"],
      borderColor: ["rgb(23 37 84)", "rgb(243 244 246) "],
      borderWidth: 0.5,
      Width: 24,
    },
  ],
};

export function Che() {
  return <Doughnut data={data}  />;
}
export function Usage() {
  return <Doughnut data={usage}  />;
}
export function Second() {
  return <Doughnut data={second} />;
}
export function Third() {
  return <Doughnut data={third}/>;
}
