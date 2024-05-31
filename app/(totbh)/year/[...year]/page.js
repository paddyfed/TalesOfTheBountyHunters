import utilStyles from "../../utils.module.css";
import {
  getFilteredPostsData,
  getAllYearsForPaths,
  getMinYear,
  getMaxYear,
} from "../../../../lib/posts";
import Link from "next/link";
import BlogPosts from "../../components/BlogPosts";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  return {
    title: params.year[0],
  };
}

export async function generateStaticParams() {
  const paths = await getAllYearsForPaths();
  return paths;
}

export default async function YearsFilter({ params }) {
  const filteredPostData = await getFilteredPostsData(params.year);
  const year = params.year[0];
  const month = params.year[1];
  const prevYear = +year - 1;
  const nextYear = +year + 1;
  const minYear = getMinYear();
  const maxYear = getMaxYear();

  if (year.length !== 4) {
    notFound();
  }

  if (month && (month.length !== 2 || +month > 12 || +month < 1)) {
    notFound();
  }
  return (
    <>
      <BlogPosts heading={year} filteredPostData={filteredPostData}></BlogPosts>

      <div className={utilStyles.articleNavigation}>
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus */}
        {+prevYear >= minYear ? (
          <Link href={`/year/${prevYear}`}>{`${prevYear}`}</Link>
        ) : (
          <span>{`${prevYear}`}</span>
        )}
        {<span>{year}</span>}
        {+nextYear <= maxYear ? (
          <Link href={`/year/${nextYear}`}>{`${nextYear}`}</Link>
        ) : (
          <span>{`${nextYear}`}</span>
        )}
      </div>
    </>
  );
}
