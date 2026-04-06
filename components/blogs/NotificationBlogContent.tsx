// This is hardcoded only for Notification Blog/Post - Not dynamic based on path (will improve later)
const NotificationBlogContent = () => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* Table of Contents */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-gray-600 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <svg
            className="w-6 h-6 mr-3 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          Table of Contents
        </h2>
        <ol className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#introduction"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Introduction
            </a>
          </li>
          <li>
            <a
              href="#the-problem"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              The Problem: Notification Fatigue
            </a>
          </li>
          <li>
            <a
              href="#solution-architecture"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Solution Architecture
            </a>
          </li>
          <li>
            <a
              href="#core-components"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Core Components Deep Dive
            </a>
          </li>
          <li>
            <a
              href="#ml-pipeline"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ML Pipeline: From Raw Events to Predictions
            </a>
          </li>
          <li>
            <a
              href="#implementation"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Implementation Details
            </a>
          </li>
          <li>
            <a
              href="#lessons-learned"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Critical Lessons Learned
            </a>
          </li>
          <li>
            <a
              href="#performance"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Performance & Cost Analysis
            </a>
          </li>
          <li>
            <a
              href="#whats-next"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              What's Next
            </a>
          </li>
          <li>
            <a
              href="#conclusion"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Conclusion
            </a>
          </li>
        </ol>
      </div>

      {/* Introduction */}
      <section id="introduction" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Introduction
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Sending notifications at the wrong time is like knocking on someone's
          door at 3 AM. Even if you have something important to say, timing
          matters. In this article, I'll walk you through building a
          production-grade, ML-powered notification routing engine that predicts
          the optimal send time for each user based on their historical
          engagement patterns.
        </p>

        <div className="bg-blue-50 dark:bg-gray-800 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            What we'll build:
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Real-time ML inference system using Amazon SageMaker
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Event-driven architecture processing millions of events
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Automated ML training pipeline with feedback loops
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Infrastructure as Code using AWS CDK
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1 text-blue-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Cost-optimized serverless design (~$350/month for 1M+ events/day)
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>AWS Lambda (Java 21)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Amazon SageMaker</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>AWS Glue (PySpark)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Amazon Kinesis</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              <span>DynamoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>EventBridge Scheduler</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>AWS CDK (TypeScript)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>XGBoost</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6 mb-6">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                GitHub Repository
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Full source code available at:{' '}
                <a
                  href="https://github.com/Yadab-Sd/smart-notification-routing-engine"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-mono text-sm"
                >
                  github.com/Yadab-Sd/smart-notification-routing-engine
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section id="the-problem" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          The Problem: Notification Fatigue
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          The Business Challenge
        </h3>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Modern applications send billions of notifications daily. Email, SMS,
          push notifications, WhatsApp messages—the channels are endless. But
          here's the problem:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
              50-70%
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              of notifications go unread when sent at non-optimal times
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              30%
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              increase in user churn due to notification fatigue
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              5-10x
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              variance in engagement rates depending on send time
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Traditional Approaches (and Why They Fail)
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="text-2xl mr-3">❌</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                "Send at 9 AM local time"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ignores individual user behavior patterns and preferences
              </p>
            </div>
          </div>
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="text-2xl mr-3">❌</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                "Send when user was last active"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Past behavior doesn't predict future engagement
              </p>
            </div>
          </div>
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <span className="text-2xl mr-3">❌</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                "Batch and send at fixed intervals"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Misses optimal windows entirely
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          The Technical Challenge
        </h3>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Building a smart notification router requires solving several
          problems:
        </p>

        <ol className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
              1
            </span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Real-time prediction:
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {' '}
                Decision latency must be &lt;500ms
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
              2
            </span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Personalization:
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {' '}
                Each user has unique engagement patterns
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
              3
            </span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Scale:
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {' '}
                Handle millions of events per day
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
              4
            </span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Feedback loops:
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {' '}
                Model must improve with delivery outcomes
              </span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
              5
            </span>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Cost optimization:
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {' '}
                Keep AWS costs under $500/month for 1M+ events
              </span>
            </div>
          </li>
        </ol>
      </section>

      {/* Solution Architecture */}
      <section id="solution-architecture" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Solution Architecture
        </h2>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          High-Level Design
        </h3>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The system consists of three main flows:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
            <div className="text-3xl mb-3">📥</div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              Event Ingestion Flow
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              (real-time)
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              Decision & Scheduling Flow
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              (real-time)
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
              ML Training Pipeline
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              (batch, daily)
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-8 border border-gray-200 dark:border-gray-700">
          <img
            src="/blog/ml-notification-router/notification-architecture.svg"
            alt="Complete Architecture Diagram"
            className="rounded-lg w-full"
          />
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
            Complete System Architecture
          </p>
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Architecture Principles
        </h3>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-600 shadow-md">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Event-Driven & Decoupled
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Amazon Kinesis for event streaming
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Services communicate via events, not direct calls
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Enables independent scaling and deployment
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-purple-600 shadow-md">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Serverless-First
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-purple-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Lambda for compute (auto-scaling, pay-per-use)
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-purple-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                DynamoDB for state (millisecond latency)
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-purple-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                No servers to manage
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-green-600 shadow-md">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              ML Feedback Loop
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Delivery outcomes feed back into training
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Model retrains daily on fresh data
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-green-600 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Continuous improvement without manual intervention
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section id="core-components" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Core Components Deep Dive
        </h2>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            1. Event Ingestion: Control Plane Lambda
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Purpose:</strong> Ingest user events (page views, clicks,
            notifications sent) and stream to Kinesis.
          </p>

          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-sm text-gray-100">
              <code>{`// services/control-plane/src/main/java/Handler.java
public class Handler implements RequestHandler<APIGatewayV2HTTPEvent,
                                               APIGatewayV2HTTPResponse> {
    private final KinesisClient kinesis;

    @Override
    public APIGatewayV2HTTPResponse handleRequest(...) {
        ObjectMapper json = new ObjectMapper();
        UserEvent userEvent = json.readValue(
            event.getBody(), UserEvent.class
        );

        // Validate and stream to Kinesis
        PutRecordRequest putReq = PutRecordRequest.builder()
            .streamName(streamName)
            .partitionKey(userEvent.getUserId())
            .body(SdkBytes.fromUtf8String(
                json.writeValueAsString(userEvent)
            ))
            .build();

        kinesis.putRecord(putReq);
        return buildResponse(200, "{\\"status\\":\\"accepted\\"}");
    }
}`}</code>
            </pre>
          </div>

          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
            Key Design Decisions:
          </h4>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <div>
                <strong>Java 21 with SnapStart:</strong> Cold starts reduced
                from ~2s to ~200ms
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <div>
                <strong>Partition by userId:</strong> Ensures ordered processing
                per user
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <div>
                <strong>Async processing:</strong> API responds immediately
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ML Pipeline */}
      <section id="ml-pipeline" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          ML Pipeline: From Raw Events to Predictions
        </h2>

        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-red-900/30 rounded-xl p-6 mb-8 border-2 border-purple-300 dark:border-purple-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Pipeline Architecture
          </h3>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg p-4 font-mono text-sm">
            <div className="flex flex-wrap items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded">
                S3 Raw Events
              </span>
              <span>→</span>
              <span className="bg-purple-200 dark:bg-purple-800 px-3 py-1 rounded">
                Glue ETL
              </span>
              <span>→</span>
              <span className="bg-green-200 dark:bg-green-800 px-3 py-1 rounded">
                S3 Curated Features
              </span>
              <span>→</span>
              <span className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded">
                SageMaker Training
              </span>
              <span>→</span>
              <span className="bg-blue-200 dark:bg-blue-800 px-3 py-1 rounded">
                SageMaker Endpoint
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          The ML pipeline transforms raw JSONL events into predictions through
          automated feature engineering, XGBoost training, and real-time
          inference endpoints.
        </p>
      </section>

      {/* Lessons Learned */}
      <section id="lessons-learned" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Critical Lessons Learned: 5 Bugs You Must Avoid
        </h2>

        {/* Work in Progress Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-xl p-6 mb-8">
          <div className="flex items-start">
            <span className="text-3xl mr-4">✍️</span>
            <div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-400 mb-2">
                📝 Content Under Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                This section is actively being written and refined. I'm documenting the critical production bugs we encountered and the lessons learned from building this system at scale.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                🚀 Check back soon for the complete breakdown of all 5 bugs with detailed explanations, code examples, and prevention strategies!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Bug 1 */}
          <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <span className="text-4xl mr-4">🐛</span>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
                  Bug #1: Feature Mismatch Between Training and Inference
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Training used features{' '}
                  <code className="bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded text-sm">
                    [sends_count_hour, click_rate_7d]
                  </code>{' '}
                  but inference sent{' '}
                  <code className="bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded text-sm">
                    [hour, dow, days_since_last_seen]
                  </code>
                </p>
              </div>
            </div>

            <div className="bg-red-100 dark:bg-red-900/40 rounded-lg p-4 mb-4">
              <p className="text-red-800 dark:text-red-300 font-semibold mb-2">
                📉 The Result:
              </p>
              <p className="text-red-700 dark:text-red-400">
                AUC score plummeted from 0.82 (validation) to 0.51 (production)
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-green-700 dark:text-green-400 font-semibold">
                💡 Lesson: Always version your feature schemas and validate at
                deployment time.
              </p>
            </div>
          </div>

          {/* Bug 2-5 abbreviated */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-xl p-6">
            <div className="flex items-start">
              <span className="text-4xl mr-4">🐛</span>
              <div>
                <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-2">
                  Bug #2: Format Mismatch (CSV vs Parquet)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Glue output CSV but training expected Parquet
                </p>
                <p className="text-orange-700 dark:text-orange-400 font-semibold mt-3">
                  💡 Lesson: Use SageMaker built-in algorithms—they handle CSV
                  natively.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-start">
              <span className="text-4xl mr-4">🐛</span>
              <div>
                <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                  Bug #3: Wrong Event Types in ETL
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Filtered for PLAY_MOVIE instead of NOTIFICATION_SENT
                </p>
                <p className="text-yellow-700 dark:text-yellow-400 font-semibold mt-3">
                  💡 Lesson: Validate data pipelines with unit tests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Performance & Cost Analysis
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Performance Metrics
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">
                  Decision API p50
                </span>
                <span className="font-bold text-green-600">180ms</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-700 dark:text-gray-300">
                  SageMaker Inference
                </span>
                <span className="font-bold text-green-600">45ms</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 dark:text-gray-300">
                  Event Throughput
                </span>
                <span className="font-bold text-green-600">5,000/s</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-green-200 dark:border-green-800 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Monthly Cost
            </h3>
            <div className="flex justify-between items-center py-2 border-t-2 border-green-300 dark:border-green-700 mt-2">
              <span className="text-gray-900 dark:text-white font-bold text-lg">
                Total
              </span>
              <span className="font-bold text-2xl text-green-600">(Estimating...)</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              for 1M events/day
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Conclusion
        </h2>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
          <p className="text-xl leading-relaxed">
            Building a production ML system is{' '}
            <strong>10% modeling and 90% engineering</strong>. The hard parts
            are building reliable pipelines, ensuring feature consistency, and
            creating feedback loops.
          </p>
        </div>

        <div className="space-y-3">
          {[
            'Use event-driven architecture for scale',
            'Validate features match between training/inference',
            'Prefer SageMaker built-in algorithms',
            'Infrastructure as Code makes deployments reproducible',
            'Always have a feedback loop',
          ].map((takeaway, idx) => (
            <div
              key={idx}
              className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500"
            >
              <svg
                className="w-6 h-6 mr-3 mt-0.5 text-green-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 dark:text-gray-200">
                {takeaway}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 pt-8 border-t border-gray-200 dark:border-gray-700">
        {[
          'AWS',
          'MachineLearning',
          'SageMaker',
          'Serverless',
          'MLOps',
          'XGBoost',
        ].map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-md"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NotificationBlogContent
