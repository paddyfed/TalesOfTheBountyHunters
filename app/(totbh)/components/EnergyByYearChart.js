"use client";
import dynamic from "next/dynamic";

// https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function EnergyByYearChart() {
  const options = {
    chart: {
      stacked: true,
    },
    xaxis: {
      type: "category",

      group: {
        style: {
          fontSize: "10px",
          fontWeight: 700,
        },
        groups: [
          { title: "Jan", cols: 1 },
          { title: "Feb", cols: 1 },
          { title: "Mar", cols: 1 },
          { title: "Apr", cols: 1 },
          { title: "May", cols: 1 },
          { title: "Jun", cols: 1 },
          { title: "Jul", cols: 1 },
          { title: "Aug", cols: 2 },
          { title: "Sep", cols: 2 },
          { title: "Oct", cols: 1 },
          { title: "Nov", cols: 1 },
          { title: "Dec", cols: 1 },
        ],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val, index) {
          return `${val.toFixed(0)} kWh`;
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    theme: {
      palette: "palette3", // upto palette10
    },
  };

  const series = [
    {
      name: "Consumed",
      data: [
        {
          x: "2024",
          y: 170.245,
        },

        {
          x: "2024",
          y: 218.127,
        },

        {
          x: "2024",
          y: 351.444,
        },

        {
          x: "2024",
          y: 427.176,
        },

        {
          x: "2024",
          y: 572.077,
        },

        {
          x: "2024",
          y: 500.157,
        },

        {
          x: "2024",
          y: 561.039,
        },
        {
          x: "2023",
          y: 118.271,
        },
        {
          x: "2024",
          y: 504.859,
        },
        {
          x: "2023",
          y: 389.048,
        },
        {
          x: "2024",
          y: 443.566,
        },

        {
          x: "2023",
          y: 324.784,
        },

        {
          x: "2023",
          y: 205.711,
        },

        {
          x: "2023",
          y: 98.44,
        },
      ],
    },
    {
      name: "Exported",
      data: [
        {
          x: "2024",
          y: 20.466,
        },

        {
          x: "2024",
          y: 66.951,
        },

        {
          x: "2024",
          y: 52.469,
        },

        {
          x: "2024",
          y: 187.537,
        },

        {
          x: "2024",
          y: 113.356,
        },

        {
          x: "2024",
          y: 213.3,
        },

        {
          x: "2024",
          y: 115.683,
        },
        {
          x: "2023",
          y: 9.667,
        },
        {
          x: "2024",
          y: 132.011,
        },
        {
          x: "2023",
          y: 125.233,
        },
        {
          x: "2024",
          y: 82.546,
        },

        {
          x: "2023",
          y: 39.892,
        },

        {
          x: "2023",
          y: 18.557,
        },

        {
          x: "2023",
          y: 11.242,
        },
      ],
    },
    {
      name: "Imported",
      data: [
        {
          x: "2024",
          y: 468.189,
        },

        {
          x: "2024",
          y: 395.243,
        },

        {
          x: "2024",
          y: 492.897,
        },

        {
          x: "2024",
          y: 354.28,
        },

        {
          x: "2024",
          y: 346.244,
        },

        {
          x: "2024",
          y: 228.634,
        },

        {
          x: "2024",
          y: 316.496,
        },
        {
          x: "2023",
          y: 51.146,
        },
        {
          x: "2024",
          y: 366.583,
        },
        {
          x: "2023",
          y: 207.86,
        },
        {
          x: "2024",
          y: 397.536,
        },

        {
          x: "2023",
          y: 312.413,
        },

        {
          x: "2023",
          y: 361.32,
        },

        {
          x: "2023",
          y: 450.418,
        },
      ],
    },
  ];
  return <Chart options={options} series={series} type="bar" />;
}
