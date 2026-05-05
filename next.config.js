/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.0.*"],
};

module.exports = nextConfig;
