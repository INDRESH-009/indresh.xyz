import withMDX from '@next/mdx'

const nextConfig = withMDX({
    pageExtensions:['js','jsx','ts','tsx','mdx'],
});

export default nextConfig;