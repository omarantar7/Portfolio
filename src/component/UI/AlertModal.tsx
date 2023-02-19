import React from "react";
import { motion } from "framer-motion";
import classes from "./AlertModal.module.css";

const AlertModal: React.FC<{ children: any; onClose: () => void }> = (
  props
) => {
  return (
    <React.Fragment>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}  className={classes.backdrop} onClick={props.onClose} />
      <motion.div  initial={{opacity:0 , scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className={classes["error-modal"]}>
        <h1>Thank You!!</h1>
        <h2>{props.children}</h2>
        <div className={classes["error-modal__actions"]}>
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default AlertModal;
