import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date, slice(0,50) will only return the latest 50 posts
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }).slice(0, 50);
}

export function getFilteredPostsData(year) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // filter  posts by year  
  return allPostsData.filter(val => val.date.startsWith(year));
}

export function getFilteredPostsTag(tag) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);


    //if(matterResult.data.tags)
    //console.log(id, matterResult.data.tags)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // console.log(allPostsData)

  // Sort posts by date
  allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // filter  posts by year  
  return allPostsData.filter(val => val.tags.includes(tag));
}

function getAllYears() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allYears = fileNames.map((fileName) => {
    return parseInt(fileName.slice(0, 4));
  });

  return allYears;
}

export function getMinYear() {
  const allYears = getAllYears()

  return Math.min(...allYears)
}

export function getMaxYear() {
  const allYears = getAllYears()

  return Math.max(...allYears)
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllYearsForPaths() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //         {
  //             params: {
  //                 year: '2001'
  //             }
  //         },
  //         {
  //             params: {
  //                 year: '2002'
  //             }
  //         }
  //     ]
  return fileNames.map((fileName) => {
    return {
      params: {
        year: fileName.substring(0, 4),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllTagsForPaths() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const matterData = matterResult.data;

    return {
      id,
      ...matterData,
    };
  });

  //console.log(allPostsData);

  return ([
    {
      params: {
        tag: 'Blog'
      }
    },
    {
      params: {
        tag: 'Sydney'
      }
    }
  ]);
}

export function getAllTags() {
  // get list of filenames under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // get unique id for key using filename with .md removed
    const id = fileName.replace(/\.md$/,'');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });


  // iterate through each dataset
  const allTags = allPostsData.map((tags) => {
    const key = tags.tags.split(' - ');

    return key;
  });

  const uniqueTags = [...new Set(allTags.flat())]

    // extract the tags from the file and add to an array

  // remove any duplicates

  // return the array to the component

  return uniqueTags.sort();
}
