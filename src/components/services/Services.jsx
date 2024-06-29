import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Css from "../../utils/icons/Css";
import Javascript from "../../utils/icons/Javascript";
import Java from "../../utils/icons/Java";
import Html from "../../utils/icons/Html";
import Typescript from "../../utils/icons/Typescript";
import TailwindIcon from "../../utils/icons/Tailwind";
import NodeIcon from "../../utils/icons/Node";
import ReactIcon from "../../utils/icons/React";
import Express from "../../utils/icons/Express";
import Prisma from "../../utils/icons/Prisma";
import Postgresql from "../../utils/icons/Postgresql";
import Mongo from "../../utils/icons/Mongo";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>Transforming ideas into reality through code.</p>
        <hr />
      </motion.div>

      <ul className="icons">
        <li>
          <Javascript />
        </li>
        <li>
          <Java />
        </li>
        <li>
          <Html />
        </li>
        <li>
          <Css />
        </li>
        <li>
          <Typescript />
        </li>
        <li>
          <TailwindIcon />
        </li>
        <li>
          <NodeIcon />
        </li>
        <li>
          <ReactIcon />
        </li>
        <li>
          <Express />
        </li>
        <li>
          <Prisma />
        </li>
        <li>
          <Postgresql />
        </li>
        <li>
          <Mongo />
        </li>
      </ul>
    </motion.div>
  );
};

export default Services;
