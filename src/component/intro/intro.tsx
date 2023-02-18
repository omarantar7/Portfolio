import classes from "./intro.module.css";
import { ReactTypical } from "@deadcoder0904/react-typical";
import BgCircules from "./BgCircules";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import image from "../IMG_3305.jpg";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <BgCircules />
      <div className={classes.content}>
        <motion.img
          initial={{ y: -500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          src={image}
          alt="Me"
        />
        <div className={classes.Tfield}>
          <h4>#React_Developer</h4>
          <ReactTypical
            steps={[
              "<Hello My Name Is Omar/>",
              1000,
              "<A Web Developer/>",
              500,
              "<From Lebanon/>",
              2000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
          <a href="#about">
            <Button>About</Button>
          </a>
          <a href="#skills">
            <Button>Skills</Button>
          </a>
          <a href="#projects">
            <Button>Projects</Button>
          </a>
          <a href="#contactme">
            <Button>Contact Me</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
