import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
export default function TotalConsumedExportedPerDayChart({
  month,
  year,
  exported,
  generated,
}) {
  Chart.register(CategoryScale);

  return (
    <Bar
      data={{
        labels: getDates(parseInt(month), parseInt(year)),
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
          {
            data: generated,
            label: "Consumed (kWh)",
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
            text: "Total Generated/Exported Per Day",
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

const getDates = (month, year) =>
  Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) =>
    new Date(year, month - 1, i + 1).toLocaleDateString(undefined, {
      dateStyle: "medium",
    })
  );
