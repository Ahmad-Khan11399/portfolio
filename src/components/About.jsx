import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constant/index";
import SectionWrapper from "../hoc/sectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled web developer with expertise in HTML, CSS, and JavaScript.
        I have a strong command of various frameworks and libraries, including
        Bootstrap 5, jQuery, and Node.js. With hands-on experience in working
        with APIs, React.js, EJS, MongoDB, Mongoose, and database management, I
        am well-equipped to build efficient and scalable web applications. I am
        also proficient in utilizing design frameworks like Ant Design, along
        with charting libraries such as D3 charts, Apex charts, and Chart.js, to
        create visually appealing and data-driven interfaces. As a quick learner
        and adept problem solver, I collaborate closely with clients to
        understand their needs and deliver user-friendly solutions that
        effectively solve real-world problems. Let's work together to turn your
        ideas into reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
