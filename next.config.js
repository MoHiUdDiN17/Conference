const nextConfig = {
  images: {
    // domains: ["https://api.react-finland"]
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig;