import { getAllTagsForPaths, getFilteredPostsTag } from "../../../../lib/posts";
import BlogPosts from "../../components/BlogPosts";

export async function generateStaticParams() {
  const paths = getAllTagsForPaths();

  return paths;
}

export default async function Tags({ params }) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
  const tag = decodeURIComponent(params.tag);
  const filteredPostData = await getFilteredPostsTag(tag);

  return (
    <>
      <BlogPosts heading={tag} filteredPostData={filteredPostData}></BlogPosts>
    </>
  );
}
