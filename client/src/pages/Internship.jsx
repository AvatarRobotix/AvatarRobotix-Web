import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Gasc_Team from "../components/CareerInternship/Gasc_Team";
import Ksr_Team from "../components/CareerInternship/Ksr_Team";

// Animation variants
const textAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const buttonAnimation = {
  hover: { scale: 1.05, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" },
  tap: { scale: 0.95 }
};

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop - 80,
    behavior: "smooth"
  });
};

const Internship = () => {
  const gascRef = React.useRef(null);
  const ksrRef = React.useRef(null);

  const handleExploreClick = (ref) => {
    scrollToRef(ref);
  };

  // Intersection observer for scroll reveal
  const { ref: gascInViewRef, inView: gascInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const { ref: ksrInViewRef, inView: ksrInView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="relative">
      {/* Header Section with Clickable Columns */}
      <section
        className="py-12 px-4 md:py-20 md:px-6 lg:py-24 lg:px-8 h-[60vh] text-center flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="mb-6 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light">
            Our Collaborations
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className="relative cursor-pointer p-6 md:p-8 bg-[#b4a0ff] bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-4 text-gray-800">
              Gobi Arts and Science College
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 text-gray-600">
              Discover our collaboration with Gobi Arts and Science College...
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonAnimation}
                onClick={() => handleExploreClick(gascRef)}
                className="bg-[#190b48] text-white px-4 py-2 md:px-5 md:py-3 rounded-lg shadow-md hover:bg-[#a68eff] hover:text-black hover:font-medium transition-colors duration-300"
              >
                Explore
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className="relative cursor-pointer p-6 md:p-8 bg-[#b4a0ff] bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal  mb-4 text-gray-800">
              K.S. Rangasamy College of Technology (KSRCT), Tiruchengode
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 text-gray-600">
              Explore our partnership with KSR College...
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonAnimation}
                onClick={() => handleExploreClick(ksrRef)}
                className="bg-[#190b48] text-white px-4 py-2 md:px-5 md:py-3 rounded-lg shadow-md hover:bg-[#a68eff] hover:text-black hover:font-medium transition-colors duration-300"
              >
                Explore
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Content Section for GASC */}
      <section
        ref={gascRef}
        className="py-12 px-4 md:py-16 md:px-6 lg:py-20 lg:px-8"
      >
        <motion.div
          ref={gascInViewRef}
          initial="hidden"
          animate={gascInView ? "visible" : "hidden"}
          variants={textAnimation}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Gobi Arts and Science College, Gobi
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mx-auto max-w-7xl">
            At <span className="font-bold">Avatar Robotix</span>, we value the
            exceptional talent and innovative spirit of students...
          </p>
        </motion.div>
        <Gasc_Team />
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Content Section for KSR */}
      <section
        ref={ksrRef}
        className="py-12 px-4 md:py-16 md:px-6 lg:py-20 lg:px-8"
      >
        <motion.div
          ref={ksrInViewRef}
          initial="hidden"
          animate={ksrInView ? "visible" : "hidden"}
          variants={textAnimation}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            K.S. Rangasamy College of Technology (KSRCT), Tiruchengode
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed mx-auto max-w-7xl">
            At <span className="font-bold">Avatar Robotix</span>, we value the
            exceptional talent and innovative spirit of students...
          </p>
        </motion.div>
        <Ksr_Team />
      </section>
    </div>
  );
};

export default Internship;
