import utilStyles from "./utils.module.css";
import { getSortedPostsData } from "./utils/posts";
import BlogPosts from "./components/BlogPosts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>
          An effort to bring all my different blog posts together in one place.
          Also includes some Tweets I've written over the years.
        </p>
        <p>
          It was created with the help of the{" "}
          <Link
            href="https://nextjs.org/learn/basics/create-nextjs-app"
            target="_blank"
          >
            Next.js tutorial
          </Link>
          .
        </p>
      </section>
      <BlogPosts filteredPostData={allPostsData}></BlogPosts>
    </>
  );
}
