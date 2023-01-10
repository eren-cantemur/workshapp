/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com", "flowbite.com", "images.unsplash.com", "workshapps3.s3.eu-central-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
