import Link from "next/link";
import utilStyles from "../utils.module.css";
import DisplayDate from "../components/DisplayDate";

export default function BlogPosts({ heading, filteredPostData }) {
  return (
    <>
      {heading && (
        <section className={utilStyles.headingMd}>
          <h1>{heading}</h1>
        </section>
      )}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {filteredPostData.length > 0 ? (
          // If filterdPostsData. length is greater than 0 then display them
          <ul className={utilStyles.list}>
            {filteredPostData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DisplayDate dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        ) : (
          // Otherwise just show a notice that there are No Results
          <div className={utilStyles.listItem}>No Results</div>
        )}
      </section>
    </>
  );
}
