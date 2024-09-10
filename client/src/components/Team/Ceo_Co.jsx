import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa"; // Import the icons

// With BG Image
import CEO from "../../assets/profiles/BG/Management/CEO.jpg";
import CoFo from "../../assets/profiles/BG/Management/Co-Fo.jpg";

// Without BG Image
import CEO_ from "../../assets/profiles/Non_BG/Management/CEO.png";
import CoFo_ from "../../assets/profiles/Non_BG/Management/Co-Fo.png";

const Ceo_Co = () => {
  // Intersection Observer hooks
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 p-6 md:p-10 lg:p-20">
      {/* First Card */}
      <motion.div
        className="relative text-center shadow-lg bg-[#10082b] bg-custom-radial bg-blend-multiply rounded-2xl overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-screen"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView1 ? 1 : 0, scale: inView1 ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        ref={ref1}
      >
        {/* Left Image Background */}
        <motion.div
          className="w-full md:w-1/2 z-10 mt-20 bg-cover bg-center h-full md:h-full hidden md:block"
          style={{
            backgroundImage: `url(${CEO_})`
          }}
          initial={{ y: -100 }}
          animate={{ y: inView1 ? 0 : -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Content Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-1 md:p-8">
          <motion.div
            className="w-full rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center bg-[#a68eff] md:bg-[#a68eff]"
            initial={{ y: 100 }}
            animate={{ y: inView1 ? 0 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.img
              src={CEO}
              alt="CEO"
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl mb-4 object-cover shadow-black shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: inView1 ? 1 : 0.8, opacity: inView1 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Name and Title */}
            <h1 className="text-xl md:text-2xl font-bold text-white">
              K S KAARVENTHAN
            </h1>
            <h2 className="text-base md:text-lg text-white mt-2">
              CEO & FOUNDER
            </h2>
            {/* Contact Information */}
            <p className="text-white mt-4">
              +91 6379211833 | +91 9025967273
              <br />
              <br />
              <a
                href="mailto:avatarrobotix@outlook.com"
                className="flex items-center justify-center gap-2"
              >
                <FaEnvelope /> avatarrobotix@outlook.com
              </a>
              <a
                href="https://www.avatarrobotix.com"
                className="flex items-center justify-center gap-2"
              >
                <FaGlobe /> www.avatarrobotix.com
              </a>
              <br />
              3/438, Iswarya Garden, P.Vellalapalayam, Gobichettipalayam -
              638476.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-6 text-white">
              <a
                href="https://www.linkedin.com/in/avatar-robotix-az963"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg md:text-xl hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Second Card */}
      <motion.div
        className="relative text-center shadow-lg bg-[#090518] bg-custom-radial bg-blend-multiply rounded-2xl overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-screen"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: inView2 ? 1 : 0, scale: inView2 ? 1 : 0.9 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        ref={ref2}
      >
        {/* Content Section */}
        <div className="flex justify-center items-center w-full md:w-1/2 p-1 md:p-8 order-2 md:order-1">
          <motion.div
            className="w-full rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center bg-[#a68eff] md:bg-[#a68eff]"
            initial={{ y: 100 }}
            animate={{ y: inView2 ? 0 : 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image */}
            <motion.img
              src={CoFo}
              alt="Co-Founder"
              className="w-28 h-28 md:w-32 md:h-32 rounded-2xl mb-4 object-cover shadow-black shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: inView2 ? 1 : 0.8, opacity: inView2 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Name and Title */}
            <h1 className="text-xl md:text-2xl font-bold text-black">
              G HARINI
            </h1>
            <h2 className="text-base md:text-lg text-black mt-2">
              CO-FOUNDER & MANAGING DIRECTOR
            </h2>
            {/* Contact Information */}
            <p className="text-black mt-4">
              +91 6379211833 | +91 9025967273
              <br />
              <br />
              <a
                href="mailto:avatarrobotix@outlook.com"
                className="flex items-center justify-center gap-2"
              >
                <FaEnvelope /> avatarrobotix@outlook.com
              </a>
              <a
                href="https://www.avatarrobotix.com"
                className="flex items-center justify-center gap-2"
              >
                <FaGlobe /> www.avatarrobotix.com
              </a>
              <br />
              3/438, Iswarya Garden, P.Vellalapalayam, Gobichettipalayam -
              638476.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-6 text-black">
              <a
                href="https://www.linkedin.com/in/avatar-robotix-az963"
                aria-label="LinkedIn"
                className=""
              >
                <FaLinkedin className="text-lg md:text-xl hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
        {/* Right Image Background */}
        <motion.div
          className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-full order-1 md:order-2 hidden md:block"
          style={{ backgroundImage: `url(${CoFo_})` }}
          initial={{ y: 100 }}
          animate={{ y: inView2 ? 0 : 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Ceo_Co;
