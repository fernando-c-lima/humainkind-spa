import { motion } from "framer-motion";

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}        // começa invisível e descendo
      whileInView={{ opacity: 1, y: 0 }}     // anima quando entra na tela
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // anima apenas na primeira vez
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
