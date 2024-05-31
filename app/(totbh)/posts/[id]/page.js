import { getAllPostIds, getPostData } from "../../../../lib/posts";
import utilStyles from "../../utils.module.css";
import Link from "next/link";
import TweetPost from "../../components/TweetPost";
import RegularPost from "../../components/RegularPost";
import PostNextPrevLink from "../../components/PostNextPrevLink";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  const title = postData.title;

  return {
    title: title,
  };
}

export async function generateStaticParams() {
  const paths = await getAllPostIds();
  return paths;
}

export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  return (
    <>
      {postData.title.startsWith("Tweet") ? (
        // Tweets
        <TweetPost postData={postData} />
      ) : (
        // Blog Posts
        <RegularPost postData={postData} />
      )}

      <PostNextPrevLink
        nextArticle={postData.nextArticle}
        prevArticle={postData.prevArticle}
        title={postData.title}
      />
    </>
  );
}
