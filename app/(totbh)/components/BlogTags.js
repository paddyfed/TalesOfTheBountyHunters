import Link from "next/link";
import utilStyles from "../utils.module.css";

export default function BlogTags({ tagList }) {
  if (!tagList) return;

  const splitTags = tagList.split(" - ");
  let tagLinks = [];

  for (const tag of splitTags) {
    tagLinks.push(
      <Link href={`/tags/${tag}`} key={tag}>
        {tag}
      </Link>
    );
  }

  return <p className={utilStyles.blogTagsList}>{tagLinks}</p>;
}
