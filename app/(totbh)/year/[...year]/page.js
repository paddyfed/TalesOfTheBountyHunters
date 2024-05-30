import Head from "next/head";
import Layout, { siteTitle } from "../../../../components/layout";
import utilStyles from "../../../../styles/utils.module.css";
import {
  getFilteredPostsData,
  getAllYearsForPaths,
  getMinYear,
  getMaxYear,
} from "../../../../lib/posts";
import Link from "next/link";
import BlogPosts from "../../../../components/blogposts";

export async function generateStaticParams() {
  const paths = await getAllYearsForPaths();
  // const paths = [
  //         {
  //             params: {
  //                 year: '2001'
  //             }
  //         },
  //         {
  //             params: {
  //                 year: '2002'
  //             }
  //         }
  //     ]

  return paths;
}

async function getYears(params) {
  console.log(params);
  console.log(params.year);
  const filteredPostData = await getFilteredPostsData(params.year);
  console.log(filteredPostData);
  return filteredPostData;
}

export default async function YearsFilter({ params }) {
  const filteredPostData = await getYears(params);
  const year = params.year[0];
  const month = params.year[1];
  const prevYear = +year - 1;
  const nextYear = +year + 1;
  const minYear = getMinYear();
  const maxYear = getMaxYear();

  if (year.length !== 4) {
    return {
      notFound: true,
    };
  }

  if (month && (month.length !== 2 || +month > 12 || +month < 1)) {
    return {
      notFound: true,
    };
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
