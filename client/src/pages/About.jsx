import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/img/bgimg.jpg";
import img2 from "../assets/img/imgnew.png";
import img5 from "../assets/img/bg2_bg.gif";

import "../assets/css/about.css";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when in view
    threshold: 0.4 // Animation triggers when 30% of the component is visible
  });
  const { ref: refThree, inView: inViewThree } = useInView({
    triggerOnce: true,
    threshold: 0.3 // Animation triggers when 30% of the component is visible
  });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1 // Different threshold for mission section
  });
  const { ref: coreValuesRef, inView: coreValuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1 // Adjust threshold as needed
  });
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
      <div className="about_first">
        <div className="dummy"></div>
        <h1 className="text-6xl">About Us</h1>
        <h2 className="about_first_h2">
          {" "}
          Avatar Robotix empowering agriculture's sustainable future
        </h2>
        <h2 className="about_second_h2">
          The future of farming lies in the hands of robotics and AI, where
          technology meets the earth to create sustainable growth.
        </h2>
      </div>
      <div className="one" ref={ref}>
        <div className="text-overlay">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Avatar Robotix is a leading innovator in the field of robotics and
            automation, dedicated to developing cutting-edge technologies that
            transform industries. With a commitment to excellence and a passion
            for innovation, we provide comprehensive solutions across various
            sectors, including agriculture, healthcare, and manufacturing.
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The Best Way to Predict The Future is to Invent It
          </motion.h1>
          <motion.a
            href="#learn-more"
            className="learn-more-btn"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Learn More
          </motion.a>
        </div>

        <img
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

      <div className="three" ref={refThree}>
        <motion.div
          className="three_one"
          initial={{ opacity: 0, y: 50 }}
          animate={inViewThree ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3>
            The future belongs to those who can merge the power of robotics with
            the intelligence of AI to solve humanity's biggest challenges
          </h3>
          <div className="image-wrapper1">
            <img src={img2} alt="Future Robotics" className="img2" />
          </div>
        </motion.div>

        <motion.div
          className="three_two"
          initial={{ opacity: 0, y: 50 }}
          animate={inViewThree ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="three_two_word">
            <h1 className="vission text-6xl font-medium">VISION</h1>

            <h1 className="our_vision text-2xl mt-10">
              Our Vision is to be the highest value provider of global
              construction services and technical expertise.
            </h1>
            <h3>
              At Avatar Robotix, we envision a future in which sophisticated
              automation boosts sustainability, efficiency, and productivity by
              utilising robotics to transform the healthcare and agricultural
              industries. Our goal is a future in which humans and robots
              collaborate to provide targeted healthcare, enhance farming
              practices, and safeguard the welfare of both Nature and humanity.
            </h3>
          </div>
        </motion.div>
      </div>
      <div className="mission_container"> </div>
      <div className="mission" ref={missionRef}>
        <div className="mission_words">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl font-medium text-white"
          >
            Mission
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our goal at Avatar Robotix is to create cutting-edge robotics
            solutions that revolutionize agricultural and healthcare operations.
            Our goal is to create robots that will expedite medical operations,
            enhance patient outcomes, and provide access to high-quality
            healthcare. By using intelligent automation and data-driven
            insights, we hope to improve crop management, raise output, and
            encourage environmental stewardship in agriculture. We are committed
            to bringing about positive change and building a future in which, by
            combining cutting-edge technology with a deep comprehension of
            industrial demands, robots play a significant role in enhancing
            human health and sustainable food production.
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={
              missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 1, delay: 0.3 }}
            src={img5}
            alt=""
            srcset=""
            className="img5"
          />
        </div>
        <h2 className="Revolutionizing">
          Revolutionizing agriculture through automation, enhancing
          productivity, and preserving the environment.
        </h2>
      </div>
      <div>
        <h1 className="Core">Core Values</h1>
        <div className="core-values-grid" ref={coreValuesRef}>
          {coreValues.map((coreValue, index) => (
            <motion.div
              key={index}
              className={`core-value-box ${index === 6 ? "box7" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              animate={
                coreValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered delay
            >
              <h1>{coreValue.title}</h1>
              <h2>{coreValue.description}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
