'use client'
import {getMDXComponent} from 'mdx-bundler/client';

interface MDXRendererProps {
    code:string
}

export default function MDXRenderer({code}:MDXRendererProps){
    const Component = getMDXComponent(code);
    return <Component/>
}
