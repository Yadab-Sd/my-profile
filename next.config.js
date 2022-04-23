/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESUME:
      "https://drive.google.com/file/d/1NNu4_2HjPXJeZZN51zl1wQxl-VCd5Atw/view?usp=sharing",
    GITHUB: "https://github.com/Yadab-Sd",
    LINKEDIN: "https://www.linkedin.com/in/yadab-sutradhar-1545a3134/",
    STACKOVERFLOW: "https://stackoverflow.com/users/11794577/yadab-sd",
    LEETCODE: "https://leetcode.com/yadabsd/",
  },
  images: {
    domains: ["www.wokine.com"]
  }
};

module.exports = nextConfig;
