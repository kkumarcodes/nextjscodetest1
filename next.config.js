/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_DB_URL: process.env.REACT_APP_DB_URL,
  }
}

module.exports = nextConfig
