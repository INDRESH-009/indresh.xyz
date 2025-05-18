//this is the mdx file loader utility 
import fs from 'fs';
import path from 'path'
import { bundleMDX } from 'mdx-bundler';

// return all slugs (file names without .mdx extension) in the content/section folders 
export function getAllSlugs(section:string): string[]{
    const dir = path.join(process.cwd(),'content',section);
    return fs
        .readdirSync(dir)
        .filter((f)=> f.endsWith('.mdx'))
        .map((f)=> f.replace(/\.mdx$/,''))
}
//load and compile a single mdx file by section and slug
export async function getPostBySlug(section:string,slug:string){
    const filepath = path.join(process.cwd(),'content',section,`${slug}.mdx`);
    const source = fs.readFileSync(filepath,'utf-8');
    const {code,frontmatter} = await bundleMDX({source})
    return {code,frontmatter}
}
