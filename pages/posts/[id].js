import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import TweetDateTime from '../../components/tweetdatetime';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

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
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title.startsWith('Tweet') ? (
        // Tweets
        <>
          <article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className={utilStyles.lightText}>
              <TweetDateTime dateString={postData.date} />
            </div>
            <hr />
            <div className={utilStyles.lightText}>
              {postData.retweets} Retweets {postData.likes} Likes</div>
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
            <div>{postData.text}</div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          </article>
        </>
      )}

    </Layout>
  );
}