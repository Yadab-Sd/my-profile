/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RESUME:
      // "https://drive.google.com/file/d/1NNu4_2HjPXJeZZN51zl1wQxl-VCd5Atw/view?usp=sharing",
      // "https://drive.google.com/file/d/1jO_dMCMlSZl1CJeg_SkNUY-8Ig1HQBDm/view?usp=sharing",
      // "https://drive.google.com/file/d/1Xc4IUxCAJe_wcY5KH5a6ySrjiS_TlfXM/view?usp=sharing",
      // "https://drive.google.com/file/d/14ao_2jtRfsYRL52GOTvrphglOWDtwQq5/view?usp=sharing",
      // "https://drive.google.com/file/d/1M5_ms8iAaVNHHMGx_fXGbrYSEgSfbtI9/view?usp=sharing",
      'https://drive.google.com/file/d/1Vt-Gg5x36-sIfVgeQEh5lbqrqM4Ynwr_/view?usp=sharing',
    GITHUB: 'https://github.com/Yadab-Sd',
    LINKEDIN: 'https://www.linkedin.com/in/yadab-sutradhar/',
    STACKOVERFLOW: 'https://stackoverflow.com/users/11794577/yadab-sd',
    LEETCODE: 'https://leetcode.com/yadabsd/',
    WEBSITE: 'https://yadab.info',
    EXPERIENCE: 3,
    EMAIL: 'yadab.sutradhar@yahoo.com',
    MOBILE: '+1 (641) 233-9549',
    ADDRESS: '200 10th Ave E, Seattle, WA, USA',
  },
  images: {
    domains: ['www.wokine.com', 'qcoom.com'],
  },
  webpack(config, { isServer }) {
    // Run custom scripts
    if (isServer) {
      require('./scripts/generate-sitemap')
      require('./scripts/draco')
    }

    // Import `svg` files as React components
    config.module.rules.push({
      test: /\.svg$/,
      resourceQuery: { not: [/url/] },
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    // Import videos, models, hdrs, and fonts
    config.module.rules.push({
      test: /\.(mp4|hdr|glb|woff|woff2|ttf)$/i,
      type: 'asset/resource',
    })

    // Force url import with `?url`
    config.module.rules.push({
      resourceQuery: /url/,
      type: 'asset/resource',
    })

    // Import `.glsl` shaders
    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    })

    config.module.rules.push({
      test: /\.glsl$/,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
