import GraphicAnim from "@common/GraphicAnim/GraphicAnim";
import PageWrapper from "@common/PageWrapper";
import React, { ReactElement } from "react";
import GraphicPage from "../components/common/GraphicPage/GraphicPage";
import ReactFluidScroll from "react-fluid-scroll";
import PageTitle from "@common/PageTitle";

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
        <div className="mt-20"></div>
      </>
    </PageWrapper>
  );
};

export default BlogPage;
