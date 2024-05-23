import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { getDates } from "../lib/getDates";

export default function TotalConsumedHomePerDay({
  month,
  year,
  consumedHome,
  consumedEddi,
}) {
  Chart.register(CategoryScale);

  return (
    <Bar
      data={{
        labels: getDates(parseInt(month), parseInt(year)),
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
          {
            data: consumedHome,
            label: "Home (kWh)",
          },
          {
            label: "Eddi (kWh)",
            data: consumedEddi,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Total Consumed Home/Eddi",
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
