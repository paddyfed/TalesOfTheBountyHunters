import path from "path";
import { getPostData } from "../utils/posts";
import utilStyles from "../utils.module.css";
import DisplayDate from "../components/DisplayDate";

const postsDirectory = path.join(process.cwd(), "app/(totbh)/now");

export const metadata = {
  title: "Now",
};

export default async function Now() {
  const postData = await getPostData("now", postsDirectory);

  return (
    <>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        Last Updated: <DisplayDate dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </>
  );
}
