// @ts-check

/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        useTypeScriptCli: true,
    },
    reactCompiler: true,
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
        root: path.join(import.meta.dirname, '..'),
    },
};

module.exports = nextConfig;