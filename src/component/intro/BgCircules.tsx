import classes from "./BgCircules.module.css";
import { motion } from "framer-motion";

const BgCircules = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{ duration: 3 }}
      className={classes.all}
    >
      <div className={classes.third} />
      <div className={classes.fourth} />
    </motion.div>
  );
};

export default BgCircules;
