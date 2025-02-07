import { motion } from "framer-motion";
const Contact = () => {
  return (
   <div className=" pb-20  ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Address: magura, Dahaka, Bangladesh 
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          Phone: <a className="text-blue-500">+8801753671718</a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          whatsapp: <a className="text-blue-500">+8801753671718</a>
        </motion.p>
        <a
          href="mailto:jubayerahmed2462@gmail.com"
          className="border-b text-blue-500"
        >
         Send Mail
        </a>
      </div>
    </div>
  );
};

export default Contact;