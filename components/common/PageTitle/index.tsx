import React from "react";
import s from "./PageTitle.module.css";
import cn from "classnames";
import { colors, colors2 } from "@utils/index";

function PageTitle({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="relative">
      <h2 className={s.title}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(0, 4)}
      </h2>
      <h2 className={s.title} style={{ top: -20, left: -50 }}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(4)}
      </h2>
      <div className="flex items-center justify-between pt-12">
        <h2 className="text-4xl font-extrabold">{title}</h2>
        <div className="w-1/2">
          <p className="text-xs text-accent-4 mb-4">{description}</p>
          <div className="w-full flex flex-wrap">
            {items?.map((item, i) => (
              <small
                className="mb-2 mr-2 px-2 py-1 text-xs font-bold rounded block"
                style={{
                  color:
                    colors2.concat(colors)[
                      i % (colors2.length + colors.length - 1)
                    ],
                  border: "1px solid",
                  borderColor:
                    colors2.concat(colors)[
                      i % (colors2.length + colors.length - 1)
                    ],
                }}
              >
                {item}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
