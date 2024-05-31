import utilStyles from "../utils.module.css";
import Link from "next/link";

export default function PostNextPrevLink({ nextArticle, prevArticle, title }) {
  return (
    <div className={utilStyles.articleNavigation}>
      {prevArticle ? (
        <Link href={`/posts/${prevArticle}`}>Previous</Link>
      ) : (
        <span>Previous</span>
      )}
      {<div>{title}</div>}
      {nextArticle ? (
        <Link href={`/posts/${nextArticle}`}>Next</Link>
      ) : (
        <span>Next</span>
      )}
    </div>
  );
}
