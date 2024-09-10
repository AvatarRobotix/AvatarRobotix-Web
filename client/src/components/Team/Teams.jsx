import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// With BG Image
// import Dhanush from "../../assets/profiles/BG/GASC/EM_01.jpg";
// import Karthick from "../../assets/profiles/Non_BG/GASC/EM_02.png";

// import Jai from "../../assets/profiles/BG/GASC/AI_01-0.jpg";
// import Raghu from "../../assets/profiles/BG/GASC/AI_02.jpg";
// import Akash from "../../assets/profiles/BG/GASC/AI_03.jpg";
// import Abi from "../../assets/profiles/BG/GASC/AI_04.jpg";
// import Ranji from "../../assets/profiles/BG/GASC/AI_05.jpg";
// import Hari from "../../assets/profiles/BG/GASC/AI_06.jpg";
// import Kabhi from "../../assets/profiles/BG/GASC/AI_07.jpg";
// import Pavi from "../../assets/profiles/BG/GASC/AI_08.jpg";
// import Kaviya from "../../assets/profiles/BG/GASC/AI_09.jpg";

// import Logesh from "../../assets/profiles/BG/GASC/BCA_01.jpg";
// import Monish from "../../assets/profiles/BG/GASC/BCA_02.jpg";
// import Sharmitha from "../../assets/profiles/BG/GASC/BCA_03.jpg";
// import Poomalar from "../../assets/profiles/BG/GASC/BCA_04.jpg";

// import Rakshu from "../../assets/profiles/BG/GASC/IoT_01.jpg";
// import Bhooshitha from "../../assets/profiles/BG/GASC/IoT_02.jpg";
// import Dhanalakshmi from "../../assets/profiles/BG/GASC/IoT_03.jpg";
// import Nikitha from "../../assets/profiles/BG/GASC/IoT_04.jpg";

// import Arshath from "../../assets/profiles/BG/GASC/CS_01.jpg";
// import Nithyanandhan from "../../assets/profiles/BG/GASC/CS_02.jpg";

// import DURGA from "../../assets/profiles/BG/KSR/AI_01.png";
// import GOKILA from "../../assets/profiles/BG/KSR/AI_02.png";
// import SANDHIYA from "../../assets/profiles/BG/KSR/AI_03.png";
// import SHAKTHEE from "../../assets/profiles/BG/KSR/AI_04.png";

// import SRIDHARAN from "../../assets/profiles/BG/KSR/ML_01.png";
// import VARATHARAJAN from "../../assets/profiles/BG/KSR/ML_02.png";

// Without BG Image
import Dhanush from "../../assets/profiles/Non_BG/GASC/EM_01.png";
import Karthick from "../../assets/profiles/Non_BG/GASC/EM_02.png";

import Jai from "../../assets/profiles/Non_BG/GASC/AI_01-0.png";
import Raghu from "../../assets/profiles/Non_BG/GASC/AI_02.png";
import Akash from "../../assets/profiles/Non_BG/GASC/AI_03.png";
import Abi from "../../assets/profiles/Non_BG/GASC/AI_04.png";
import Ranji from "../../assets/profiles/Non_BG/GASC/AI_05.png";
import Hari from "../../assets/profiles/Non_BG/GASC/AI_06.png";
import Kabhi from "../../assets/profiles/Non_BG/GASC/AI_07.png";
import Pavi from "../../assets/profiles/Non_BG/GASC/AI_08.png";
import Kaviya from "../../assets/profiles/Non_BG/GASC/AI_09.png";

import Logesh from "../../assets/profiles/Non_BG/GASC/BCA_01.png";
import Monish from "../../assets/profiles/Non_BG/GASC/BCA_02.png";
import Sharmitha from "../../assets/profiles/Non_BG/GASC/BCA_03.png";
import Poomalar from "../../assets/profiles/Non_BG/GASC/BCA_04.png";

import Rakshu from "../../assets/profiles/Non_BG/GASC/IoT_01.png";
import Bhooshitha from "../../assets/profiles/Non_BG/GASC/IoT_02.png";
import Dhanalakshmi from "../../assets/profiles/Non_BG/GASC/IoT_03.png";
import Nikitha from "../../assets/profiles/Non_BG/GASC/IoT_04.png";

