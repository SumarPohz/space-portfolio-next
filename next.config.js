/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/space-portfolio",
  assetPrefix: "/space-portfolio/",

  images: {
    unoptimized: true,
  },
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
