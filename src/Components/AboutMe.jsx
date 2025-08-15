import React from "react";
import { MdPersonOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <section id="about-me" className="relative bg-gradient-to-br  px-6 md:px-20">
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Icon + Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 shadow-lg mb-4">
            <MdPersonOutline className="text-white text-4xl" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-800 tracking-wide caveat-write">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mt-2 rounded-full"></div>
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl p-8 md:p-12 transition-transform hover:scale-[1.02]">
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I am an aspiring Frontend Developer with a deep passion for crafting
            engaging and intuitive web experiences. While I may be early in my
            career, my enthusiasm for learning and commitment to improving my
            skills drive me to constantly grow as a developer. I am dedicated to
            mastering the tools and technologies that allow me to create
            beautiful, responsive, and user-friendly websites.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            My journey into frontend development began with a curiosity about
            how websites work and the desire to build interactive, visually
            appealing digital experiences. Since then, I have developed a strong
            foundation in HTML, CSS, and JavaScript, as well as familiarity with
            modern frameworks like React. I enjoy learning about the latest
            trends in web design, from responsive layouts to cutting-edge
            JavaScript libraries, and I'm eager to apply this knowledge to
            real-world projects.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I am especially passionate about creating clean, accessible code
            that ensures a seamless user experience across different devices and
            screen sizes. Whether it’s perfecting a pixel-perfect design or
            solving complex interaction challenges, I approach every project
            with meticulous attention to detail. Though I may not have years of
            experience yet, I believe my dedication, problem-solving abilities,
            and collaborative spirit are my strongest assets.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            I am excited about the opportunity to contribute my skills to
            meaningful projects, collaborate with experienced professionals, and
            continue to learn from every experience along the way. As I build my
            portfolio, I look forward to working on projects that challenge my
            abilities and help me grow into a well-rounded frontend developer.
            I am eager to make a positive impact and bring creative ideas to life
            on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
