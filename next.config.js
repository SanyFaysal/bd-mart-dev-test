/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "i.ibb.co"],
  },
};
// module.exports = {
//   images: {
//       domains: ['images.unsplash.com'],
//   },
// }
module.exports = nextConfig;
