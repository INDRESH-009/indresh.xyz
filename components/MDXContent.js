'use client'
import {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

export default function MDXContent({code}){
    //convert the bundled code viz a string to a react component
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return <Component/>;
}