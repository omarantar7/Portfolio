import classes from "./SkillItems.module.css";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
  image: string;
  percentage: number;
};

const SkillItems = ({ directionLeft, image, percentage }: Props) => {
  return (
    <div className={classes.skill}>
      <motion.img
        initial={{ y: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={image}
      />
      <div className={classes.Percentage}>
        <div>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default SkillItems;
