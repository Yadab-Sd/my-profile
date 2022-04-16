/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESUME:
      "https://drive.google.com/file/d/1NNu4_2HjPXJeZZN51zl1wQxl-VCd5Atw/view?usp=sharing",
    GITHUB: "https://github.com/Yadab-Sd",
    LINKEDIN: "https://www.linkedin.com/in/yadab-sutradhar-1545a3134/",
  },
  images: {
    domains: ["www.wokine.com"]
  }
};

module.exports = nextConfig;
