import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/img/bgimg.jpg";
import img2 from "../assets/img/imgnew.png";
import img5 from "../assets/img/bg2_bg.gif";
import "../assets/css/about.css";

// Reusable motion component for animations
const AnimatedText = ({
  children,
  inView,
  initial,
  animate,
  transition,
  className
}) => (
  <motion.div
    initial={initial}
    animate={inView ? animate : initial}
    transition={transition}
    className={className}
  >
    {children}
  </motion.div>
);

const About = () => {
  // Intersection observer hooks for different sections
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const { ref: refThree, inView: inViewThree } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { ref: coreValuesRef, inView: coreValuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Core values data
  const coreValues = [
    {
      title: "Innovation",
      description:
        "At Avatar Robotix, innovation is the driving force behind our success. We are committed to exploring new ideas and technologies that push the boundaries of what’s possible in robotics and automation. Our goal is to create groundbreaking solutions that solve complex problems and lead the industry forward."
    },
    {
      title: "Integrity",
      description:
        "Our strict adherence to ethical standards was demonstrated in our recent project where we ensured all data collected by our robots adhered to the highest privacy standards, earning the trust of our clients and partners alike."
    },
    {
      title: "Customer Focus",
      description:
        "We put our customers at the center of everything we do. By understanding their unique needs and challenges, we tailor our solutions to deliver maximum value and drive their success. Our relationship with our customers is built on trust, collaboration, and a deep commitment to their satisfaction."
    },
    {
      title: "Sustainability",
      description:
        "In our latest product line, we incorporated energy-efficient components that reduce power consumption by 30%, helping our clients lower their carbon footprint while maintaining high operational efficiency."
    },
    {
      title: "Excellence",
      description:
        "Excellence is our standard. From the initial concept to the final product, we are committed to delivering high-quality solutions that meet and exceed industry standards. We continually refine our processes to ensure that every project reflects our dedication to superior performance and lasting impact."
    },
    {
      title: "Collaboration",
      description:
        "Our collaborative approach with a global agricultural leader led to the development of an advanced robotic system that increased crop yields by 20%, showcasing the power of teamwork in driving innovation."
    },
    {
      title: "Respect for People",
      description:
        "We believe that respect for people is essential to building a strong and cohesive team. At Avatar Robotix, we foster a work environment where every individual’s contributions are valued, and where diversity, inclusion, and personal growth are prioritized."
    }
  ];

  return (
    <>
      {/* Section 1: Introduction */}
      <div className="about_first text-white">
        <div className="dummy "></div>
        <AnimatedText
          inView={inView}
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl text-center font-light"
        >
          About Us
        </AnimatedText>
        <AnimatedText
          inView={inView}
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl m-8 font-light text-center"
        >
          Avatar Robotix Empowering Agriculture's Sustainable Future !!!
        </AnimatedText>
        <AnimatedText
          inView={inView}
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm  text-center"
        >
          The future of farming lies in the hands of robotics and AI, where
          technology meets the earth to create sustainable growth.
        </AnimatedText>
      </div>

      {/* Section 2: Company Overview */}
      <div className="one" ref={ref}>
        <div className="text-overlay">
          <AnimatedText
            inView={inView}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-overlay-h3"
          >
            Avatar Robotix is a leading innovator in the field of robotics and
            automation, dedicated to developing cutting-edge technologies that
            transform industries...
          </AnimatedText>
          <AnimatedText
            inView={inView}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-overlay-h1"
          >
            The Best Way to Predict The Future is to Invent It
          </AnimatedText>
          <AnimatedText
            inView={inView}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="learn-more-btn"
          >
            Learn More
          </AnimatedText>
        </div>
        <motion.img
          src={img1}
          className="img1"
          alt="Avatar Robotix"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      {/* Section 3: Vision Statement */}
      <div
        className="w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-center py-20 lg:py-24"
        ref={refThree}
      >
        <motion.div
          className="three_one w-full lg:w-1/2 lg:mr-10 mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={inViewThree ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-lg lg:text-lg font-semibold text-center lg:text-left">
            The future belongs to those who can merge the power of robotics with
            the intelligence of AI to solve humanity's biggest challenges.
          </h3>
          <div className="mt-6 flex justify-center lg:justify-start">
            <img
              src={img2}
              alt="Future Robotics"
              className="w-full h-auto max-w-xl rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-3/4 p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inViewThree ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-4xl lg:text-6xl font-medium text-black mt-10 lg:mt-16 text-center lg:text-left">
            VISION
          </h1>
          <h2 className="text-xl lg:text-2xl font-semibold text-black mt-10 text-center lg:text-left">
            Our Vision is to be the highest value provider of global
            construction services and technical expertise.
          </h2>
          <h3 className="text-base lg:text-lg text-black mt-4 text-justify lg:text-left">
            At Avatar Robotix, we envision a future in which sophisticated
            automation boosts sustainability, efficiency, and productivity
            across all sectors. Our goal is to be at the forefront of
            technological innovation, delivering solutions that empower
            industries to reach new heights.
          </h3>
        </motion.div>
      </div>

      {/* Section 4: Mission Statement */}
      <div
        className="mission bg-[#10082b] text-center flex flex-col justify-center items-center rounded-tl-[20%] rounded-tr-[20%] py-10 lg:py-20 px-5 lg:px-10"
        ref={missionRef}
      >
        <div className="mission_content flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl mx-auto">
          <div className="mission_words text-center lg:text-left lg:w-1/2 lg:pr-5">
            <AnimatedText
              inView={missionInView}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white"
            >
              Mission
            </AnimatedText>
            <AnimatedText
              inView={missionInView}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg mt-5 lg:mt-10 font-normal text-white"
            >
              At Avatar Robotix, we are driven by a singular vision: to
              transform the future through the power of robotics. Our mission is
              to design and develop innovative robotics solutions that redefine
              industries, enhance human capabilities, and improve quality of
              life across the globe.
            </AnimatedText>
            <AnimatedText
              inView={missionInView}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-sm sm:text-base lg:text-lg mt-5 lg:mt-10 font-normal text-white"
            >
              "Innovation distinguishes between a leader and a follower." -
              Steve Jobs
            </AnimatedText>
          </div>

          <motion.img
            src={img5}
            className="img5 w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto mt-10 lg:mt-0 lg:ml-5 flex-shrink-0"
            alt="Background Animation"
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>

        <div className="mission_text w-full mt-10 lg:mt-20 text-white leading-loose text-justify px-4 sm:px-10 lg:px-[10%]">
          <p className="text-sm sm:text-base lg:text-lg text-white">
            Our commitment to excellence drives us to explore new frontiers in
            technology, pushing the boundaries of what is possible. Whether it's
            revolutionizing agriculture with autonomous machinery or enhancing
            healthcare with precision robotics, Avatar Robotix is at the
            forefront of technological advancement. With a focus on
            sustainability, we aim to create solutions that are not only
            cutting-edge but also environmentally responsible. Our
            interdisciplinary teams work collaboratively to integrate advanced
            AI, IoT, and machine learning technologies into our robotics
            platforms, ensuring that our solutions are both intelligent and
            adaptive to changing environments.
          </p>
        </div>
      </div>

      {/* Section 5: Core Values */}
      <div className="core-values py-20 text-center" ref={coreValuesRef}>
        <div className="core-values-header mb-12">
          <AnimatedText
            inView={coreValuesInView}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl font-medium text-black"
          >
            Core Values
          </AnimatedText>
          <AnimatedText
            inView={coreValuesInView}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl mt-2 text-black"
          >
            Our core values drive our mission and shape our company culture.
          </AnimatedText>
        </div>
        <div className="core-values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="core-value-box bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-base text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
