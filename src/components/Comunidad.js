import React from "react";
import siar from "../img/comunidad/SIAR1.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import mundial from "../img/comunidad/mundialDePromos.png";
const Comunidad = () => {
  return (
    <section
    id="comunidad"
    className=" bg-[#f9f9f9] section relative mt-[50px] lg:mt-0"
  >
    <div className="container mx-auto">
      <motion.h2
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="h2 max-w-[370px] lg:mb-20"
      >
       Comunidad #TreeecoPower🌱🌱🌱      
      </motion.h2>
      </div>

     
      <motion.div
        variants={fadeIn("up")}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
       <div className="md:flex  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden 
    md:max-w-2xl">
        <div className="md:shrink-0">
         
          <img src={siar} alt="" className="h-48 w-full object-cover md:h-full md:w-48"></img>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg leading-tight text-indigo-500 font-semibold">Instagram </div>
          <a href="https://www.instagram.com/reel/CmPQXf-J_fp/?utm_source=ig_web_copy_link" className="block mt-l text-lg leading-tight font-medium text-black hover:underline">Diciembre de festejo! 🇦🇷⚽🏆 &#128525;
          <p>Arrancamos las ofertas de diciembre para terminar el año! A festejar Argentina que somos campeones del mundo! 🇦🇷</p>
          <br />
          </a>
        </div>        
      </div>
      <div>
      <br />
      </div>
      </motion.div>

           
      <motion.div
        variants={fadeIn("up")}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
       <div className="md:flex  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden 
    md:max-w-2xl">
        <div className="md:shrink-0">
         
          <img src={mundial} alt="" className="h-48 w-full object-cover md:h-full md:w-48"></img>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg leading-tight text-indigo-500 font-semibold">Instagram </div>
          <a href="https://www.instagram.com/reel/CmZcaqCJqkY/?utm_source=ig_web_copy_link" className="block mt-l text-lg leading-tight font-medium text-black hover:underline">MUNDIAL DE PROMOS!!! 🇦🇷⚽🏆 &#128525;
          <p>No te pierdas el Mundial de Promos TREEECO todo diciembre!!!
PROMO 1: ASGARD/GUACAMASHI ---> 2X1 ⚽⚽🇦🇷🥇
PROMO 2: GUACAMASHI /GUMA ---> 3X2 ⭐⭐⭐🇦🇷🏆 
PROMO 3: ASGARD/GUACAMASHI/GUMA + MAPLE HUEVOS GALLINAS FELICES ---> Abono al mitad de precio!!! 🇦🇷🥇⭐🏆⚽
Pedilas YA y empeza el año con todo!!!
VAMOS ARGENTINAAAAA 🇦🇷🥇🏆⚽⭐⭐⭐</p>
          <br />
          </a>
        </div>        
      </div>
      <div>
      <br />
      </div>
      </motion.div>

      
    </section>
  );
};

export default Comunidad;
