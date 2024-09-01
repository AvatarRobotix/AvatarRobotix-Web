import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // For animations

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:2000/api/contact", {
        name,
        email,
        content,
        subject
      });
      setResponseMessage(response.data.message);
      setShowNotification(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponseMessage(
        "Failed to send the message. Check the console for details."
      );
      setShowNotification(true);
    }

    // Hide the notification after 3 seconds
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-6 mt-20 sm:mt-10 lg:mt-24">
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center uppercase font-light text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-black mb-2">
            Name
          </label>
          <motion.input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#76ff73]"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-black mb-2">
            Email
          </label>
          <motion.input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#76ff73]"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-black mb-2">
            Subject
          </label>
          <motion.input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#76ff73]"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content" className="text-black mb-2">
            Message
          </label>
          <motion.textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="p-2 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#76ff73] resize-none h-32 md:h-40 lg:h-48"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full py-2 border border-[#b6ffb4] bg-[#c5ffc4] text-black uppercase rounded-lg hover:bg-[#45ff42] transition"
          whileHover={{ scale: 1.05 }}
        >
          Send
        </motion.button>
      </form>
      {showNotification && (
        <motion.div
          className="z-50 fixed bottom-5 right-5 bg-[#b6ffb4] text-black p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className=" text-black ">{responseMessage}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
