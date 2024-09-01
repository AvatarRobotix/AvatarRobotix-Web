import React from "react";
import { FaLinkedin, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";

import iBOY from "../../assets/img/iboy.png";
import iGIRL from "../../assets/img/igirl.png";

// With BG Image
// import Raghu from "../../assets/profiles/BG/AI_02.jpg";
// import Akash from "../../assets/profiles/BG/AI_03.jpg";
// import Abi from "../../assets/profiles/BG/AI_04.jpg";
// import Hari from "../../assets/profiles/BG/AI_06.jpg";
// import Kabhi from "../../assets/profiles/BG/AI_07.jpg";
// import Pavi from "../../assets/profiles/BG/AI_08.jpg";

// import Logesh from "../../assets/profiles/BG/BCA_01.jpg";
// import Monish from "../../assets/profiles/BG/BCA_02.jpg";
// import Sharmitha from "../../assets/profiles/BG/BCA_03.jpg";
// import Poomalar from "../../assets/profiles/BG/BCA_04.jpg";

// import Rakshu from "../../assets/profiles/BG/IoT_01.jpg";
// import Bhooshitha from "../../assets/profiles/BG/IoT_02.jpg";
// import Dhanalakshmi from "../../assets/profiles/BG/IoT_03.jpg";
// import Nikitha from "../../assets/profiles/BG/IoT_04.jpg";

// import Arshath from "../../assets/profiles/BG/CS_01.png";
// import Nithyanandhan from "../../assets/profiles/BG/CS_02.png";

// Without BG Image
import Raghu from "../../assets/profiles/Non_BG/AI_02.png";
import Akash from "../../assets/profiles/Non_BG/AI_03.png";
import Abi from "../../assets/profiles/Non_BG/AI_04.png";
import Hari from "../../assets/profiles/Non_BG/AI_06.png";
import Kabhi from "../../assets/profiles/Non_BG/AI_07.png";
import Pavi from "../../assets/profiles/Non_BG/AI_08.png";
import Kaviya from "../../assets/profiles/Non_BG/AI_09.png";

import Logesh from "../../assets/profiles/Non_BG/BCA_01.png";
import Monish from "../../assets/profiles/Non_BG/BCA_02.png";
import Sharmitha from "../../assets/profiles/Non_BG/BCA_03.png";
import Poomalar from "../../assets/profiles/Non_BG/BCA_04.png";

import Rakshu from "../../assets/profiles/Non_BG/IoT_01.png";
import Bhooshitha from "../../assets/profiles/Non_BG/IoT_02.png";
import Dhanalakshmi from "../../assets/profiles/Non_BG/IoT_03.png";
import Nikitha from "../../assets/profiles/Non_BG/IoT_04.png";

import Arshath from "../../assets/profiles/Non_BG/CS_01.png";
import Nithyanandhan from "../../assets/profiles/Non_BG/CS_02.png";

const students = [
  {
    name: "Raghu",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "raghu@example.com",
    year: "Year 1",
    image: Raghu,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/raghu-a-a12275238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/raghu",
      email: "raghuarunkumar30@gmail.com"
      // outlook: "https://outlook.com/raghu"
    },
    gender: "male"
  },
  {
    name: "Jaiganesh",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "jaiganesh.d@example.com",
    year: "Year 1",
    image: iBOY,
    socialMedia: {
      linkedin: "https://linkedin.com/in/jaiganeshd",
      github: "https://github.com/jaiganeshd",
      email: "mailto:jaiganesh.d@example.com",
      outlook: "https://outlook.com/jaiganeshd"
    },
    gender: "male"
  },
  {
    name: "Akash Deep",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "akash.deep@example.com",
    year: "Year 1",
    image: Akash,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/akash-deep-7624b9298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/akashdeep",
      // email: "mailto:akash.deep@example.com",
      outlook: "AkashdeepInsights@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Pavithra",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "pavithra@example.com",
    year: "Year 1",
    image: Pavi,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/pavithra-kathirvel-a60248302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/pavithra",
      email: "mailto:pavithra@example.com",
      outlook: "pavithrakathirvel@outlook.com"
    },
    gender: "female"
  },
  {
    name: "Kabhini",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "kabhini@example.com",
    year: "Year 1",
    image: Kabhi,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/kabhini-arumugam-2097b6302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/kabhini",
      email: "kabhiniinfotech@gmail.com"
      // outlook: "https://outlook.com/kabhini"
    },
    gender: "female"
  },
  {
    name: "Abinesh",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "abinesh@example.com",
    year: "Year 1",
    image: Abi,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/abinesh-sp-8a54502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/abinesh",
      // email: "mailto:abinesh@example.com",
      outlook: "abineshprakash@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Hari Haran",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "hari.haran@example.com",
    year: "Year 1",
    image: Hari,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/hari-hari-034500298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/hariharan",
      // email: "mailto:hari.haran@example.com",
      outlook: "hariharan.tirupur@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Ranjith",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "ranjith@example.com",
    year: "Year 1",
    image: iBOY,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/ranjith-n-0621b9319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/ranjith",
      // email: "mailto:ranjith@example.com",
      outlook: "ranjithnandhagopal@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Kaviya",
    department: "Department of Artificial Intelligence",
    degree: "B.Sc. CS AI & DS",
    email: "kaviya@example.com",
    year: "Year 1",
    image: Kaviya,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/kaviya-s-621b88302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/kaviya",
      email: "kaviyasaravanan777@gmail.com"
      // outlook: "https://outlook.com/kaviya"
    },
    gender: "female"
  },

  {
    name: "Rakshana Devi",
    department: "Department of Internet of Things",
    degree: "B.SC IOT",
    email: "rakshana.devi@example.com",
    year: "Year 1",
    image: Rakshu,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/rakshu-offcial-034653312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/rakshana-devi",
      email: "rakshuoffical@gamil.com"
      // outlook: "https://outlook.com/rakshana-devi"
    },
    gender: "female"
  },
  {
    name: "Dhanalakshmi",
    department: "Department of Internet of Things",
    degree: "B.SC IOT",
    email: "dhanalakshmi@example.com",
    year: "Year 1",
    image: Dhanalakshmi,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/dhana-kumar-13971a31a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/dhanalakshmi",
      email: "dhanalakshmikumer@gmail.com"
      // outlook: "https://outlook.com/dhanalakshmi"
    },
    gender: "female"
  },
  {
    name: "Nikitha Sri",
    department: "Department of Internet of Things",
    degree: "B.SC IOT",
    email: "nikitha.sri@example.com",
    year: "Year 1",
    image: Nikitha,
    socialMedia: {
      // linkedin: "https://linkedin.com/in/nikitha-sri",
      // github: "https://github.com/nikitha-sri",
      email: "nikithasriayyasamy@gmail.com"
      // outlook: "https://outlook.com/nikitha-sri"
    },
    gender: "female"
  },
  {
    name: "Bhooshitha",
    department: "Department of Internet of Things",
    degree: "B.SC IOT",
    email: "bhooshitha@example.com",
    year: "Year 1",
    image: Bhooshitha,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/bhooshitha-keseven-b33556324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/bhooshitha",
      email: "bhooshithakeseven@gamil.com"
      // outlook: "https://outlook.com/bhooshitha"
    },
    gender: "female"
  },

  {
    name: "Logesh",
    department: "Department of Computer Application",
    degree: "BCA",
    email: "logesh@example.com",
    year: "Year 1",
    image: Logesh,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/loges-waran-k-1152682aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/logesh",
      // email: "mailto:logesh@example.com",
      outlook: "LogeswaranKuppusamy@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Monish S",
    department: "Department of Computer Application",
    degree: "BCA",
    email: "monish.s@example.com",
    year: "Year 1",
    image: Monish,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/monish-s16?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/monishs",
      // email: "mailto:monish.s@example.com",
      outlook: "monishsadhasivam@outlook.com"
    },
    gender: "male"
  },
  {
    name: "Sharmitha",
    department: "Department of Computer Application",
    degree: "BCA",
    email: "sharmitha@example.com",
    year: "Year 1",
    image: Sharmitha,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/sharmitha-m-17055a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/sharmitha",
      // email: "mailto:sharmitha@example.com",
      outlook: "sharmithamurugan@outlook.com"
    },
    gender: "female"
  },
  {
    name: "Poomalar",
    department: "Department of Computer Application",
    degree: "BCA",
    email: "poomalar@example.com",
    year: "Year 1",
    image: Poomalar,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/poomalar-t-966b52323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/poomalar",
      // email: "mailto:poomalar@example.com",
      outlook: "poomalart@outlook.com"
    },
    gender: "female"
  },

  {
    name: "Arshath",
    department: "Department of Computer Science",
    degree: "B.SC CS",
    email: "arshath@example.com",
    year: "Year 1",
    image: Arshath,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/arshath-s-a923b2290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/arshath",
      email: "arshathsheikabdullah@gmail.com"
      // outlook: "https://outlook.com/arshath"
    },
    gender: "male"
  },
  {
    name: "Nithyanandhan",
    department: "Department of Computer Science",
    degree: "B.SC CS",
    email: "nithyanandhan@example.com",
    year: "Year 1",
    image: Nithyanandhan,
    socialMedia: {
      linkedin:
        "https://www.linkedin.com/in/nithyanandhan-muthu-58281131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // github: "https://github.com/nithyanandhan",
      email: "nithyanandhanmuthu@gamil.com"
      // outlook: "https://outlook.com/nithyanandhan"
    },
    gender: "male"
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
    <div className="relative w-full h-48">
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
