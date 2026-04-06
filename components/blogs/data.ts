type Platform = 'Medium' | 'Dev.to' | 'Personal Blog'

type Blog = {
  title: string
  description: string
  platform: Platform
  topics: string[]
  link: string
  image: string
}

export const blogs: Blog[] = [
  {
    title:
      'Building an ML-Powered Notification Router on AWS: A Production Architecture Guide',
    description:
      "Sending notifications at the wrong time is like knocking on someone's door at 3 AM. Even if you have something important to say, timing matters. In this article, I'll walk you through building a production-grade, ML-powered notification routing engine that predicts the optimal send time for each user based on their historical engagement patterns.",
    topics: [
      'AWS',
      'MachineLearning',
      'SageMaker',
      'MLOps',
      'ServerlessArchitecture',
      'XGBoost',
      'EventDriven',
      'InfrastructureAsCode',
      'NotificationEngineering',
    ],
    platform: 'Personal Blog',
    link: '/blogs/ml-notification-router',
    image: '/blog/ml-notification-router/notification-architecture.svg',
  },
  {
    title: 'Javascript map vs forEach vs filter vs find',
    description:
      'Javascript has become more popular nowadays. There are a lot of frameworks based on javascript that are used all over the world. If anyone wants to grab that framework well then there is a need to clear javascript basic concepts. One of the most important parts of the javascript language is traversing arrays. You need to print an array or evaluate each item in the array.',
    topics: ['JavaScript', 'Array'],
    platform: 'Medium',
    link:
      'https://medium.com/@yadabsd/javascript-map-vs-foreach-vs-filter-vs-find-32eff92ca260',
    image: 'https://miro.medium.com/fit/c/224/224/1*8Y_ZDPTAN9nySsagDA5ggQ.png',
  },
  {
    title: 'JavaScript Array and String common methods.',
    description:
      "JavaScript is an awesome language with a lot of built-in objects (Array, Date, Math, and String) and their build-in methods (split, sort, parseInt) which make a developer's life easier.",
    topics: ['JavaScript', 'Array'],
    platform: 'Dev.to',
    link:
      'https://dev.to/yadabsd/javascript-array-and-string-common-methods-1oo0',
    image: 'https://miro.medium.com/fit/c/224/224/1*8Y_ZDPTAN9nySsagDA5ggQ.png',
  },
]

export function getTagColor(platform: Platform) {
  switch (platform) {
    case 'Medium':
      return '#1A8917'
      break
    case 'Dev.to':
      return '#000'
      break
    case 'Personal Blog':
      return '#03c5f4'
      break
    default:
      return '#000000'
  }
}
