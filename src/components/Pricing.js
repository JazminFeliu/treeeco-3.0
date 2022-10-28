import React from 'react';
import { pricing } from '../data';
import PlanList from './PlanList';
import { motion }  from "framer-motion";
import { fadeIn } from "../variants";

const Pricing = () => {
 
  const { icon, title, plans } = pricing;
  return (
    <section className='section' id='pricing'>
           <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'

      >
        <img src={icon} alt='' />
        <h2 className='h2 section-title'>
          {title} <span className='text-primary-200'></span>
        </h2>
      </motion.div>
      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;