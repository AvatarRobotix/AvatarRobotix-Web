import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import "../assets/css/projects.css";

import projectimg from "../assets/img/indoor.webp";
import projectimg1 from "../assets/img/medical.jpg";

const Projects = () => {
  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.4
  });

  const { ref: container1Ref, inView: container1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const container1Animation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 }
    }
  };

  const boxAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Section 1: Our Innovative Projects */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-12 text-center md:px-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl mb-4">Our Innovative Projects</h1>
          <p className="text-lg text-gray-600 mb-6">
            In a rapidly advancing technological world, Avatar robotics is at
            the forefront of innovation, bridging the gap between human
            expertise and machine precision. Our project focuses on developing
            state-of-the-art robots tailored for agriculture and healthcare, two
            of the most critical sectors that influence global well-being.
          </p>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
            <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
              <Link
                to="project1" // Correct ID
                smooth={true}
                duration={500}
                className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:text-black transition duration-300 cursor-pointer"
              >
                Learn More
              </Link>

              <a
                href="/contact" // Replace with your actual contact page URL or section ID
                className="bg-[#a68eff] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 hover:text-black  transition duration-300 mt-4 md:mt-0"
              >
                Contact Us
              </a>
            </div>
          </div>

          <h3 className="mt-8 text-lg text-gray-700">
            Robots will play a central role in the future of humanity, helping
            us to achieve our dreams.
          </h3>
        </div>
      </section>

      {/* Section 2: Agricultural Robots Image and Text */}
      <section
        className="flex flex-col md:flex-row items-center px-6 py-12 md:px-12 md:py-24"
        id="project1" // Correct ID
      >
        <img
          src={projectimg}
          alt="Agricultural Robots"
          className="w-full h-auto max-w-5xl rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
        />
        <div className="text-center md:text-left" ref={secondRef}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={
              secondInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl font-semibold  mb-4"
          >
            Agricultural Robots
          </motion.h1>
          <p className="text-lg ">
            Our agricultural robots are designed to optimize farming practices,
            increase efficiency, and reduce labor costs. These robots are
            equipped with advanced sensors, AI-driven decision-making systems,
            and robust mechanical designs, making them ideal for tasks.
          </p>
        </div>
      </section>

      {/* Section 3: Agricultural Projects Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center px-6 py-12 md:px-12 md:py-24"
        variants={container1Animation}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="p-6 bg-[#c5ffc4] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Precision Farming</h1>
          <p className="">
            Automated planting, watering, and harvesting, ensuring maximum yield
            with minimal resource wastage. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit deleniti aspernatur qui ab
            quidem adipisci explicabo eaque tempore eos hic. A, corrupti? Minima
            dolore labore ad, adipisci iusto natus aut nam architecto eius esse
            laborum alias accusantium sed quibusdam a ullam totam nobis ipsum
            odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c5ffc4] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Soil Analysis</h1>
          <p className="">
            Real-time soil monitoring and analysis, providing farmers with
            critical data to make informed decisions about crop management.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            deleniti aspernatur qui ab quidem adipisci explicabo eaque tempore
            eos hic. A, corrupti? Minima dolore labore ad, adipisci iusto natus
            aut nam architecto eius esse laborum alias accusantium sed quibusdam
            a ullam totam nobis ipsum odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c5ffc4] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Pest and Weed Control</h1>
          <p className="">
            Targeted application of pesticides and herbicides, reducing the need
            for broad-spectrum chemical use and promoting sustainable farming
            practices. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit deleniti aspernatur qui ab quidem adipisci explicabo eaque
            tempore eos hic. A, corrupti? Minima dolore labore ad, adipisci
            iusto natus aut nam architecto eius esse laborum alias accusantium
            sed quibusdam a ullam totam nobis ipsum odit voluptate hic atque
            amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c5ffc4] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Crop Monitoring</h1>
          <p className="">
            High-resolution imaging and data analysis for early detection of
            crop diseases and nutrient deficiencies. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit deleniti aspernatur qui ab
            quidem adipisci explicabo eaque tempore eos hic. A, corrupti? Minima
            dolore labore ad, adipisci iusto natus aut nam architecto eius esse
            laborum alias accusantium sed quibusdam a ullam totam nobis ipsum
            odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 4: Medical Robots Image and Text */}
      <section className="flex flex-col md:flex-row-reverse items-center px-6 py-12 md:px-12 md:py-24">
        <img
          src={projectimg1}
          alt="Medical Robots"
          className="w-full h-auto w-5xl max-w-5xl rounded-lg shadow-lg mb-6 md:mb-0 md:ml-8"
        />
        <div className="text-center md:text-left" ref={secondRef}>
          <h1 className="text-2xl font-semibold  mb-4">Medical Robots</h1>
          <p className="text-lg ">
            In healthcare, our Avatar robots are revolutionizing patient care,
            surgery, and rehabilitation. These robots are designed to assist
            medical professionals in providing precise, safe, and efficient
            care.
          </p>
        </div>
      </section>

      {/* Section 5: Medical Projects Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-6 px-6 py-12 md:px-12 md:py-24"
        variants={container1Animation}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="p-6 bg-[#c2cdff] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">
            Telemedicine and Remote Surgery
          </h1>
          <p className="">
            Robots controlled by expert surgeons from anywhere in the world,
            bringing cutting-edge medical procedures to underserved areas.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            deleniti aspernatur qui ab quidem adipisci explicabo eaque tempore
            eos hic. A, corrupti? Minima dolore labore ad, adipisci iusto natus
            aut nam architecto eius esse laborum alias accusantium sed quibusdam
            a ullam totam nobis ipsum odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c2cdff] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">
            Patient Monitoring and Assistance
          </h1>
          <p className="">
            Real-time patient monitoring and assistance, ensuring timely and
            accurate healthcare interventions. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Suscipit deleniti aspernatur qui ab
            quidem adipisci explicabo eaque tempore eos hic. A, corrupti? Minima
            dolore labore ad, adipisci iusto natus aut nam architecto eius esse
            laborum alias accusantium sed quibusdam a ullam totam nobis ipsum
            odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c2cdff] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Rehabilitation</h1>
          <p className="">
            Customized therapy sessions for patients recovering from injuries or
            surgeries, with adaptive programs that respond to the patient’s
            progress. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit deleniti aspernatur qui ab quidem adipisci explicabo eaque
            tempore eos hic. A, corrupti? Minima dolore labore ad, adipisci
            iusto natus aut nam architecto eius esse laborum alias accusantium
            sed quibusdam a ullam totam nobis ipsum odit voluptate hic atque
            amet dolor.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-[#c2cdff] rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          variants={boxAnimation}
        >
          <h1 className="text-3xl font-normal  mb-6">Infection Control</h1>
          <p className="">
            Autonomous robots that sanitize hospital environments, reducing the
            risk of healthcare-associated infections. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit deleniti aspernatur qui
            ab quidem adipisci explicabo eaque tempore eos hic. A, corrupti?
            Minima dolore labore ad, adipisci iusto natus aut nam architecto
            eius esse laborum alias accusantium sed quibusdam a ullam totam
            nobis ipsum odit voluptate hic atque amet dolor.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 6: Final Text Content */}
      <section className="flex items-center justify-center px-6 py-12 text-center md:px-12 md:py-24">
        <div className="max-w-5xl">
          <p className="text-2xl text-gray-700">
            Revolutionizing the healthcare industry,{" "}
            <span className="text-[#030303] font-bold">
              our innovative medical robots provide seamless patient monitoring,
              assist in complex procedures,
            </span>{" "}
            and enhance recovery through tailored rehabilitation programs,
            ensuring optimal outcomes.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
