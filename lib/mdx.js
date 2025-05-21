import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';

export function getAllSlugs(){
    const dir = path.join(process.cwd(),'content',section);
    return fs
        .readdirSync(dir)
        .filter((f)=>f.endsWith('.mdx'))
        .map((f)=>f.replace(/\.mdx$/,''));
}

export async function getPostBySlug(){
    const filePath = path.join(process.cwd(),'content',section,`${slug}.mdx`);
    const source = fs.readFileSync(filePath,'utf-8');
    //content is raw mdx body and data is frontmatter
    const {content,data} = matter(source);
    // bundleMDX to get React code 
    const {code} = await bundleMDX({source:content});
    return {
        code,
        frontmatter:data,
    };
}