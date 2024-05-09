import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import BlogPosts from "../components/blogposts";
import { useState, useEffect } from "react";
import UselessFacts from "../components/uselessfacts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <UselessFacts />
      <section className={utilStyles.headingMd}>
        <p>
          An effort to bring all my different blog posts together in one place.
          Also includes some Tweets I've written over the years.
        </p>
        <p>
          It was created with the help of the{" "}
          <a
            href="https://nextjs.org/learn/basics/create-nextjs-app"
            target="_blank"
          >
            Next.js tutorial
          </a>
          .
        </p>
      </section>
      <BlogPosts filteredPostData={allPostsData}></BlogPosts>
    </Layout>
  );
}
