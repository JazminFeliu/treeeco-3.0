import React from "react";
import { navData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Socials from "./Socials";

const NavMobile = () => {
  const { items, btnIcon } = navData;
  return (
    <nav
      id="navMobile"
      className="w-full h-full flex flex-col
      justify-evenly overflow-hidden "
    >
      <ul
        className="flex flex-col justify-center 
      items-center gap-y-6 py-6 mb-8"
      >
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-2xl font-primary uppercase" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <motion.div
        variants={fadeIn("down")}
        className="-mt-44 flex justify-center gap-x-8"
      >
        <button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
          Log In <div className="text-xl">{btnIcon}</div>
        </button>
        <button className=" btn btn-sm btn-dark">
          Sign Up <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
