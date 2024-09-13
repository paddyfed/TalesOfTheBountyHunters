import Link from "next/link";
import EnergyByYearChart from "../components/EnergyByYearChart";

export const metadata = {
  title: "Energy by Year",
};

export default function SolarCompare() {
  return (
    <>
      <h1>Energy by Year</h1>
      <p>
        This chart shows the energy used by our house over the past year. Energy
        from the solar panels was either consumed by the house or exported to
        the grid. At other times energy was imported from the grid. I'm using it
        to compare these totals year on year as it's nice to have a graphical
        view of these things. This chart is using{" "}
        <a href="https://apexcharts.com/">ApexCharts</a> instead of{" "}
        <a href="https://www.chartjs.org/docs/latest/">Chart.js</a> because it
        was easier to get the groupings by month working.{" "}
      </p>
      <EnergyByYearChart />
      <p>
        Updating this is still a manual effort so I will be updating each time I
        make a new <Link href="/tags/Solar%20Update">Solar Update</Link> post.
        The end goal would be to have this information loaded from an API but
        for now this will do.
      </p>
      <p>Paddy</p>
    </>
  );
}
