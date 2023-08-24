/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/subfolder",
  // env:{
  //     API_KEY:'XYZ-123-ABC'
  // }
  distDir: "build",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx"],
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{key: "X-Content-Type", value: "nosniff"}],
      },
    ];
  },
  httpAgentOptions: {
    keepAlive: true,
    timeout: 60000,
  },
  //   compress: false,
  //   productionBrowserSourceMaps: true,
  //   trailingSlash: true,
  // image config
  images: {
    domains: ["cdn.thewirecutter.com"],
  },
};

module.exports = nextConfig;
