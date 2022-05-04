import GraphicAnim from "@common/GraphicAnim/GraphicAnim";
import PageWrapper from "@common/PageWrapper";
import React, { ReactElement } from "react";
import GraphicPage from "../components/common/GraphicPage/GraphicPage";
import ReactFluidScroll from "react-fluid-scroll";
import PageTitle from "@common/PageTitle";
import { colors } from "@utils/index";

const des = `I have contributed in various field. The medias are -`;

const sites = [
  "Medium",
  "Stackoverflow",
  "freecodecamp",
  "dev.to",
  "youtube",
  "quora",
  "Chrome Extensions",
  "Github",
  "Linkedn",
  "Facebook",
  "Leetcode",
];

const BlogPage = () => {
  return (
    <PageWrapper title="Blog" description={des} items={sites}>
      <>
        <PageTitle title="Blog" description={""} items={sites} />
        <div className="mt-20 flex flex-col items-start">
          <a
            href="https://medium.com/@yadabsd/javascript-map-vs-foreach-vs-filter-vs-find-32eff92ca260"
            target="_blank"
            rel="noreferrer noopender"
            className="w-3/4"
          >
            <div className="mr-auto flex justify-between p-12 shadow-lg">
              <div className="mr-12">
                <h4 className="mb-4 text-2xl font-semibold">
                  Javascript map vs forEach vs filter vs find
                </h4>
                <p className="line-clamp-3 three-line mb-4 text-sm text-accent-4">
                  Javascript has become more popular nowadays. There are a lot
                  of frameworks based on javascript that are used all over the
                  world. If anyone wants to grab that framework well then there
                  is a need to clear javascript basic concepts. One of the most
                  important parts of the javascript language is traversing
                  arrays. You need to print an array or evaluate each item in
                  the array.
                </p>
                <div className="flex flex-wrap items-center">
                  <span className="mr-4 mb-2 text-sm font-bold">Topic: </span>
                  <div className="flex">
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[0],
                        border: `1px solid ${colors[0]}`,
                      }}
                    >
                      Javascript
                    </span>
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[3],
                        border: `1px solid ${colors[3]}`,
                      }}
                    >
                      Array
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/fit/c/224/224/1*8Y_ZDPTAN9nySsagDA5ggQ.png"
                  alt=""
                  className="min-w-content block w-1/2 w-96"
                />
              </div>
            </div>
          </a>
        </div>
      </>
    </PageWrapper>
  );
};

export default BlogPage;
