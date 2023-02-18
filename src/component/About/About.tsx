import classes from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={classes.about}
      id="about"
    >
      <h1>About</h1>
      <div className={classes.content}>
        <motion.img
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src="https://pbs.twimg.com/profile_images/1186325764016345088/ymis6UHK_400x400.jpg"
          alt="cool"
        />
        <div className={classes.text}>
          <h2>Her Is A Little Background.</h2>
          <p>
            A Information Technology Recently graduated from Orthodox Technical
            Instute with experience of web development . Possess Html5 ,Css3
            ,Javascript,Typescript ,Java ,C ,React ,Linux , git, gitHub, MySql,
            Php . Keen to pursue a career in ReactJs.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
