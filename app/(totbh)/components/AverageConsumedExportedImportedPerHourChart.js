"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
export default function AverageConsumedExportedImportedPerHour({
  avgConsumed,
  avgExported,
  avgImported,
}) {
  Chart.register(CategoryScale);

  return (
    <Bar
      data={{
        labels: [
          "12am",
          "1am",
          "2am",
          "3am",
          "4am",
          "5am",
          "6am",
          "7am",
          "8am",
          "9am",
          "10am",
          "11am",
          "12pm",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm",
          "6pm",
          "7pm",
          "8pm",
          "9pm",
          "10pm",
          "11pm",
        ],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
          {
            data: avgConsumed,
            label: "Consumed (kWh)",
          },
          {
            label: "Imported (kWh)",
            data: avgImported,
          },
          {
            label: "Exported (kWh)",
            data: avgExported,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Average Consumed/Exported/Imported Per Hour",
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
