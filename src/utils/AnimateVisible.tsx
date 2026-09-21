import { motion } from "framer-motion";
import React from "react";

interface AnimateVisibleProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimateVisible: React.FC<AnimateVisibleProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    // className="pb-10 last:pb-0"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimateVisible;
