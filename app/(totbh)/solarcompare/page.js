"use client";
import Chart from "react-apexcharts";

export default function SolarCompare() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
  return (
    <>
      <h1>Hello</h1>
      <Chart options={options} series={series} type="bar" />
    </>
  );
}