import Arshath from "../../assets/profiles/Non_BG/GASC/CS_01.png";
import Nithyanandhan from "../../assets/profiles/Non_BG/GASC/CS_02.png";

import DURGA from "../../assets/profiles/Non_BG/KSR/AI_01.png";
import GOKILA from "../../assets/profiles/Non_BG/KSR/AI_02.png";
import SANDHIYA from "../../assets/profiles/Non_BG/KSR/AI_03.png";
import SHAKTHEE from "../../assets/profiles/Non_BG/KSR/AI_04.png";

import SRIDHARAN from "../../assets/profiles/Non_BG/KSR/ML_01.png";
import VARATHARAJAN from "../../assets/profiles/Non_BG/KSR/ML_02.png";

gsap.registerPlugin(ScrollTrigger);

const teams = [
  {
    teamName: "Employee Team",
    members: [
      {
        name: "Dhanush ",
        role: "AI & ML Developer",
        image: Dhanush,
        description: "Innovating AI solutions for a smarter world.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/dhanushs-infotech",
          github: "#"
        },
        contact: "mailto:itdhanush68@gmail.com"
      },
      {
        name: "Karthick ",
        role: "AI & ML Developer",
        image: Karthick,
        description:
          "Crafting intelligent systems with a passion for technology.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/tkarthick28",
          github: "#"
        },
        contact: "mailto:tkarthick550@gmail.com"
      }
    ]
  },

  {
    teamName: "Agri Team",
    members: [
      {
        name: "Akash Deep ",
        role: "Team Lead",
        image: Akash,
        description: "A team lead is a coach, not just a boss.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/akash-deep-7624b9298"
        },
        contact: "mailto:AkashdeepInsights@outlook.com"
      },
      {
        name: "Raghu ",
        // role: "Team Lead",
        role: "AI & ML Developer",
        image: Raghu,
        // description: "Empower your team, and success will follow.",
        description: "AI doesn't just mimic intelligence; it enhances it.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/raghu-a-a12275238"
        },
        contact: "mailto:raghuarunkumar30@gmail.com"
      },
      {
        name: "Jaiganesh ",
        role: "Full-Stack Developer",
        image: Jai,
        description: "Creativity Meets Code: Stunning Web Interfaces",
        // description:
        //   "Where creativity meets code, crafting stunning web interfaces.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/jaiganesh-d-0184a6325/",
          github: "https://github.com/iBOYJAI"
        },
        contact: "mailto:jaiganeshd27@gmail.com"
      },
      {
        name: "Logesh ",
        role: "App Developer",
        image: Logesh,
        description: "Exploring creativity through technology.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/loges-waran-k-1152682aa"
        },
        contact: "mailto:LogeswaranKuppusamy@outlook.com"
      },
      {
        name: "Arshath ",
        role: "AI & ML Developer",
        image: Arshath,
        description: "AI makes the impossible possible.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/arshath-s-a923b2290"
        },
        contact: "mailto:arshathsheikabdullah@gmail.com"
      },
      {
        name: "Pavithra ",
        role: "AI & ML Developer",
        image: Pavi,
        description: "AI is not science fiction; it's science fact.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/pavithra-kathirvel-a60248302"
        },
        contact: "mailto:pavithrakathirvel@outlook.com"
      },
      {
        name: "Kabhini ",
        role: "AI & ML Developer",
        image: Kabhi,
        description: "Making data work smarter with innovative solutions.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/kabhini-arumugam-2097b6302"
        },
        contact: "mailto:kabhiniinfotech@gmail.com"
      },
      {
        name: "Rakshana Devi ",
        role: "IOT Developer",
        image: Rakshu,
        description: "Smart devices, smarter decisions.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/rakshu-offcial-034653312"
        },
        contact: "mailto:rakshuoffical@gamil.com"
      },
      {
        name: "Bhooshitha ",
        role: "IOT Developer",
        image: Bhooshitha,
        description: "Smart solutions for a smarter world.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/bhooshitha-keseven-b33556324"
        },
        contact: "mailto:bhooshithakeseven@gamil.com"
      }
    ]
  },

  {
    teamName: "Medical Team",
    members: [
      {
        name: "Abinesh ",
        role: "Team Lead",
        image: Abi,
        description: "In leadership, your team's success is your success.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/abinesh-sp-8a54502ab"
        },
        contact: "mailto:abineshprakash@outlook.com"
      },
      {
        name: "Monish S ",
        role: "App Developer",
        image: Monish,
        description: "Turning ideas into apps, one line of code at a time.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/monish-s16"
        },
        contact: "mailto:monishsadhasivam@outlook.com"
      },
      {
        name: "Hari Haran ",
        role: "AI & ML Developer",
        image: Hari,
        description: "With AI, the future is now.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/hari-hari-034500298"
        },
        contact: "mailto:hariharan.tirupur@outlook.com"
      },
      {
        name: "Ranjith  ",
        role: "AI & ML Developer",
        image: Ranji,
        description: "Machine learning: learning from the future.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/ranjith-n-0621b9319"
        },
        contact: "mailto:ranjithnandhagopal@outlook.com"
      },
      {
        name: "Nithyanandhan  ",
        role: "Web Developer",
        image: Nithyanandhan,
        description: "The web is a playground for innovation.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/nithyanandhan-muthu-58281131a"
        },
        contact: "mailto:nithyanandhanmuthu@gamil.com"
      },
      {
        name: " Sharmitha",
        role: "Web Developer",
        image: Sharmitha,
        description: "Innovating AI solutions for a smarter world.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/sharmitha-m-17055a324"
        },
        contact: "mailto:sharmithamurugan@outlook.com"
      },
      {
        name: "Poomalar",
        role: "Web Developer",
        image: Poomalar,
        description: "Innovating AI solutions for a smarter world.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/poomalar-t-966b52323"
        },
        contact: "mailto:poomalart@outlook.com"
      },
      {
        name: "Dhanalakshmi",
        role: "IOT Developer",
        image: Dhanalakshmi,
        description: "Smart systems for a connected future.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/dhana-kumar-13971a31a"
        },
        contact: "mailto:dhanalakshmikumer@gmail.com"
      },
      {
        name: "Nikitha Sri",
        role: "IOT Developer",
        image: Nikitha,
        description: "The future is smart, thanks to IoT.",
        socialMedia: {
          linkedin: ""
        },
        contact: "mailto:nikithasriayyasamy@gmail.com"
      },
      {
        name: "Kaviya ",
        role: "AI & ML Developer",
        image: Kaviya,
        description: "Innovation starts with AI.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/kaviya-s-621b88302"
        },
        contact: "mailto:kaviyasaravanan777@gmail.com"
      }
    ]
  },

  {
    teamName: "AI Team",
    members: [
      {
        name: "DURGA SARAVANAN",
        role: "AI & DS Developer",
        image: DURGA,
        description:
          "AI empowers machines, DS empowers insights, ML empowers decisions.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/durga-saravanan-13b49a24b"
        },
        contact: "mailto:durgasaran2004@gmail.com"
      },
      {
        name: "GOKILA R",
        role: "AI & DS Developer",
        image: GOKILA,
        description: "Data is the fuel, AI is the engine, ML is the driver.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/gokila-r-065a5b270"
        },
        contact: "mailto:gokilag812@gmail.com"
      },
      {
        name: "SANDHIYA PERIYASAMY",
        role: "AI & DS Developer",
        image: SANDHIYA,
        description:
          "In AI, we trust the process, in data, we trust the facts.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/sandhiya-p-65666624b/"
        },
        contact: "mailto:sandhiyaperiyasamy05@gmail.com"
      },
      {
        name: "SHAKTHEE NIVEDHA K",
        role: "AI & DS Developer",
        image: SHAKTHEE,
        description: "AI learns, DS informs, ML adapts.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/shakthee-nivedha-k-48312727b/"
        },
        contact: "mailto:shaktheenivedha@gmail.com"
      },
      {
        name: "SRIDHARAN",
        role: "AI & ML Developer",
        image: SRIDHARAN,
        description: "AI predicts, DS interprets, ML evolves.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/sridharan-vk-45b19b27b/"
        },
        contact: "mailto:sridharanvk123@gmail.com"
      },
      {
        name: "VARATHARAJAN",
        role: "AI & ML Developer",
        image: VARATHARAJAN,
        description: "Data shapes AI, AI refines data.",
        socialMedia: {
          linkedin: "https://www.linkedin.com/in/varatharajan-k-v-278340292/"
        },
        contact: "mailto:varatha9500@gmail.com"
      }
    ]
  }
];

