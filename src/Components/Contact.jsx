import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setStatus("Please fill all fields");
      return;
    }
    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email");
      return;
    }

    setStatus("Sending message...");
    setTimeout(() => {
      setStatus("Message sent successfully! Thank you.");
      setFormData({ email: "", message: "" });
    }, 1500);
  };

  return (
   <div id="contact" className=" bg-gray-900 text-white">
       <section className="max-w-6xl mx-auto flex flex-col justify-between ">
     <div className="flex flex-col md:flex-row items-center justify-around py-20 gap-10 md:gap-30">
        {/* Left info panel */}
         <div className="space-y-6 max-w-md md:max-w-none w-full md:w-auto">
          <h1 className="text-5xl font-extrabold flex items-center gap-2">
            Anam <span className="text-red-500">.</span>
          </h1>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3"><FaEnvelope /> anamolhasan.job@gmail.com</p>
            <p className="flex items-center gap-3"><FaPhone /> +88 01950029882</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> Brahmon-baria, Bangladesh</p>
          </div>
          <h3 className="uppercase tracking-widest font-semibold text-gray-400">Connect On</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/an.am.hsan.2024?mibextid=ZbWKwL" aria-label="Facebook" className="p-3 rounded-full bg-[#1a1b29] hover:bg-red-600 transition-colors"><FaFacebookF /></a>
            <a href="www.linkedin.com/in/anamolhasan" aria-label="LinkedIn" className="p-3 rounded-full bg-[#1a1b29] hover:bg-blue-700 transition-colors"><FaLinkedinIn /></a>
            <a href="https://github.com/anamolhasan" aria-label="Github" className="p-3 rounded-full bg-[#1a1b29] hover:bg-gray-700 transition-colors"><FaGithub /></a>
            <a href="#" aria-label="Discord" className="p-3 rounded-full bg-[#1a1b29] hover:bg-indigo-700 transition-colors"><FaDiscord /></a>
          </div>
        </div>

        {/* Right contact form */}
        <div className="w-full max-w-md md:max-w-none">
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="">CONTACT</span> ME
          </h2>
          <p className="uppercase text-sm text-gray-400 mb-8">
            IF YOU HAVE QUESTIONS PLEASE LEAVE A MESSAGE
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-[#1a1b29] p-4 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className="w-full bg-[#1a1b29] p-4 rounded-md placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
            >
              Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-red-500 font-semibold">{status}</p>}
        </div>
      </div>


      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
        © This Portfolio is Proudly Owned by Anamol Hasan.
      </footer>
    </section>
   </div>
  );
};

export default Contact;
