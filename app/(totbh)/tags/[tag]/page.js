import { getAllTagsForPaths, getFilteredPostsTag } from "../../utils/posts";
import BlogPosts from "../../components/BlogPosts";

export async function generateMetadata(props) {
  const params = await props.params;
  return {
    title: decodeURIComponent(params.tag),
  };
}

export async function generateStaticParams() {
  const paths = getAllTagsForPaths();

  return paths;
}

export default async function Tags(props) {
  const params = await props.params;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent
  const tag = decodeURIComponent(params.tag);
  const filteredPostData = await getFilteredPostsTag(tag);

  return (
    <>
      <BlogPosts heading={tag} filteredPostData={filteredPostData}></BlogPosts>
    </>
  );
}
