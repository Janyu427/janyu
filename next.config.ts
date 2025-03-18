import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "janyu427.github.io",
            port: "",
            pathname: "/website/*",
          }
        ]
    }
};

export default nextConfig;