const teamColors = {
  "Employee Team": "#c8c8c8",
  "Agri Team": "#c5ffc4",
  "Medical Team": "#c2cdff",
  "AI Team": "#f2e7ff"
};

const teamBorderColors = {
  "Employee Team": "#ffcfa5",
  "Agri Team": "#dbffc4",
  "Medical Team": "#a6a9ff",
  "AI Team": "#c69ae6"
};

const EAMA_Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  const closeModal = () => {
    setSelectedMember(null);
  };

  const titleRef = useRef(null);
  const teamRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5
        }
      }
    );

    teamRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 70%",
            scrub: 0.5,
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="m-4">
      <h1
        ref={titleRef}
        className="text-4xl md:text-6xl lg:text-8xl font-thin mb-8 text-center"
      >
        Our Team
      </h1>
      <div className="space-y-16">
        {teams.map((team, index) => (
          <div
            key={index}
            className="relative"
            ref={(el) => (teamRefs.current[index] = el)}
          >
            <h2 className="text-2xl text-black uppercase md:text-3xl lg:text-4xl font-secondary mb-12 text-center">
              {team.teamName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
              {team.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="relative text-center cursor-pointer shadow-lg bg-white p-4 md:p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    backgroundColor: teamColors[team.teamName],
                    borderColor: teamBorderColors[team.teamName]
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedMember(member)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl object-cover shadow-black shadow-2xl"
                    style={{
                      filter: "drop-shadow(0 0 0.20rem #4f4f4f)"
                    }}
                  />
                  <div className="mt-8">
                    <h3 className="text-xl md:text-2xl font-medium first-letter:capitalize lowercase">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base">{member.role}</p>
                    <p className="text-xs md:text-sm mt-2 text-black">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-1/2 xl:w-1/3 overflow-hidden relative p-4 md:p-6 lg:p-8"
            style={{
              backgroundColor:
                teamColors[
                  teams.find((team) => team.members.includes(selectedMember))
                    .teamName
                ]
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-96 md:h-96 lg:h-96 z-10 object-cover rounded-3xl shadow-[#4f4f4f] shadow-xl"
              style={{
                filter: "drop-shadow(0 0 0.90rem #4f4f4f)"
              }}
            />
            <div className="p-4 md:p-6 lg:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                {selectedMember.name}
              </h2>
              <p className="text-base md:text-xl text-black mb-4">
                {selectedMember.role}
              </p>
              <p className="text-black mb-4">"{selectedMember.description}"</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-black">Contact:</h4>
                <a
                  href={`mailto:${selectedMember.contact}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors"
                >
                  {selectedMember.contact}
                </a>
              </div>
              <div className="mt-6 flex gap-6 justify-center items-center">
                {selectedMember.socialMedia.instagram && (
                  <div className="relative group">
                    <a
                      href={selectedMember.socialMedia.instagram}
                      className="text-pink-500 hover:text-pink-700 transition-colors text-3xl"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Instagram
                    </span>
                  </div>
                )}
                {selectedMember.socialMedia.linkedin && (
                  <div className="relative group">
                    <a
                      href={selectedMember.socialMedia.linkedin}
                      className="text-blue-500 hover:text-blue-700 transition-colors text-3xl"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      LinkedIn
                    </span>
                  </div>
                )}
                {selectedMember.socialMedia.github && (
                  <div className="relative group">
                    <a
                      href={selectedMember.socialMedia.github}
                      className="text-black hover:text-black transition-colors text-3xl"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 text-xs bg-gray-800 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      GitHub
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-primary-dark text-red-500 hover:bg-black transition-all duration-700 text-2xl p-2 rounded-full"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EAMA_Team;
