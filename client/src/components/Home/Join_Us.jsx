import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import team_0 from "../../assets/img/team_0.png";

gsap.registerPlugin(ScrollTrigger);

const JoinUs = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5
        }
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5
        }
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5
        }
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 0.5
        }
      }
    );
  }, []);

  return (
    <section className="relative p-8 min-h-screen text-center flex flex-col justify-center items-center">
      <motion.h1
        ref={titleRef}
        className="text-4xl md:text-6xl font-extralight mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Join Us on Our Journey
      </motion.h1>
      <motion.p
        ref={paragraphRef}
        className="text-base font-extralight md:text-lg lg:text-xl mb-8 leading-relaxed max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        At Avatar Robotix, we invite you to join us on a transformative journey
        of innovation and excellence. Our team is dedicated to pushing the
        boundaries of technology and making a meaningful impact. Together, we
        can achieve great things and shape the future. Whether you're looking to
        contribute your skills or seek new opportunities, we welcome you to be a
        part of our dynamic and forward-thinking community.
      </motion.p>
      <div className="flex justify-center">
        <motion.button
          ref={buttonRef}
          className="cssbuttons-io-button flex items-center justify-center bg-[#10082b] text-white rounded-lg px-6 py-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/contact" className="flex items-center">
            <span className=" text-xl">Join us</span>
          </Link>
        </motion.button>
      </div>
      {/* Image Section */}
      {/* <motion.div
        ref={imageRef}
        className="mt-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src={team_0} alt="Team" className="w-full h-auto rounded-lg" />
      </motion.div> */}
    </section>
  );
};

export default JoinUs;
