import GraphicAnim from "@common/GraphicAnim/GraphicAnim";
import PageWrapper from "@common/PageWrapper";
import React, { ReactElement } from "react";
import GraphicPage from "../components/common/GraphicPage/GraphicPage";
import ReactFluidScroll from "react-fluid-scroll";

const des = `Have a sweet conversation - `;

const contacts = ["+880 1733 267990", "yadab.sd2013@gmail.com"];

const ContactPage = () => {
  return (
    <PageWrapper title="Contact" description={des} items={contacts}>
      <div className="mt-20"></div>
    </PageWrapper>
  );
};

export default ContactPage;
