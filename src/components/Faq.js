import React from "react";
import { faq } from "../data";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Faq = () => {
  const { icon, title, accordions } = faq;
  return (
    <section
      id="faq"
      className="section pl-[16px] lg:pt-[16px] mb-[80px] lg:mb-50px"
    >
      <div className="max-w-[768px] mx-auto lg:bg-faq  bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6">
      <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0"
          
        >
          <img className="lg:hidden" src={icon} alt="" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title} <span className="text-primary-200"></span>
          </h2>
        </motion.div>
        
        <div
            // variants={fadeIn("left")}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col gap-y-4 px-4"

        >
          {accordions.map((accordion, idx) => {
            return <Accordion accordion={accordion} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
