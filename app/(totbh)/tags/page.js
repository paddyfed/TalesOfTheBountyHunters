import utilStyles from "../../../styles/utils.module.css";
import Link from "next/link";
import { getAllTags } from "../../../lib/posts";

export default function Tags() {
  const allTagsData = getAllTags();
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Tags</h2>
      <ul className={`${utilStyles.list} ${utilStyles.tagsList}`}>
        {allTagsData.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/tags/${item[0]}`}>{item[0]}</Link>{" "}
              <small className={utilStyles.lightText}>({item[1]})</small>
            </li>
          );
        })}
      </ul>
    </section>
  );
}