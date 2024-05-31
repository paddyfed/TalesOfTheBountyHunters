import BlogTags from "./BlogTags";
import TweetDateTime from "./TweetDateTime";
import utilStyles from "../utils.module.css";

export default function TweetPost({ postData }) {
  return (
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
  );
}
