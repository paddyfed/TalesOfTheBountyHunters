import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { unified } from "unified";

const postsDirectory = path.join(process.cwd(), "posts");

function readPostFile(fileName, directory = postsDirectory) {
  const fullPath = path.join(directory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function getPostId(fileName) {
  return fileName.replace(/\.md$/, "");
}

function getAllPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = getPostId(fileName);
    const matterResult = readPostFile(fileName);
    return {
      id,
      ...matterResult.data,
    };
  });
}

function sortPostsByDate(posts) {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSortedPostsData() {
  const allPostsData = getAllPostsData();
  return sortPostsByDate(allPostsData).slice(0, 50);
}

export function getFilteredPostsData(year) {
  const allPostsData = getAllPostsData();
  const [yearFilter, monthFilter] = year;
  const filteredPosts = allPostsData.filter((post) => {
    const postYearMonth = post.date.substring(0, 7);
    return monthFilter
      ? postYearMonth === `${yearFilter}-${monthFilter}`
      : post.date.startsWith(yearFilter);
  });
  return sortPostsByDate(filteredPosts);
}

export function getFilteredPostsTag(tag) {
  const allPostsData = getAllPostsData();
  return sortPostsByDate(
    allPostsData.filter((post) => post.tags.includes(tag))
  );
}

function getAllYears() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => parseInt(fileName.slice(0, 4)));
}

export function getAllYearsForStaticProps() {
  const allYears = getAllYears();
  const yearCount = allYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(yearCount).sort((a, b) => b[0] - a[0]);
}

export function getMinYear() {
  return Math.min(...getAllYears());
}

export function getMaxYear() {
  return Math.max(...getAllYears());
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: getPostId(fileName),
  }));
}

export function getAllYearsForPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    year: [fileName.substring(0, 4)],
  }));
}

export async function getPostData(id, directory = postsDirectory) {
  const matterResult = readPostFile(`${id}.md`, directory);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content);

  return {
    id,
    contentHtml: processedContent.toString(),
    ...matterResult.data,
  };
}

function getUniqueTags(allPostsData) {
  const allTags = allPostsData.flatMap((post) =>
    post.tags ? post.tags.split(" - ") : []
  );
  return [...new Set(allTags)];
}

export function getAllTagsForPaths() {
  const allPostsData = getAllPostsData();
  const uniqueTags = getUniqueTags(allPostsData);
  return uniqueTags.map((tag) => ({ tag }));
}

export function getAllTags() {
  const allPostsData = getAllPostsData();
  const tagCount = allPostsData.reduce((acc, post) => {
    const tags = post.tags ? post.tags.split(" - ") : [];
    tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(tagCount).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
}
