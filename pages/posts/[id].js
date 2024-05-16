import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import TweetDateTime from "../../components/tweetdatetime";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import BlogTags from "../../components/blogtags";
import UselessFacts from "../../components/uselessfacts";
import TotalGeneratedExportedPerDayChart from "../../components/TotalGeneratedExportedPerDayChart";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const chartData = {};
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <UselessFacts />
      {postData.title.startsWith("Tweet") ? (
        // Tweets
        <>
          <article>
            <BlogTags tagList={postData.tags} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className={utilStyles.lightText}>
              <TweetDateTime dateString={postData.date} />
            </div>
            <hr />
            <div className={utilStyles.lightText}>
              {postData.retweets} Retweets {postData.likes} Likes
            </div>
            <hr />
          </article>
        </>
      ) : (
        // Blog Posts
        <>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <BlogTags tagList={postData.tags} />
            {postData.generated ? (
              <TotalGeneratedExportedPerDayChart
                month={postData.month}
                year={postData.year}
                generated={postData.generated}
                exported={postData.exported}
              />
            ) : null}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </>
      )}

      <div className={utilStyles.articleNavigation}>
        {postData.prevArticle ? (
          <Link href={`/posts/${postData.prevArticle}`}>Previous</Link>
        ) : (
          <span>Previous</span>
        )}
        {<div>{postData.title}</div>}
        {postData.nextArticle ? (
          <Link href={`/posts/${postData.nextArticle}`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </div>
    </Layout>
  );
}
