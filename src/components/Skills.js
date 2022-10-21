import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [ambiente, setAmbiente] = useState(0);

  const [organico, setOrganico] = useState(0);

  const [reciclado, setReciclado] = useState(0);

  const [cliente, setCliente] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (ambiente < 100) {
          setAmbiente(ambiente + 1);
        }
        if (organico < 95) {
          setOrganico(organico + 1);
        }
        if (reciclado < 89) {
          setReciclado(reciclado + 1);
        }
        if (cliente < 100) {
          setCliente(cliente + 1);
        }
      }, 50);
    } else {
      setAmbiente(0);
      setOrganico(0);
      setReciclado(0);
      setCliente(0);
    }
  }, [inView, ambiente, organico, reciclado, cliente]);
  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <motion.section
      ref={ref}
      className="section font-primary"
      variants={fadeIn("up")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row justify-between items-center gap-y-12 ">
          <div className=" w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6]">
            <CircularProgressbar
              strokeWidth={1}
              value={ambiente}
              styles={styles}
              text={`${ambiente}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Comprometidos con el Ambiente
            </div>
          </div>
          <div className=" w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6]">
            <CircularProgressbar
              strokeWidth={1}
              value={organico}
              styles={styles}
              text={`${organico}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Productos orgánicos
            </div>
          </div>
          <div className=" w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6]">
            <CircularProgressbar
              strokeWidth={1}
              value={reciclado}
              styles={styles}
              text={`${reciclado}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Reciclado y Reutilización
            </div>
          </div>
          <div className=" w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6]">
            <CircularProgressbar
              strokeWidth={1}
              value={cliente}
              styles={styles}
              text={`${cliente}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Clientes Felices
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
