/** @type {import('next').NextConfig} */
// https://www.youtube.com/watch?v=mJuz45RXeXY helped get the github pages deployment fixed
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/BroadbentPark" : "",
  distDir: './out',
  trailingSlash: true
};

export default nextConfig;
