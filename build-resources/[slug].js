/* script for parsing markdown file content into an html template */


import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
    const files = fs.readdirSync('page-data');
    const paths = files.map((file) => ({
        params: {
        slug: file.replace(/\.md$/, ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: {slug} }) {
    const fileName = fs.readFileSync(`page-data/${slug}.md`, 'utf-8');
    const { data: frontmatter, content} = matter(fileName);

    return {
        props: {
            frontmatter,
            content,
        },
    };
}

export default function Page({ frontmatter, content}) {
    const mdParser = new md();
    const html = mdParser.render(content);
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
    );
}