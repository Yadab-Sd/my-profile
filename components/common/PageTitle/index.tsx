import React from "react";
import s from "./PageTitle.module.css";
import cn from "classnames";

function PageTitle({ title }: { title: string }) {
  return (
    <div className="relative">
      <h2 className={s.title}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(0, 4)}
      </h2>
      <h2 className={s.title} style={{top: -20, left: -50}}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(4)}
      </h2>
      <div className="flex justify-between items-center pt-12">
          <h2 className="text-4xl font-extrabold">Portfolio</h2>
          <p className="w-1/2 text-xs text-accent-4">
        Since beginning my journey as a freelance developer nearly 10 years ago,
        I’ve done remote work for agencies, consulted for startups, and
        collaborated with talented people to create web products for both
        business and consumer use. I create successful responsive websites that
        are fast, easy to use, and built with best practices. The main area of
        my expertise is front-end development, HTML, CSS, JS, building small and
        medium web apps, custom plugins, features, animations, and coding
        interactive layouts.
      </p></div>
    </div>
  );
}

export default PageTitle;
