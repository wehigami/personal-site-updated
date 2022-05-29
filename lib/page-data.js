import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDirectory = path.join(process.cwd(), 'page-data');

export function getSortedPagesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(dataDirectory);
  const allPagesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data: frontmatter, content} = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      frontmatter,
      content,
    };
  });
  // Sort posts by date
   return allPagesData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }); 
}
