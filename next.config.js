/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/space-portfolio" : "",
  assetPrefix: isProd ? "/space-portfolio/" : "",
};

module.exports = nextConfig;

















// /** @type {import('next').NextConfig} */
// const repoName = "sumarpohz.github.io"; // 👈 CHANGE if repo name is different

// const nextConfig = {
//   output: "export",

//   basePath: `/${repoName}`,
//   assetPrefix: `/${repoName}/`,

//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;
