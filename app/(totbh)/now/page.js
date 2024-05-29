import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import utilStyles from "../../../styles/utils.module.css";
import Date from "../../../components/date";

const postsDirectory = path.join(process.cwd(), "app/(totbh)/now");

export default async function Now() {
  const postData = await getPostData("now");

  return (
    <>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        Last Updated: <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
    </>
  );
}

async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  // Combine the data with the id
  return { contentHtml, ...matterResult.data };
}
