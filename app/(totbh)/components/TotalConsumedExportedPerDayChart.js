"use client";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { getDates } from "../utils/getDates";

export default function TotalConsumedExportedPerDayChart({
  month,
  year,
  consumed,
  exported,
  imported,
}) {
  Chart.register(CategoryScale);

  return (
    <Bar
      data={{
        labels: getDates(parseInt(month), parseInt(year)),
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
          {
            data: consumed,
            label: "Consumed (kWh)",
          },
          {
            data: imported,
            label: "Imported (kWh)",
          },
          {
            label: "Exported (kWh)",
            data: exported,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Total Consumed/Imported/Exported Per Day",
          },
        },

        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
          },
        },
      }}
    />
  );
}
