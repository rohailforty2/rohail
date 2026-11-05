// next/link and next/router add basePath automatically, but plain <a>, <img> and
// <link> tags do not, so files from public/ must be routed through this helper.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const assetPath = (path) => `${basePath}/${path.replace(/^\/+/, '')}`;
