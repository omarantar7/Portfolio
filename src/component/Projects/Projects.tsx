import classes from "./Projects.module.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className={classes.projects}
    >
      <h1>Projects</h1>
      <div className={classes.project}>
        <div>
          <a href="http://omarantar7.github.io/Netflix">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/1200px-Netflix_icon.svg.png"
              alt="netflix"
            />
            <h3>Project 1of2</h3>
            <p>
              Netflix app that has a login and logout authentication. it has a
              beutifull pages And you can watch trailers through it
            </p>
          </a>
        </div>

        <div>
          <a href="http://omarantar7.github.io/HOD-Characters">
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              src="https://images.hdqwalls.com/wallpapers/house-of-the-dragon-logo-5k-4h.jpg"
              alt="HOD"
            />
            <h3>Project 2of2</h3>
            <p>
              House Of The Dragon app it's a simple responsive project who's
              talking about the Character from the serie and the book Fire And
              Blood
            </p>
          </a>
        </div>
      </div>
      <div className={classes.bg} />
    </motion.div>
  );
};

export default Projects;
