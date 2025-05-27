'use client'
import {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'
import Image from 'next/image';

const components = {
    Image,
}

export default function MDXContent({code}){
    //convert the bundled code viz a string to a react component
    const Component = useMemo(() => getMDXComponent(code), [code]);
    return <Component components={components}/>;
}