import classes from "./Header.module.css";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className={classes.socialIcons}>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://github.com/omarantar7"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://facebook.com/omar.antar.16144"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/Omar_antar___7"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://www.linkedin.com/in/omar-antar-008855232/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className={classes.mail}
        initial={{ x: +500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a href="mailto:omarantar520@gmail.com.com">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        </a>
        <p>GET IN TOUCH</p>
      </motion.div>
    </header>
  );
};

export default Header;
