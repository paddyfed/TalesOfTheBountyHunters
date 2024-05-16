"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

export default function TotalGeneratedExportedPerDayChart({
  month,
  year,
  exported,
  generated,
}) {
  const chartRef = useRef(null);
  const [exportedData, setExportedData] = useState([]);
  const [generatedData, setGeneratedData] = useState([]);

  useEffect(() => {
    setExportedData(exported);
    setGeneratedData(generated);
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: getDates(parseInt(month), parseInt(year)),
          datasets: [
            {
              data: generatedData,
              label: "Generated (kWh)",
            },
            {
              data: exportedData,
              label: "Exported (kWh)",
            },
          ],
        },
        options: {
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
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [exportedData]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
}

const getDates = (month, year) =>
  Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) =>
    new Date(year, month - 1, i + 1).toLocaleDateString(undefined, {
      dateStyle: "medium",
    })
  );

{
  /* <section>
            <table>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Generated</td>
                  <td>Exported</td>
                  <td>01/04/2024</td>
                  <td>02/04/2024</td>
                  <td>03/04/2024</td>
                  <td>04/04/2024</td>
                  <td>05/04/2024</td>
                  <td>06/04/2024</td>
                  <td>07/04/2024</td>
                  <td>08/04/2024</td>
                  <td>09/04/2024</td>
                  <td>10/04/2024</td>
                  <td>11/04/2024</td>
                  <td>12/04/2024</td>
                  <td>13/04/2024</td>
                  <td>14/04/2024</td>
                  <td>15/04/2024</td>
                  <td>16/04/2024</td>
                  <td>17/04/2024</td>
                  <td>18/04/2024</td>
                  <td>19/04/2024</td>
                  <td>20/04/2024</td>
                  <td>21/04/2024</td>
                  <td>22/04/2024</td>
                  <td>23/04/2024</td>
                  <td>24/04/2024</td>
                  <td>25/04/2024</td>
                  <td>26/04/2024</td>
                  <td>27/04/2024</td>
                  <td>28/04/2024</td>
                  <td>29/04/2024</td>
                  <td>30/04/2024</td>
                </tr>
              </thead>
              <tbody>
                { {postData.generated.map((item) => {
                  return (
                    <tr>
                      <td>{item}</td>
                    </tr>
                  );
                })}

                {postData.exported.map((item) => {
                  return (
                    <tr>
                      <td>{item}</td>
                    </tr>
                  );
                })} }
              </tbody>
            </table>
          </section> */
}
