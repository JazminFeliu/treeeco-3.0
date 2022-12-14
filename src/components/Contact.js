import React, {useState} from "react";
import  { useForm, ValidationError} from "@formspree/react";
import { contactData } from "../data";
import { motion } from "framer-motion";
import Modal from "./Modal";

import { fadeIn } from "../variants";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Contact = () => {

  const { title, info, form, logo } = contactData; 
  const [state, handleSubmit] = useForm("xjvjyzdy"); 
  const [showModal, setShowModal] = useState(false);

  if(state.succeeded && isVisible){
    return <> <Modal isVisible={showModal} onClose={() => setShowModal(false) } >     
            
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="w-[100px] h-[100px] object-cover md:h-90% md:w-90%" src={logo} alt="Treeeco Tandil, Argentina"  />
    </div>
    <div class="p-6">
      <div class="uppercase tracking-wide text-sm text-green-700 font-semibold">Su mensaje ha sido enviado</div>
      <p  class="block mt-1 text-lg leading-tight font-medium text-black ">Gracias por escribirnos, le contestaremos a la brevedad.</p>
      <p class="mt-2 text-slate-500">Equipo TREEECO.  </p>
    </div>
  </div>     
    </Modal>
   <Contact />
    </>;
         
  }

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={index}>
                    <div className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </div>
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    <div
                      className="
                    flex flex-col gap-y-3 mb-8"
                    >
                      <div className="flex items-center gap-[10px]">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                    <a
                      className="font-medium border-b border-dark pb-[5px]"
                      href="https://www.google.com/maps/place/37%C2%B017'06.0%22S+59%C2%B006'39.5%22W/@-37.284985,-59.110967,17z/data=!3m1!4b1!4m6!3m5!1s0!7e2!8m2!3d-37.2849853!4d-59.1109672"
                    >
                      {link}
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-10 w-full">
              <input
                    
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.name}
                type="text"
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.email}               
                id="email"
                type="email" 
                name="email"              
              />
               <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea

        id="message"
        name="message"
        className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.message}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

              <button type="submit" disabled={state.submitting} className="btn btn-sm btn-dark self-start" onClick={() => setShowModal(true)}>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
