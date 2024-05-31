import utilStyles from "../utils.module.css";
import { getAllYearsForStaticProps } from "../../../lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Posts by Year",
};

export default function YearsIndex() {
  const allYears = getAllYearsForStaticProps();
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Years</h2>
      <ul className={`${utilStyles.list} ${utilStyles.yearsList}`}>
        {allYears.map((item, index) => {
          return (
            <li className={utilStyles.listItem} key={index}>
              <Link href={`/year/${item[0]}`}>{item[0]}</Link>{" "}
              <small className={utilStyles.lightText}>({item[1]})</small>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
