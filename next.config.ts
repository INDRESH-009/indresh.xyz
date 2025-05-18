const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  pageExtensions: ['ts','tsx','md','mdx'],
};

module.exports = withMDX(nextConfig);