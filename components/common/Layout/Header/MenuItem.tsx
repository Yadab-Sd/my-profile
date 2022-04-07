import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
export const menus = [
  {
    name: "Portfolio",
    link: "./portfolio",
  },
  {
    name: "Blogs",
    link: "./blogs",
  },
  {
    name: "About",
    link: "./about",
  },
  {
    name: "Contact",
    link: "./contact",
  },
];

export const MenuItem = ({ i }: { i: any }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center">
        <div className="icon-placeholder mr-2" style={style} />
        <Link href={`${menus[i]?.link}`}>
          <a className="font-bold text-white">{menus[i]?.name}</a>
        </Link>
      </div>
    </motion.li>
  );
};
