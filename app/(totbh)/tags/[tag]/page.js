import { getAllTagsForPaths, getFilteredPostsTag } from "../../../../lib/posts";
import BlogPosts from "../../components/BlogPosts";

export async function generateStaticParams() {
  const paths = getAllTagsForPaths();

  return paths;
}

export default async function Tags({ params }) {
  const tag = params.tag;
  console.log(tag);
  const filteredPostData = await getFilteredPostsTag(tag);
  //   console.log(params);
  //   console.log(filteredPostData);
  return (
    <>
      <BlogPosts heading={tag} filteredPostData={filteredPostData}></BlogPosts>
    </>
  );
}
