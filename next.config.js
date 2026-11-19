/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",        // Next 13.3+ only; on 12.x to 13.2 omit this and keep "export": "next export" in package.json
  trailingSlash: true,     // /vi/ -> out/vi/index.html, works well on GitHub Pages
  images: {
    unoptimized: true,     // required for static export; makes `domains` unnecessary
  },
};

module.exports = nextConfig;
