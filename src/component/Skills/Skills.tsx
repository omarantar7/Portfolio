import SkillItems from "./SkillItems";
import classes from "./Skills.module.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={classes.skills}
      id="skills"
    >
      <h1>Skills</h1>
      <h3>Hover over A skill</h3>
      <div className={classes.skillItems}>
        <SkillItems
          directionLeft={true}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          percentage={97}
        />
        <SkillItems
          directionLeft={true}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAi6Ah3SwQOrGOrMCj_yF6SgNR_wgM8rJlw&usqp=CAU"
          percentage={96}
        />
        <SkillItems
          directionLeft={true}
          image="data:image/png;base64,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"
          percentage={92}
        />
        <SkillItems
          directionLeft={true}
          image="https://reactjs.org/logo-og.png"
          percentage={92}
        />
        <SkillItems
          directionLeft={true}
          image="https://dev-yakuza.posstree.com/assets/images/category/react/nextjs/background.jpg"
          percentage={40}
        />
        <SkillItems
          directionLeft={true}
          image="https://e7.pngegg.com/pngimages/119/167/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png"
          percentage={72}
        />
        <SkillItems
          directionLeft={true}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
          percentage={65}
        />
        <SkillItems
          directionLeft={false}
          image="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
          percentage={51}
        />
        <SkillItems
          directionLeft={false}
          image="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
          percentage={40}
        />
        <SkillItems
          directionLeft={false}
          image="https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png"
          percentage={25}
        />
        <SkillItems
          directionLeft={false}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiDtzkcUzWREpnpLjuIScwHuRgUxcfTgYvQhRphjDBhs5-HKfmbj-CTmktYfgeR2L7mk&usqp=CAU"
          percentage={45}
        />
        <SkillItems
          directionLeft={false}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUwnGuK2EyquqWt9j2KUYI95d5-5E8p_SsoeOa14&s"
          percentage={50}
        />
        <SkillItems
          directionLeft={false}
          image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
          percentage={60}
        />
        <SkillItems
          directionLeft={false}
          image="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
          percentage={70}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
