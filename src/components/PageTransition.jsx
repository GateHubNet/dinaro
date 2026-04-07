import { motion } from 'motion/react';
import './PageTransition.css';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.29, 0.435, 0.295, 1.0] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: [0.29, 0.435, 0.295, 1.0] },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
