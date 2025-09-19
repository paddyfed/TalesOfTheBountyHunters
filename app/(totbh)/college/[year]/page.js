import path from "path";
import { getAllPostIds, getPostData } from "../../utils/posts";
import TweetPost from "../../components/TweetPost";
import RegularPost from "../../components/RegularPost";
import Link from "next/link";
import { allCollegeYears } from "../page";

const postsDirectory = path.join(process.cwd(), "app/(totbh)/college");

export async function generateMetadata(props) {
  const params = await props.params;
  const postData = await getPostData(params.year, postsDirectory);
  const title = postData.title;

  return {
    title: title,
  };
}

export async function generateStaticParams() {
  return allCollegeYears.map((item) => ({
    years: item.slug,
  }));
  // const paths = await getAllPostIds();
  // return paths;
}

export default async function Post(props) {
  const params = await props.params;
  const postData = await getPostData(params.year, postsDirectory);
  return (
    <>
      {postData.title.startsWith("Tweet") ? (
        // Tweets
        <TweetPost postData={postData} />
      ) : (
        // Blog Posts
        <RegularPost postData={postData} />
      )}
      <Link href="/college">Back to College</Link>
    </>
  );
}
