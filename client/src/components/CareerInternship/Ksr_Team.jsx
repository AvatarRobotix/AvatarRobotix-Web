import React from "react";
import { FaLinkedin, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";

// With BG Image
import DURGA from "../../assets/profiles/BG/KSR/AI_01.png";
import GOKILA from "../../assets/profiles/BG/KSR/AI_02.png";
import SANDHIYA from "../../assets/profiles/BG/KSR/AI_03.png";
import SHAKTHEE from "../../assets/profiles/BG/KSR/AI_04.png";

import SRIDHARAN from "../../assets/profiles/BG/KSR/ML_01.png";
import VARATHARAJAN from "../../assets/profiles/BG/KSR/ML_02.png";

// Without BG Image
// import DURGA from "../../assets/profiles/Non_BG/KSR/AI_01.png";
// import GOKILA from "../../assets/profiles/Non_BG/KSR/AI_02.png";
// import SANDHIYA from "../../assets/profiles/Non_BG/KSR/AI_03.png";
// import SHAKTHEE from "../../assets/profiles/Non_BG/KSR/AI_04.png";

// import SRIDHARAN from "../../assets/profiles/Non_BG/KSR/ML_01.png";
// import VARATHARAJAN from "../../assets/profiles/Non_BG/KSR/ML_02.png";

const students = [
  {
    name: "DURGA SARAVANAN",
    department: "Department of Artificial Intelligence & Data Science",
    degree: "AI & DS",
    email: "mailto:durgasaran2004@gmail.com",
    year: "III/V",
    image: DURGA,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/durga-saravanan-13b49a24b",
      email: "mailto:durgasaran2004@gmail.com"
    },
    gender: "female",
    phone: "9080191925",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  },
  {
    name: "GOKILA R",
    department: "Department of Artificial Intelligence & Data Science",
    degree: "AI & DS",
    email: "mailto:gokilag812@gmail.com",
    year: "III/V",
    image: GOKILA,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/gokila-r-065a5b270",
      email: "mailto:gokilag812@gmail.com"
    },
    phone: "9342558156",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  },
  {
    name: "SANDHIYA PERIYASAMY",
    department: "Department of Artificial Intelligence & Data Science",
    degree: "AI & DS",
    email: "mailto:sandhiyaperiyasamy05@gmail.com",
    year: "III/V",
    image: SANDHIYA,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sandhiya-p-65666624b/",
      email: "mailto:sandhiyaperiyasamy05@gmail.com"
    },
    phone: "9600526547",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  },
  {
    name: "SHAKTHEE NIVEDHA K",
    department: "Department of Artificial Intelligence & Data Science",
    degree: "AI & DS",
    email: "mailto:shaktheenivedha@gmail.com",
    year: "III/V",
    image: SHAKTHEE,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/shakthee-nivedha-k-48312727b/",
      email: "mailto:shaktheenivedha@gmail.com"
    },
    phone: "6382991752",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  },
  {
    name: "SRIDHARAN",
    department: "Department of ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
    degree: "AI & ML",
    email: "mailto:sridharanvk123@gmail.com",
    year: "III/V",
    image: SRIDHARAN,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sridharan-vk-45b19b27b/",
      email: "mailto:sridharanvk123@gmail.com"
    },
    phone: "9361684631",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  },
  {
    name: "VARATHARAJAN",
    department: "Department of ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
    degree: "AI & ML",
    email: "mailto:varatha9500@gmail.com",
    year: "III/V",
    image: VARATHARAJAN,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/varatharajan-k-v-278340292/",
      email: "mailto:varatha9500@gmail.com"
    },
    phone: "9500791281",
    college: "K S RANGASAMY COLLEGE OF TECHNOLOGY, TIRUCHENGODE"
  }
];

// Sort students to place female students first
const sortedStudents = students.sort((a, b) => {
  if (a.gender === b.gender) return 0; // Keep the order the same for students with the same gender
  return a.gender === "male" ? -1 : 1; // Place female students before male students
});

const StudentCard = ({ student }) => (
  <motion.div
    className={`border border-[#dadada] shadow-[#7b7b7b] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${
      student.gender === "male"
        ? "bg-[#dadada] text-black"
        : "bg-[#dadada] text-black"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative w-full h-96">
      <img
        src={student.image}
        alt={`Profile picture of ${student.name}`}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg sm:text-xl font-medium mb-2">{student.name}</h3>
      <p className="text-xs sm:text-sm mb-1 truncate">{student.department}</p>
      <p className="text-xs sm:text-sm mb-2 truncate">{student.degree}</p>
      <div className="flex justify-center gap-2 sm:gap-4">
        {student.socialMedia.linkedin && (
          <a
            href={student.socialMedia.linkedin}
            className="text-[#3122ff] hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${student.name}`}
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {student.socialMedia.github && (
          <a
            href={student.socialMedia.github}
            className="text-[#585858] hover:text-gray-700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub profile of ${student.name}`}
          >
            <FaGithub size={20} />
          </a>
        )}
        {student.socialMedia.email && (
          <a
            href={student.socialMedia.email}
            className="text-[#f24] hover:text-red-700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${student.name}`}
          >
            <FaGoogle size={20} />
          </a>
        )}
        {student.socialMedia.outlook && (
          <a
            href={student.socialMedia.outlook}
            className="text-[#2a35ff] hover:text-blue-900"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Outlook profile of ${student.name}`}
          >
            <FaMicrosoft size={20} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Ksr_Team = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {sortedStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Ksr_Team;
