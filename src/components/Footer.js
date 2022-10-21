import React from "react";
import { footerData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const staggerContainer = {
  hidder: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
const Footer = () => {
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className="section bg-dark">
      <div className="container mx-auto">
        <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div className="flex-1 flex flex-col gap-y-6">
            <div className="font-primary text-xl uppercase tracking-[0.08em]">
              {about.title}
            </div>
            <div className="leading-relaxed text-[#dbdbdb]">
              {about.subtitle}
            </div>
          </div>
          <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
            <div className="flex items-center gap-x-[10px]">
              <div>{about.address.icon}</div>
              <div>{about.address.name}</div>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <div>{about.phone.icon}</div>
              <div>{about.phone.number}</div>
            </div>

            <div className="flex items-center gap-x-[10px]">
              <div>{about.email.icon}</div>
              <div>{about.email.address}</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center ">
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                {links.title}
              </div>
              <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className="hover:text-white transition">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div>{program.title}</div>
            <ul>
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
          <div className="flex-1">newsletter</div>
          <div className="flex-1">Login</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
