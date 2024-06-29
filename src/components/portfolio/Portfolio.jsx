import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Code-Sync",
    link: "https://github.com/harshdev-7275/code-sync",
    img: "https://img.freepik.com/free-vector/webinar-isometric_1284-25324.jpg?t=st=1719642409~exp=1719646009~hmac=bc8974ce86604051543d657b884ec4f332d3166a39efb356c0fd9287b2c8e2a9&w=826",
    desc: "Code Sync is a comprehensive learning management system featuring a built-in code compiler, designed to facilitate interactive programming education and assessment.",
  },
  {
    id: 2,
    title: "Nav-Naari",
    link: "https://github.com/harshdev-7275/Nav-Naari",
    img: "https://ideogram.ai/assets/progressive-image/balanced/response/pfTf6UxQRwq3yda52iitmw",
    desc: "NavNaari is a job seeking platform tailored for women, aiming to empower and connect them with job opportunities. It provides a user-friendly interface for job search and application processes, emphasizing inclusivity and career advancement.",
  },
  {
    id: 3,
    title: "Tap-Tap",
    link: "https://github.com/harshdev-7275/tap-tap-game",
    img: "https://img.freepik.com/free-photo/side-view-hands-typing-keyboard_23-2149349996.jpg?t=st=1719643066~exp=1719646666~hmac=b141b1d19aca262e674bab0de95d676fe9a9704f1aca0dd03b4c1a70ce55fa53&w=996",
    desc: "Tap-Tap is a JavaScript-based typing game designed for users to enhance their typing skills through interactive gameplay, featuring HTML and CSS for frontend styling and functionality.",
  },
  {
    id: 4,
    title: "Find-it",
    link: "https://github.com/harshdev-7275/findit",
    img: "https://img.freepik.com/free-vector/search-concept-landing-page_52683-20158.jpg?t=st=1719642686~exp=1719646286~hmac=7ee3314c9474a2c9a34d71cbe093327fa9075eaa971c39a1bf01056ffae16216&w=740",
    desc: "Findit is a web-based search engine utilizing the Reddit API, designed to provide users with streamlined access to Reddit's vast repository of content, tailored for efficient and targeted searches.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item?.img} alt={item?.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item?.title}</h2>
            <p>{item?.desc}</p>
            <button>
              <a href={item?.link} target="_blank" rel="noopener noreferrer">
                See More
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
