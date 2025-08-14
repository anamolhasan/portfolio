import React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { MdWbTwilight } from "react-icons/md";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiFirebase,
  SiReactrouter,
  SiJsonwebtokens,
  SiStripe,
  SiFigma,
} from "react-icons/si";

const Skills = () => {
  // ==== data (white icon inside colored circle) ====
  const frontend = [
    { name: "HTML", Icon: FaHtml5, bg: "bg-orange-500" },
    { name: "CSS", Icon: FaCss3Alt, bg: "bg-blue-500" },
    { name: "JavaScript", Icon: SiJavascript, bg: "bg-yellow-400" },
    { name: "React", Icon: FaReact, bg: "bg-cyan-400" },
    { name: "React Router v7", Icon: SiReactrouter, bg: "bg-red-500" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, bg: "bg-teal-400" },
  ];

  const backend = [
    { name: "Node.js", Icon: FaNodeJs, bg: "bg-green-500" },
    { name: "Express.js", Icon: SiExpress, bg: "bg-gray-500" },
    { name: "MongoDB", Icon: SiMongodb, bg: "bg-green-600" },
    { name: "Firebase", Icon: SiFirebase, bg: "bg-yellow-500" },
    { name: "JWT Auth", Icon: SiJsonwebtokens, bg: "bg-orange-400" },
    { name: "Stripe", Icon: SiStripe, bg: "bg-purple-500" },
  ];

  const tools = [
    { name: "Git", Icon: FaGitAlt, bg: "bg-red-500" },
    { name: "GitHub", Icon: SiGithub, bg: "bg-gray-800" },
    { name: "VS Code", Icon: BiLogoVisualStudio, bg: "bg-blue-600" },
    { name: "Figma", Icon: SiFigma, bg: "bg-pink-500" },
  ];

  // ==== reusable renderer ====
  const SkillCategory = ({ title, skills }) => (
    <div className="text-center">
      <h3 className="text-3xl font-bold mb-6">{title}</h3>
      {/* <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"> */}
      <div className="flex  flex-wrap justify-center gap-8  place-items-center">
        {skills.map(({ name, Icon, bg }, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-16 h-16 rounded-full ${bg} flex items-center justify-center transform transition
                          hover:scale-105 shadow-md`}
            >
              <Icon className="text-4xl text-white" />
            </div>
            <p className="mt-3 font-bold">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className=" text-black py-16">
      <div className="container mx-auto px-5 md:px-10 space-y-14">
        {/* Section header (icon top, text bottom, centered) */}
        <div className="flex flex-col items-center justify-center text-center">
          <MdWbTwilight className="text-5xl mb-2" />
          <p className="tracking-[0.2em] text-sm opacity-80">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skill Set</h2>
        </div>

        {/* Categories */}
        <SkillCategory title="Frontend" skills={frontend} />
        <SkillCategory title="Backend" skills={backend} />
        <SkillCategory title="Tools" skills={tools} />
      </div>
    </section>
  );
};

export default Skills;
