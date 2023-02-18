import { useState } from "react";
import classes from "./ContactMe.module.css";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import ErrorModal from "../UI/AlertModal";

const ContactMe = () => {
  const [close, setClose] = useState(false);
  const onCloseHandler = () => {
    setClose((prev) => !prev);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      id="contactme"
      className={classes.contactme}
    >
      {close && (
        <ErrorModal onClose={onCloseHandler}>
          I Will Be In Touch With You Soon!
        </ErrorModal>
      )}
      <h1>Contact Me</h1>
      <div className={classes.contact}>
        <h2>I've got just what you need .Let's Talk</h2>
      </div>
      <div className={classes.mail}>
        <FiMail className={classes.mailIcon} />
        <p>omarantar520@gmail.com</p>
      </div>
      <div className={classes.mail}>
        <MdLocationPin className={classes.mailIcon} />
        <p>Main Street, Hrrar-Akkar</p>
      </div>
      <ContactForm alertMessage={onCloseHandler} />
    </motion.div>
  );
};

export default ContactMe;
